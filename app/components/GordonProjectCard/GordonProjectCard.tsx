"use client";

import { motion } from "framer-motion";
import { ProjectCardProps } from "../../types/experience";

type Props = ProjectCardProps & { index?: number };

export default function ProjectCard(props: Props) {
  if (props.loading) {
    return <div className="project-row project-row--loading">Loading selected work…</div>;
  }

  const { title, description, technologies, pageUrl, index = 0 } = props;
  return (
    <motion.a
      href={pageUrl}
      target="_blank"
      rel="noreferrer"
      className="project-row"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, delay: index * 0.05 }}
    >
      <span className="project-row__number">{String(index + 1).padStart(2, "0")}</span>
      <div className="project-row__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-row__tags">
          {technologies.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </div>
      <span className="project-row__arrow" aria-hidden="true">↗</span>
    </motion.a>
  );
}
