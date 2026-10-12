"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GordonNavBar from "@/components/GordonNavBar/GordonNavBar";
import ProjectCard from "@/components/GordonProjectCard/GordonProjectCard";
import ExperienceCard from "@/components/GordonExperienceCard/GordonExperienceCard";
import SectionIntro from "@/components/SectionIntro/SectionIntro";
import { Footer } from "@/components/Footer/Footer";
import { EducationData, experienceData, projectData } from "@/constants/ExperienceData";
import IntroGateway from "@/components/IntroGateway/IntroGateway";
import { assetPath } from "@/utils/assetPath";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const capabilities = [
  { number: "01", title: "Product engineering", detail: "Next.js · React · TypeScript · Node.js" },
  { number: "02", title: "Applied intelligence", detail: "Python · ML · RAG · Multi-agent systems" },
  { number: "03", title: "Scientific computing", detail: "C++ · Numerical methods · Data systems" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div className="site-frame">
      <IntroGateway />
      <GordonNavBar />
      <main>
        <section ref={heroRef} className="hero" id="Profile">
          <motion.div
            className="hero__portrait"
            style={{ y: portraitY, scale: portraitScale }}
          >
            <Image src={assetPath("/images/profolio.JPG")} alt="Gordon Wong beneath a canopy of lights" fill priority sizes="(max-width: 767px) 100vw, 48vw" className="object-cover" />
          </motion.div>
          <div className="hero__shade" />

          <motion.div
            className="hero__content"
          >
            <motion.p variants={reveal} className="eyebrow text-accent">Software engineer · Hong Kong</motion.p>
            <div className="hero__heading-wrap">
              <motion.h1 variants={reveal} className="hero__heading">Gordon<br />Wong<span className="text-accent">.</span></motion.h1>
              <motion.p variants={reveal} className="hero__index" aria-hidden="true">01—26</motion.p>
            </div>
            <motion.div variants={reveal} className="hero__footer">
              <p>I build thoughtful software at the intersection of computational science, applied AI, and human experience.</p>
              <div className="hero__links"><Link className="text-link" href="#Projects">Selected work <span aria-hidden="true">↘</span></Link><a className="text-link text-link--muted" href="https://drive.google.com/file/d/1DOLApQiA76RKxifcA7lyFdBLsTlaObEU/view?usp=sharing" target="_blank" rel="noreferrer">CV <span aria-hidden="true">↗</span></a></div>
            </motion.div>
          </motion.div>

          <div className="hero__rail"><span>Engineer</span><span>Researcher</span><span>Creator</span></div>
        </section>

        <motion.section className="intro-section section-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p variants={reveal} className="eyebrow">What I do</motion.p>
          <motion.p variants={reveal} className="intro-statement">Turning difficult ideas into <em>clear, useful</em> products—from numerical solvers to intelligent interfaces.</motion.p>
        </motion.section>

        <section className="projects-section" id="Projects">
          <div className="section-shell">
            <SectionIntro eyebrow="Selected work / 2024—26" title="Things I’ve built." description="A focused selection of applied AI, machine learning, and systems projects." />
            <div className="project-list">
              {projectData.slice(0, 5).map((project, index) => <ProjectCard key={index} {...project} index={index} />)}
            </div>
            <a className="text-link projects-more" href="https://github.com/gordonwky/" target="_blank" rel="noreferrer">More experiments on GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="capabilities-section" id="Programming">
          <div className="section-shell capabilities-grid">
            <div className="capabilities-heading">
              <p className="eyebrow text-accent">Capabilities</p>
              <h2>Wide lens.<br /><span>Sharp focus.</span></h2>
            </div>
            <div className="capabilities-list">
              {capabilities.map((capability) => (
                <motion.div key={capability.number} className="capability-row" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.6 }}>
                  <span>{capability.number}</span>
                  <div><h3>{capability.title}</h3><p>{capability.detail}</p></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section" id="Experience">
          <div className="section-shell">
            <SectionIntro eyebrow="Experience / 2020—Now" title="Where I’ve made an impact." description="Engineering, research, and teaching roles shaped by curiosity and measurable outcomes." />
            <div className="experience-list">
              {experienceData.map((experience, index) => <ExperienceCard key={`${experience.role}-${experience.period}`} {...experience} index={index} />)}
            </div>
          </div>
        </section>

        <section className="education-section" id="Education">
          <div className="section-shell education-grid">
            <div><p className="eyebrow">Education</p><h2>Physics mind.<br /><em>Builder’s hands.</em></h2></div>
            <div className="education-list">
              {EducationData.map((education) => (
                <div className="education-item" key={education.role}>
                  <p>{education.period}</p><h3>{education.role}</h3><span>{education.description[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
