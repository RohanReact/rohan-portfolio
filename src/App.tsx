import { useState } from "react";
import {
  earlier,
  education,
  profile,
  languages,
  projects,
  roles,
  skills,
  vestaPoints,
} from "./content";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#project", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    let copiedOk = false;
    try {
      await navigator.clipboard.writeText(profile.email);
      copiedOk = true;
    } catch {
      const field = document.createElement("textarea");
      field.value = profile.email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      copiedOk = document.execCommand("copy");
      field.remove();
    }

    if (!copiedOk) {
      window.location.href = `mailto:${profile.email}`;
      return;
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="top">
        <a className="mark" href="#top" onClick={closeMenu}>
          RM
        </a>
        <button
          className="menu"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={menuOpen ? "nav open" : "nav"}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="content">
        <section className="hero" id="top">
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="lede">{profile.tagline}</p>
          <p className="summary">{profile.summary}</p>
          <ul className="facts">
            <li>{profile.location}</li>
            <li>{profile.availability}</li>
            <li>Full-stack</li>
          </ul>
          <div className="actions">
            <a className="button solid" href={`mailto:${profile.email}`}>
              Email
            </a>
            <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>

        <section className="block" id="work">
          <div className="block-head">
            <h2>Work</h2>
          </div>

          <article className="company">
            <div className="company-top">
              <div>
                <h3>Vesta</h3>
                <p>Quality Assurance Platform</p>
              </div>
              <p className="span">2024 — 2026</p>
            </div>

            <ol className="roles">
              {roles.map((role) => (
                <li key={role.title}>
                  <div>
                    <strong>{role.title}</strong>
                    <span>{role.type}</span>
                  </div>
                  <p>
                    {role.dates}
                    {role.place ? <span> · {role.place}</span> : null}
                  </p>
                </li>
              ))}
            </ol>

            <ul className="points">
              {vestaPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="earlier">
            <div>
              <h3>{earlier.title}</h3>
              <p>
                {earlier.org} · {earlier.place}
              </p>
            </div>
            <p className="when">{earlier.dates}</p>
            <p className="detail">{earlier.detail}</p>
          </article>
        </section>

        <section className="block" id="project">
          <div className="block-head">
            <h2>Selected projects</h2>
          </div>
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <div className="project-top">
                <h3>{project.name}</h3>
                <a href={project.url} target="_blank" rel="noreferrer">
                  Live site
                  <span aria-hidden="true"> ↗</span>
                </a>
              </div>
              <p className="stack">{project.stack.join(" · ")}</p>
              <p className="detail">{project.summary}</p>
              <ul className="points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="block" id="skills">
          <div className="block-head">
            <h2>Skills</h2>
          </div>
          <dl className="skills">
            {skills.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.items.join("  ·  ")}</dd>
              </div>
            ))}
          </dl>

          <div className="edu">
            <div>
              <h3>{education.degree}</h3>
              <p>{education.school}</p>
            </div>
            <p>
              {education.dates}
              <span> · {education.note}</span>
            </p>
          </div>
          <p className="languages">Languages · {languages.join(", ")}</p>
        </section>

        <section className="close" id="contact">
          <h2>Contact</h2>
          <p>If the work is a fit, write to me.</p>
          <a className="mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="actions">
            <button className="button solid" type="button" onClick={copyEmail}>
              {copied ? "Copied" : "Copy email"}
            </button>
            <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
