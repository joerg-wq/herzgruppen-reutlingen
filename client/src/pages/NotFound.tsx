import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main id="main" className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-lg mx-4 shadow-lg">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                <AlertCircle className="relative h-16 w-16 text-primary" />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-foreground mb-2">404</h1>

            <h2 className="text-xl font-semibold text-foreground mb-4">
              Seite nicht gefunden
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Die gewünschte Seite existiert leider nicht.
              <br />
              Möglicherweise wurde sie verschoben oder entfernt.
            </p>

            <Button
              onClick={handleGoHome}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg shadow-md"
            >
              <Home className="w-4 h-4 mr-2" />
              Zur Startseite
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
