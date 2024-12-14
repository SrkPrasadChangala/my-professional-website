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
              Specialized in building scalable enterprise applications using React,
              Java, and cloud technologies. Let's turn your vision into reality.
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
            className="relative aspect-square"
          >
            <img
              src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec"
              alt="Professional headshot"
              className="rounded-lg object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
