import Layout from "../components/layout";
import Reveal from "../components/Reveal";
import { flagshipProjects } from "../data/projects";

const toolScreenshots = [
  "Screenshot 2024-09-19 171644.png",
  "Screenshot 2024-09-19 174100.png",
  "Screenshot 2024-09-19 173226.png"
].map((fileName, index) => ({
  id: index,
  fileName,
  src: `/images/${encodeURIComponent(fileName)}`
}));

const games = [
  {
    engine: "UNREAL ENGINE 5",
    title: "Anarchy of Souls: The Untold History of The Spirit's Mountain",
    summary:
      "First-person wave-based experience where Alonso fights to recover his cousin Beatriz's blue ribbon, uncovering the truth behind a fateful night.",
    sections: [
      {
        heading: "Dynamic movement",
        items: ["Hook traversal", "Create ground to evade enemies", "Dash mechanics"]
      },
      {
        heading: "Attack types",
        items: [
          "Paint — spawn particles for damage-over-time.",
          "Release Painting — unleash stored paint streaks toward targets."
        ]
      },
      {
        heading: "Technical features",
        items: ["Enemy pooling", "AI system for enemies", "Custom render material"]
      }
    ]
  },
  {
    engine: "UNREAL ENGINE 5",
    title: "GOTY OF THE YEAR (del año)",
    summary:
      "Isometric narrative-driven project starring Api, a soul seeking happiness through the people he guides as they chase wealth across chaotic city streets.",
    sections: [
      {
        heading: "Core features",
        items: [
          "Isometric view",
          "Multiple event types",
          "Heavily C++-based project",
          "Straightforward pipeline for adding new events"
        ]
      }
    ]
  },
  {
    engine: "UNITY",
    title: "Orbital Bombardier",
    summary:
      "Started as a procedural planet generator and evolved into an aerial bombing challenge focused on precision flight.",
    sections: [
      {
        heading: "Technical features",
        items: [
          "Procedural map generation",
          "Save and load system for continuing runs",
          "Scriptable object-driven architecture",
          "Custom enemy AI"
        ]
      },
      {
        heading: "Gameplay features",
        items: [
          "Compass guiding the next drop zone",
          "Deploy mode that slows the plane for accurate bombing",
          "Time-limited objectives that require retrieving bombs before failure"
        ]
      }
    ]
  },
  {
    engine: "UNITY",
    title: "Years of Desolation / Online Game",
    summary:
      "Online third-person shooter blending battle royale pacing with treasure hunt objectives where players race to level up before the final showdown.",
    sections: [
      {
        heading: "Key features",
        items: [
          "Lightweight lobby system",
          "Customizable crosshair",
          "Eight players per lobby",
          "Relay transport",
          "Dynamic player controller",
          "Client-side prediction",
          "Build system supporting four configurations"
        ]
      }
    ]
  }
];

const experiences = [
  {
    title: "Tool Programmer · Naolito Studio",
    summary: "Created the game GOTY OF THE YEAR (del año) during an internal game jam."
  },
  {
    title: "EVAD Gamejam 2024",
    summary:
      "Built internal tooling that streamlined collaboration and performance across the team.",
    details: [
      "Custom solution to optimize Zoom usage.",
      "Optimized RESTful API calls for faster responses.",
      "Resolved blocking bugs across the project.",
      "Refactored performance-critical systems.",
      "Implemented flexible input sanitization.",
      "Developed tailored sorting algorithms."
    ]
  },
  {
    title: "EVAD Development Club 2023–2024",
    summary:
      "Selected for an extracurricular team where top students collaborate on institution-led projects."
  }
];

const achievements = [
  "1st Place in EVAD Turbojam 2024",
  "Degree in Game Development · EVAD",
  "Two-year game development degree in Spain"
];

const socials = [
  { label: "GitHub", href: "https://github.com/carcodee" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/carlosmatecki/" }
];

export default function Project() {
  return (
    <>
      <Layout />
      <main className="projects-container">
        <Reveal as="section" className="projects-hero" direction="up">
          <span className="hero-kicker">GRAPHICS PROGRAMMER</span>
          <h1>Who I Am?</h1>
          <p className="hero-description">
            A self-taught and formally trained graphics programmer and game developer focused on
            advanced rendering with Vulkan and OpenGL, alongside gameplay engineering in Unity and Unreal
            Engine 5.
          </p>
          <Reveal as="div" className="hero-actions" delay={160} direction="up">
            <a href="/resume" className="hero-download" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
            <span className="hero-name">CARLOS MIGUEL MATECKI-SAVINO</span>
          </Reveal>
          <Reveal as="div" className="hero-socials" delay={260} direction="up">
            {socials.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ))}
          </Reveal>
        </Reveal>

        <Reveal as="section" className="projects-section" direction="up" delay={160}>
          <header className="section-header">
            <h2>Engines / Tools</h2>
            <p>Snapshots from internal tooling and engine work in progress.</p>
          </header>
          <div className="tool-gallery">
            {toolScreenshots.map((shot) => (
              <Reveal
                as="div"
                className="tool-card"
                delay={shot.id * 180}
                direction="up"
                key={shot.id}
              >
                <div
                  className="tool-media"
                  role="img"
                  aria-label={shot.fileName}
                  style={{ backgroundImage: `url(${shot.src})` }}
                />
                <span className="tool-caption">{shot.fileName}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="projects-section" direction="up" delay={200}>
          <header className="section-header">
            <h2>Flagship Projects</h2>
          </header>
          <div className="flagship-grid">
            {flagshipProjects.map((project, index) => (
              <Reveal
                as="article"
                className="flagship-card"
                delay={index * 160}
                direction="up"
                key={project.title}
              >
                <div className="flagship-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="flagship-media">
                    {project.screenshots.map((shot) => (
                      <div
                        key={shot.id}
                        className="flagship-shot"
                        role="img"
                        aria-label={shot.fileName}
                        style={{ backgroundImage: `url(${shot.src})` }}
                      />
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="projects-section" direction="up" delay={240}>
          <header className="section-header">
            <h2>Games</h2>
          </header>
          <div className="games-grid">
            {games.map((game, index) => (
              <Reveal
                as="article"
                className="game-card"
                delay={index * 140}
                direction="up"
                key={game.title}
              >
                <span className="game-engine">{game.engine}</span>
                <h3>{game.title}</h3>
                <p>{game.summary}</p>
                {game.sections.map((section) => (
                  <div key={section.heading} className="game-section">
                    <strong>{section.heading}</strong>
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="projects-section" direction="up" delay={260}>
          <header className="section-header">
            <h2>Experience</h2>
          </header>
          <div className="experience-grid">
            {experiences.map((experience, index) => (
              <Reveal
                as="article"
                className="experience-card"
                delay={index * 120}
                direction="up"
                key={experience.title}
              >
                <h3>{experience.title}</h3>
                <p>{experience.summary}</p>
                {experience.details && (
                  <ul>
                    {experience.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="projects-section" direction="up" delay={280}>
          <header className="section-header">
            <h2>Awards & Education</h2>
          </header>
          <ul className="achievements-list">
            {achievements.map((achievement, index) => (
              <Reveal
                as="li"
                delay={index * 120}
                direction="up"
                key={achievement}
              >
                {achievement}
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <Reveal as="section" className="projects-section contact-section" direction="up" delay={320}>
          <header className="section-header">
            <h2>Contact</h2>
          </header>
          <Reveal as="div" className="contact-card" delay={120} direction="up">
            <p>Open to collaborations, graphics research, and gameplay prototyping.</p>
            <a href="mailto:cmateckisavino@gmail.com" className="contact-link">
              cmateckisavino@gmail.com
            </a>
            <span className="contact-name">Carlos Miguel Matecki-Savino</span>
            <span className="contact-footer">© 2024 by Carlos Matecki</span>
          </Reveal>
        </Reveal>
      </main>
    </>
  );
}
