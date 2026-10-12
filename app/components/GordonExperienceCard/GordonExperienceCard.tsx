"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types/experience";

export default function ExperienceCard({ role, company, period, description, index = 0 }: Experience & { index?: number }) {
  return (
    <motion.article className="experience-row" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, delay: index * 0.04 }}>
      <p className="experience-row__period">{period}</p>
      <div className="experience-row__title">
        <h3>{role}</h3>
        {company ? <p>{company}</p> : null}
      </div>
      <div className="experience-row__detail">
        <ul>{description.map((item) => <li key={item}>{item}</li>)}</ul>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
    </motion.article>
  );
}
