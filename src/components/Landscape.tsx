import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";
// import './App.css'
import '../styles/landscape.css'

type SectionKey = "home" | "about" | "experience" | "projects" | "contact";

const sections: Record<Exclude<SectionKey, "home">,
{eyebrow: string; title: string; description: string} 
> = {
  about: {
    eyebrow: "A little about me",
    title: "Curious by nature. Driven to build. Building with a bigger picture in mind.",
    description:
      "I'm a cross-functional professional whose path has moved through software engineering, technical leadership, program delivery, and startup operations. I enjoy connecting people and ideas, making sense of complexity, and turning ambitious goals into practical outcomes. I'm deeply interested in conservation, wildlife, and the relationship between people and the natural world. I believe technology, thoughtful leadership, and collective action can help create a more sustainable future.",
  },
  experience: {
    eyebrow: "The journey so far",
    title: "Different paths. Connected experience.",
    description:
      "From leading engineering teams and building customer-facing technology to coordinating operations and managing programs, each chapter has shaped how I approach problems, collaborate, and get things done.",
  },
  projects: {
    eyebrow: "Things I've built",
    title: "Ideas become real through making.",
    description:
      "A collection of software projects, experiments, and ideas — from web applications and data tools to projects exploring how technology can help us better understand the world.",
  },
  contact: {
    eyebrow: "Beyond the screen",
    title: "Building with a bigger picture in mind.",
    description:
      "I'm deeply interested in conservation, wildlife, and the relationship between people and the natural world. I believe technology, thoughtful leadership, and collective action can help create a more sustainable future.",
  },
};

function BirdLoader() {
  return (
    <div className="loader" aria-label="Loading portfolio">
      <svg
        className="loader_bird"
        viewBox="0 0 100 55"
        role="img"
        aria-label="A bird flying"
      >
        <path
          d="M5 29 C22 7 36 8 50 25 C64 8 78 7 95 29 C77 18 64 20 50 37 C36 20 23 18 5 29Z"
          fill="currentColor"
        />
      </svg>
      <span className="loader_label">Finding my way...</span>
    </div>
  )
};

function Landscape() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1600);
    return () => window.clearTimeout(timer);
  }, []); 

  const explore = () => setActiveSection("about");
  const goHome = () => setActiveSection("home");

  const currentContent = activeSection === "home" ? null : sections[activeSection];

  return (
    <main className={`portfolio scene--${activeSection}`}>
      {loading && <BirdLoader />}
      <div className="landscape" aria-hidden="true">
        <div className="landscape_photo" />
        <div className="landscape_horizon-glow" />
        <div className="landscape_mist landscape__mist--back" />
        <div className="landscape_mist landscape__mist--middle" />
        <div className="landscape_mist landscape__mist--front" />
        <div className="landscape_grain" />
      </div>

      <header className="site-header">
        <button className="wordmark" onClick={goHome} aria-label="Go home">
         B<span>.</span>
        </button>

        <nav className="main-nav" aria-label="Main navigation">
          {(
              [
                ["about", "About"],
                ["experience", "Experience"],
                ["projects", "Projects"],
                ["contact", "What matters"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                className={activeSection === key ? "nav-link is-active" : "nav-link"}
                onClick={() => setActiveSection(key)}
              >
                {label}
              </button>
            ))}
        </nav>
        <span className="header-note">A little bit of everything</span>
      </header>

      <section className="hero" aria-label="Introduction">
      {activeSection === "home" ? (
          <div className="hero_content">
            <p className="eyebrow">Technology · People · Purpose</p>
            <h1>
              Curious by nature.
              <br />
              <em>Driven to build.</em>
            </h1>
            <p className="hero_intro">
              I bring together technology, systems thinking, and people to turn
              ideas into action — with a particular interest in the future of
              our planet.
            </p>
            <button className="explore-button" onClick={explore}>
              <span>Explore my world</span>
              <ArrowUpRight size={17} strokeWidth={1.5} />
            </button>
          </div>
        ) : (
          <div className="story-panel">
            <button className="back-button" onClick={goHome}>
              <ArrowLeft size={15} />
              Back to the horizon
            </button>
            <p className="eyebrow">{currentContent?.eyebrow}</p>
            <h2>{currentContent?.title}</h2>
            <p className="story-panel_description">
              {currentContent?.description}
            </p>
            <span className="story-panel__note">
              More of the story coming into view.
            </span>
          </div>
        )}
      </section>
      <div className="bottom-bar">
        <span className="location-note">
          <span className="location-dot" />
          Somewhere between technology & nature
        </span>

        <button
          className="scroll-cue"
          onClick={() =>
            setActiveSection(activeSection === "home" ? "about" : "experience")
          }
          aria-label="Explore the next section"
        >
          <span>{activeSection === "home" ? "Begin exploring" : "Keep exploring"}</span>
          <ArrowDown size={16} />
        </button>

        <span className="page-index">
          {activeSection === "home"
            ? "00 / 04"
            : `0${Object.keys(sections).indexOf(activeSection) + 1} / 04`}
        </span>
      </div>

    </main>
  )
}

export default Landscape; 
