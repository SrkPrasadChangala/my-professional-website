import { motion } from "framer-motion";
import { SiReact, SiSpringboot, SiSpring, SiTypescript, SiPython, SiAmazon } from "react-icons/si";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React/Next.js", icon: SiReact, level: 95 },
  { name: "Java/Spring Boot", icon: SiSpringboot, level: 90 },
  { name: "TypeScript", icon: SiTypescript, level: 85 },
  { name: "Python", icon: SiPython, level: 80 },
  { name: "AWS Cloud", icon: SiAmazon, level: 85 },
  { name: "Spring Framework", icon: SiSpring, level: 90 }
];

export function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise in modern web technologies and enterprise application development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-2">
                <skill.icon className="h-6 w-6 text-primary" />
                <span className="font-medium">{skill.name}</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
