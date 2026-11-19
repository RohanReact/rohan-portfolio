export const profile = {
  name: "Rohan Misal",
  role: "Full Stack Developer",
  tagline: "Turning ideas into products.",
  location: "Asia",
  availability: "Open to remote",
  email: "rohan.openforwork@gmail.com",
  linkedin: "https://www.linkedin.com/in/rohan-misal-b48118222",
  github: "https://github.com/Rohanmisal",
  summary:
    "Full-stack developer with 2+ years building scalable web applications, from the interface through the API to the cloud. I work where clean code meets a real user problem — a React UI, a REST API, or a deploy on Azure or Railway — and I like owning that picture until it ships.",
};

export const roles = [
  {
    title: "SDE-II",
    type: "Full-time",
    dates: "Jul 2026 — 2026",
    place: "Remote",
  },
  {
    title: "SDE-I",
    type: "Full-time",
    dates: "Jul 2024 — Jul 2026",
    place: "",
  },
  {
    title: "Software Developer Intern",
    type: "Internship",
    dates: "Mar 2024 — Jun 2024",
    place: "",
  },
];

export const vestaPoints = [
  "Built and maintained features on a quality-assurance product, from the React interface through REST APIs.",
  "Worked in the production codebase, including deploys on Azure.",
];

export const earlier = {
  title: "HP Solve 2.0",
  org: "HP",
  dates: "Mar 2023 — Jun 2023",
  place: "India",
  detail:
    "Selected for HP’s Solve 2.0 hackathon. Took a real problem statement, analysed it, and built a knowledge graph with Python, NLP, and machine learning.",
};

export const education = {
  school: "SPPU University, India",
  degree: "B.E. Computer Engineering",
  dates: "2019 — 2023",
  note: "CGPA 8.75",
};

export const projects = [
  {
    name: "CBT Studio",
    url: "https://cbtstudio-production.up.railway.app/",
    stack: ["React", "TypeScript", "Node.js", "SQLite", "PDF.js", "Railway"],
    summary:
      "A SaaS that turns any exam question-paper PDF into a timed computer-based test — palette, mark-for-review, submit, and instant scoring — the way CAT, GATE, MHT-CET, JEE, and CTET feel on screen.",
    points: [
      "Parses text and scanned PDFs in the browser, detects sections and booklet sets, and keeps English beside Hindi or Marathi when the paper is bilingual.",
      "When Unicode text is unreliable, each question stays on the original page crop; answer keys can be uploaded before or after the attempt.",
      "Accounts, plans, and PDF storage on a single Node server with SQLite. Live on Railway for real testing.",
    ],
  },
  {
    name: "WhatNext AI",
    url: "https://whatnextai.vercel.app",
    stack: ["React", "TypeScript", "Supabase", "LLM"],
    summary:
      "A web app for people who are stuck. You describe the situation in plain language. It returns three paths — easy, medium, and advanced — each with steps, a timeline, and the tools to start.",
    points: [
      "LLM responses are shaped into a fixed structure the UI can render, not a loose paragraph.",
      "Accounts keep path history. A follow-up chat stays attached to the path you picked.",
      "Interface in English, Hindi, Bengali, and Tamil. Designed, built, and deployed solo.",
    ],
  },
];

export const skills = [
  {
    label: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind", "HTML & CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "REST APIs", "Python"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Supabase", "MongoDB", "SQL"],
  },
  {
    label: "Tools",
    items: ["Azure", "Railway", "Git", "GitHub"],
  },
];

export const languages = ["English", "Hindi", "Marathi"];
