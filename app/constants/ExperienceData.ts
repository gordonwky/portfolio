// data/experienceData.ts or inside your component
import { Experience } from "../types/experience"
import { ProjectCardProps } from "../types/experience"
export const EducationData : Experience[] = 
[
  {
    role: "MSc in Computational Science and Engineering",
    companyLogo:"/images/McMaster-logo.png",
    period:"2023 - 2025",
    description: [
      "Dissertation: Mixed-Precision GMRES-Based Iterative Refinement Sparse Linear Solver with QDLDL"
    ]
  },

    {
    role: "BSc in Physics (minor in Mathematics and Humanities)",
    companyLogo:"/images/Hong_Kong_University_of_Science_and_Technology-Logo.svg",
    period:"2016 - 2021",
    description: [
      "Dissertation: Markov Chain Monte Carlo Simulation on Ising Model"
    ]
  },
]
export const experienceData : Experience[] = [
    {
      role: "AI Engineer",
      company: "Acquaintance Enterprises Limited (LOGFLOWS)",
      period: "2025 - 2026",
      description: [
        "Develop agentic AI systems for logistics planning, giving planners natural-language workflows to review routes, move orders, sequence stops, and assess operational feasibility.",
        "Design LLM tool-calling architecture across SQL databases, backend APIs, route-planning services, validation logic, and optimization heuristics.",
        "Test with real operational data and improve production readiness through guardrails, human approval flows, logging, data-quality checks, and technical documentation."
      ]
    },
    {
      role: "Secondary School Teacher",
      company: "Pok Oi Hospital Tang Pui King Memorial College",
      companyLogo: "/images/tpklogo.jpg",
      period: "2022 - 2023",
      description: [
        "Taught Physics, Science, and Computer Literacy, translating technical ideas into clear, practical lessons for diverse learners.",
        "Led a STEM robotics team using Arduino programming, strengthening mentoring, training, presentation, and cross-functional communication skills."
      ]
    },
    {
      role: "Full Stack Developer / Data Analyst",
      company: "Rare Elements Limited",
      companyLogo: "/images/rare_elements.png",
      period: "2021",
      description: [
        "Built full-stack and analytics solutions with React, Node.js, Azure, Python, SQL, Google Analytics, and BigQuery for reporting and digital-transformation work.",
        "Developed ETL workflows and dashboards that turned customer, marketing, and business data into structured KPIs and stakeholder-facing insights.",
        "Worked with business users to clarify requirements, validate outputs, and improve reporting usability."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Hong Kong Observatory",
      companyLogo: "/images/Hong_Kong_Observatory_Logo_(2018).svg.png",
      period: "2020",
      description: [
        "Analysed millions of aviation and meteorological records and built fuel-consumption forecasting models with approximately 90% prediction accuracy.",
        "Designed a C++ flight-path optimization algorithm using forecast weather data to evaluate fuel-efficient routes.",
        "Simulated alternative routing scenarios that demonstrated potential fuel savings of up to 15%."
      ]
    }
  ];

export const projectData: ProjectCardProps[] = [

    {
    title: "Full-Stack AI Travel Assistant with Multi-Agent Orchestration",
    description:
      " An LLM-powered multi-agent travel assistant that generates itineraries, dining recommendations, and validates user preferences",
    technologies:
    ["LangChain", "LangGraph", "FastAPI", "Docker" , "SQLAlchemy"]
  ,    pageUrl: "https://github.com/gordonwky/travelAssistant",
  source: "GitHub",
  imageUrl: "/images/github.png"
  }
  ,

  {
    title: "AI Essay Scoring System ",
    description:
      "An AI essay scoring system by integrating large language model outputs (OpenAI API) with Random Forest, achieving a 10% quadratic weighted kappa (QWK) boost over standalone LLM-based scoring.\n",
    technologies:
    ["OpenAI API", "Python", "Scikit-learn", "Pandas", "seaborn", "lexical-diversity" ,"nltk"]
  ,    pageUrl: "https://github.com/gordonwky/AI_Essay_Scoring",
  source: "GitHub",
  imageUrl: "/images/github.png"

  },
  {
    title: "Medical Chatbot with RAG",
    description:
      "An AI-powered chatbot leveraging OpenAI API and RAG to improve response relevance and accuracy. Integrated continuous integration and deployment (CI/CD) pipelines using GitLab for automated updates.\n"
  , technologies:
  ["LangChain", "GitLab CI/CD", "Python", "FAISS", "streamlit"],
    pageUrl: "https://gitlab.cas.mcmaster.ca/wongk124/medical_chatbot",
  source: "GitLab",

    imageUrl :"/images/gitlab.svg"

    },

  {
    title: "C++ Gaussian Mixture Model Library for ML",
    description:
      "A robust GMM library with over 95% clustering accuracy matching scikit-learn, and achieved a 10% improvement in execution speed on benchmark datasets.\n"
  , technologies: ["C++", "GoogleTest", "Eigen", "CMake", "Git", "Apple Instrument"],
  pageUrl: "https://github.com/gordonwky/GMM_EM"
  ,
  source: "GitHub",
    imageUrl: "/images/github.png"

    },
  {
    title: "Video Style Transfer with CNN and CycleGAN",
    description:
      "A video style transfer tool using CNNs for segmentation and CycleGAN for style transfer in PyTorch."
  , technologies: ["Python", "PyTorch", "OpenCV", "NumPy", "Matplotlib"],
  pageUrl: "https://github.com/gordonwky/video-transfer",
  source: "GitHub",
    imageUrl: "/images/github.png"
  }
];
