import { motion } from "framer-motion";
import { FaGithub, FaAws } from "react-icons/fa";
import React from "react";

const certifications = [
  {
    title: "GitHub Foundations",
    icon: FaGithub,
    url: "https://www.credly.com/badges/b4575c70-343b-43dc-a324-3270b7192f10/public_url",
  },
  {
    title: "AWS Cloud Practitioner",
    icon: FaAws,
    url: "https://www.credly.com/badges/93e1f3f2-f38a-4912-b0bb-d00bf55e648c/public_url",
  },
  {
    title: "AWS Compute",
    icon: FaAws,
    url: "https://www.credly.com/badges/d3e05824-c123-4ce9-90c6-41233387a08f/public_url",
  },
  {
    title: "AWS Serverless",
    icon: FaAws,
    url: "https://www.credly.com/badges/2e62fb46-3230-4e61-af27-bc587d3dbfd7/public_url",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my professional certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 border border-gray-300 rounded-lg shadow-sm text-center cursor-pointer"
              onClick={() => window.open(certification.url, "_blank")}
            >
              <div className="block">
                <h3 className="text-lg font-semibold">{certification.title}</h3>
                {certification.icon && certification.url && (
                  <div className="mt-4">
                    <certification.icon className="text-4xl mx-auto" />
                    <a
                      href={certification.url}
                      className="mt-2 text-blue-500 underline text-sm block"
                    >
                      View Certification
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
