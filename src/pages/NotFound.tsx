import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="pt-24 min-h-screen flex items-center justify-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg mx-auto"
        >
          <div className="font-serif text-8xl md:text-9xl font-bold text-primary/20 mb-4">
            404
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page non trouvée
          </h1>
          <p className="text-muted-foreground mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-primary rounded-full">
              <Link to="/">
                <Home className="mr-2 w-4 h-4" />
                Retour à l'accueil
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Page précédente
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
