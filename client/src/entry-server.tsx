import { renderToString } from "react-dom/server";
import { Router, Route, Switch } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Join from "./pages/Join";
import Organization from "./pages/Organization";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import Accessibility from "./pages/Accessibility";

export function render(url: string): string {
  return renderToString(
    <Router ssrPath={url}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
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
          </Switch>
        </TooltipProvider>
      </ThemeProvider>
    </Router>,
  );
}
