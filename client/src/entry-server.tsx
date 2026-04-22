import { renderToString } from "react-dom/server";
import { Router, Route, Switch } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ROUTE_META } from "./routes";

const resolvedRoutes = await Promise.all(
  ROUTE_META.map(async (r) => ({
    path: r.path,
    component: (await r.load()).default,
  })),
);

export function render(url: string): string {
  return renderToString(
    <HelmetProvider>
      <Router ssrPath={url}>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Switch>
              {resolvedRoutes.map(({ path, component: C }) => (
                <Route key={path} path={path} component={C} />
              ))}
            </Switch>
          </TooltipProvider>
        </ThemeProvider>
      </Router>
    </HelmetProvider>,
  );
}
