import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, Timer, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with React and modern technologies.",
    icon: Code2,
    features: ["Responsive Design", "Performance Optimization", "SEO Best Practices"]
  },
  {
    title: "Enterprise Solutions",
    description: "Scalable applications for large organizations using Java and Spring Boot.",
    icon: Cloud,
    features: ["Microservices Architecture", "Cloud Integration", "High Availability"]
  },
  {
    title: "Pay After Delivery",
    description: "Flexible payment options to ensure your satisfaction.",
    icon: Timer,
    features: ["Risk-free Development", "Milestone-based Payments", "Quality Guarantee"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional development services with flexible payment options,
            including pay-after-delivery for qualified projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-xl font-semibold">
            Starting at <span className="text-primary">$35/hour</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
