import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { createRegistration, getAllRegistrations, getRegistrationById, updateRegistrationStatus } from "./db";
import { storagePut } from "./storage";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  registrations: router({
    create: publicProcedure
      .input(
        z.object({
          firstName: z.string().min(1),
          lastName: z.string().min(1),
          email: z.string().email(),
          phone: z.string().optional(),
          dateOfBirth: z.string().optional(),
          medicalCondition: z.string().optional(),
          doctorRecommendation: z.string().optional(),
          preferredLocation: z.string().optional(),
          documentBase64: z.string().optional(),
          documentFileName: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        let documentUrl: string | undefined;
        let documentKey: string | undefined;

        // Upload document if provided
        if (input.documentBase64 && input.documentFileName) {
          try {
            const buffer = Buffer.from(input.documentBase64, "base64");
            const fileKey = `registrations/${Date.now()}-${input.documentFileName}`;
            const { url } = await storagePut(fileKey, buffer, "application/pdf");
            documentUrl = url;
            documentKey = fileKey;
          } catch (error) {
            console.error("[Storage] Failed to upload document:", error);
            throw new Error("Failed to upload document");
          }
        }

        // Create registration record
        await createRegistration({
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          phone: input.phone,
          dateOfBirth: input.dateOfBirth,
          medicalCondition: input.medicalCondition,
          doctorRecommendation: input.doctorRecommendation,
          preferredLocation: input.preferredLocation,
          documentUrl,
          documentKey,
          status: "pending",
        });

        return { success: true, message: "Registration submitted successfully" };
      }),

    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Only admins can view registrations");
      }
      return await getAllRegistrations();
    }),

    getById: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Only admins can view registrations");
        }
        return await getRegistrationById(input.id);
      }),

    updateStatus: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["pending", "approved", "rejected"]),
        })
      )
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Only admins can update registrations");
        }
        await updateRegistrationStatus(input.id, input.status);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
