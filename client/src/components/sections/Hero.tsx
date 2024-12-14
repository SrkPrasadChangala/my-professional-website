import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Full-Stack Developer <br />
              <span className="text-primary">& Solution Architect</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Specialized in building scalable enterprise applications using
              React, Java, and cloud technologies. Let's turn your vision into
              reality.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a href="#contact">
                  Hire Me <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" download>
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-md mx-auto aspect-square overflow-hidden"
          >
            <img
              src="https://replit.com/@Srkprasad9/professional-portfolio-react-showcase/raw/main/client/src/components/img/myImage.jpg"
              alt="Professional headshot"
              className="w-full h-full object-cover rounded-lg shadow-xl"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/400x400?text=Profile+Image";
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
