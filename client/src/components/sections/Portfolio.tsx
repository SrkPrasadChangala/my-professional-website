import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SiReact, SiSpringboot, SiAmazon } from "react-icons/si";

const projects = [
  {
    title: "Enterprise Inventory Management",
    description: "A scalable inventory management system built with React and Spring Boot.",
    tech: ["React", "Java", "AWS"],
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657",
    link: "https://github.com/example/inventory"
  },
  {
    title: "Cloud Integration Platform",
    description: "Microservices-based integration platform for enterprise systems.",
    tech: ["Spring Boot", "AWS", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1643513208377-8a62b7a2240f",
    link: "https://github.com/example/cloud-platform"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in building
            scalable enterprise applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
