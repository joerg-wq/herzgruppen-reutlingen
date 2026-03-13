import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { getMetaForPath } from "./routes";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Locations = lazy(() => import("./pages/Locations"));
const Join = lazy(() => import("./pages/Join"));
const Organization = lazy(() => import("./pages/Organization"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const Imprint = lazy(() => import("./pages/Imprint"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Accessibility = lazy(() => import("./pages/Accessibility"));

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

function MetaUpdater() {
  const [location] = useLocation();
  useEffect(() => {
    const meta = getMetaForPath(location);
    if (meta) {
      document.title = meta.title;

      const setMeta = (selector: string, content: string) => {
        const el = document.querySelector(selector);
        if (el) el.setAttribute("content", content);
      };

      setMeta('meta[name="description"]', meta.description);
      setMeta('meta[property="og:title"]', meta.title);
      setMeta('meta[property="og:description"]', meta.description);
      setMeta('meta[property="og:url"]', `https://herzgruppen-reutlingen.pages.dev${meta.path === "/" ? "" : meta.path}`);
      setMeta('meta[name="twitter:title"]', meta.title);
      setMeta('meta[name="twitter:description"]', meta.description);

      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = `https://herzgruppen-reutlingen.pages.dev${meta.path === "/" ? "" : meta.path}`;
    }
  }, [location]);
  return null;
}

function PageSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageSpinner />}>
      <ScrollToTop />
      <MetaUpdater />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/locations" component={Locations} />
      <Route path="/join" component={Join} />
      <Route path="/organization" component={Organization} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/impressum" component={Imprint} />
      <Route path="/datenschutz" component={Privacy} />
      <Route path="/barrierefreiheit" component={Accessibility} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
      </Switch>
    </Suspense>
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
