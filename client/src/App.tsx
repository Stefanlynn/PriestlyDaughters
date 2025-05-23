import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import MediaPreloader from "./components/MediaPreloader";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import BlogPost from "./pages/blog/BlogPost";
import BlogIndex from "./pages/blog/BlogIndex";
import About from "./pages/About";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ThankYou from "./pages/ThankYou";
import SubscribeThankYou from "./pages/SubscribeThankYou";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/community" component={Community} />
      <Route path="/blog" component={BlogIndex} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/resources" component={Resources} />
      <Route path="/contact" component={Contact} />
      <Route path="/coming-soon" component={ComingSoon} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/subscribe-thank-you" component={SubscribeThankYou} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MediaPreloader />
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
