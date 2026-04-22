import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SEO from "./components/SEO";
import { ROUTE_META } from "./routes";

const lazyRoutes = ROUTE_META.map((r) => ({
  path: r.path,
  component: lazy(r.load),
}));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Let the page render, then scroll to the anchor
      requestAnimationFrame(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo(0, 0);
        }
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <SEO />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[60vh]">
          <Spinner className="w-8 h-8 text-primary" />
        </div>
      }>
      <Switch>
      {lazyRoutes.map((r) => (
        <Route key={r.path} path={r.path} component={r.component} />
      ))}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
      </Switch>
      </Suspense>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
