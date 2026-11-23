
import { useState, useEffect } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import OceanNav, { type SectionKey } from "./OceanNav";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Values from "../sections/Values";
import Jellyfish from "./JellyFish";
import Starfish from "./Starfish";
import SwimmingFish from "./SwimmingFish";
import customFish from "./Fish";
import "../styles/Ocean.css";
import "../styles/bubbles.css";

const bubbles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 11) % 100}%`,
  size: `${8 + ((index * 13) % 25)}px`,
  duration: `${8 + ((index * 7) % 12)}s`,
  delay: `${-((index * 3) % 15)}s`,
}));

function Ocean() {
    const [activeSection, setActiveSection] =
    useState<SectionKey>("home");

    const [fishMovingRight, setFishMovingRight] = useState(false);

  useEffect(() => {
  let timeout: ReturnType<typeof setTimeout>;
  //fish movement
  const startTimeout = setTimeout(() => {
    setFishMovingRight(true);

    const changeDirection = () => {
        timeout = setTimeout(() => {
            setFishMovingRight((prev) => !prev);
            changeDirection();
        }, 52000);
    };

    changeDirection();
  }, 100);

  return () => {
    clearTimeout(startTimeout);
    clearTimeout(timeout);
  };
}, []);

function renderSection() {
    switch (activeSection) {
      case "home":
        return (
          <div className="ocean-hero_content">
            <p className="ocean-eyebrow">
              Technology · People · Purpose
            </p>

            <h1>Beth Howell</h1>
            <h2>Leadership and Development</h2>

            <button
              className="bubble-button"
              onClick={() => setActiveSection("about")}
            >
              <span>Explore</span>
              <ArrowRight size={19} />
            </button>
          </div>
        );

      case "about":
        return (
          <About
            onBack={() => setActiveSection("home")}
            onNext={() => setActiveSection("experience")}
          />
        );

      case "experience":
        return (
        <Experience
          onBack={() => setActiveSection("about")}
          onNext={() => setActiveSection("projects")}
        />
        );

      case "projects":
        return (
        <Projects 
          onBack={() => setActiveSection("experience")}
          onNext={() => setActiveSection("values")}
        />
        );

      case "values":
        return (
          <Values 
            onBack={() => setActiveSection("projects")}
          />
        );
    }
  }


  return (
    <main className="ocean-page">
      <div className="ocean-background" aria-hidden="true">
        <div className="ocean-background_image" />
        <div className="ocean-background_shade" />
        <div className="ocean-light ocean-light--one" />
        <div className="ocean-light ocean-light--two" />
        <div className="ocean-caustics" />
        {customFish.map((fish) => (
      <SwimmingFish key={fish.id} {...fish} />
    ))}
            {/* animated fish*/}
        <div
            className={`fish-school ${
                fishMovingRight ? "swimming-right" : "swimming-left"
            }`}
            aria-hidden="true"
        >
            <span className="shadow-fish fish-1" />
            <span className="shadow-fish fish-2" />
            <span className="shadow-fish fish-3" />
            <span className="shadow-fish fish-4" />
            <span className="shadow-fish fish-5" />
            <span className="shadow-fish fish-6" />
            <span className="shadow-fish fish-7" />
            <span className="shadow-fish fish-8" />
        </div>
        <Jellyfish xOffset="14vw" yOffset="24vh" size={46} opacity={0.65} duration={6} />
<Jellyfish
  xOffset="82vw"
  yOffset="58vh"
  size={62}
  bellColor="#38BDF8"
  tentacleColor="#7DD3FC"
  delay={1.5}
/>

<Starfish xOffset="6vw" bottomOffset="2.5vh" size={44} initialRotate={-15} />
<Starfish
  xOffset="88vw"
  bottomOffset="4vh"
  size={36}
  color="#FDBA74"
  initialRotate={22}
  opacity={0.7}
/>
       
        {/* animated bubbles*/}
        <div className="ocean-bubbles">
          {bubbles.map((bubble) => (
            <span
              key={bubble.id}
              className="ocean-bubble"
              style={{
                left: bubble.left,
                width: bubble.size,
                height: bubble.size,
                animationDuration: bubble.duration,
                animationDelay: bubble.delay,
              }}
            />
          ))}
        </div>
      </div>

       <OceanNav
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />

      <section className="ocean-hero">
        {renderSection()}
      </section>

      {/* <div className="ocean-scroll">
        <span>
          {activeSection === "home" ? "Dive in" : "Keep exploring"}
        </span>
        <ArrowDown size={17} />
      </div> */}
    </main>
  );
}

export default Ocean;
