import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <div className="space-y-6">
            <Button className="w-full" asChild>
              <a
                href="mailto:sivaramakrishnaprasad10@gmail.com"
                className="flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
            </Button>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/SrkPrasadChangala"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/siva-rama-krishna-prasad-changala-a3115a253/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="text-center mt-6">
              <Button variant="ghost" size="lg" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Fairborn+OH+45324" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MapPin className="h-4 w-4" />
                  Fairborn, OH 45324
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}