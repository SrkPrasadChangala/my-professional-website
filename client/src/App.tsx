import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import { ThemeProvider } from "@/components/ui/theme-provider";

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <Switch>
        <Route path="/" component={Home} />
        <Route>404 Page Not Found</Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
