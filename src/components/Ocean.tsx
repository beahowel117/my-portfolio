
import { useState, useEffect } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import OceanNav, { type SectionKey } from "./OceanNav";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Jellyfish from "./JellyFish";
import Starfish from "./Starfish";
import SwimmingFish from "./SwimmingFish";
import customFish from "./Fish";
import useIsMobile from "../hooks/useIsMobile";
import "../styles/ocean.css";
import "../styles/oceanNavigation.css"
import "../styles/bubbles.css";

const bubbles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 11) % 100}%`,
  size: `${8 + ((index * 13) % 25)}px`,
  duration: `${8 + ((index * 7) % 12)}s`,
  delay: `${-((index * 3) % 15)}s`,
}));

function Ocean() {
    const isMobile = useIsMobile();

    const [activeSection, setActiveSection] =
    useState<SectionKey>("home");

    const [_fishMovingRight, setFishMovingRight] = useState(false);


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

const scrollToSection = (section: SectionKey) => {
  document.getElementById(section)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const handleNavigation = (section: SectionKey) => {
  setActiveSection(section);

  if (isMobile) {
    scrollToSection(section);
  }
};

function renderSection(section: SectionKey = activeSection) {
  switch (section) {
      case "home":
        return (
          <div className="ocean-hero_content">
            <p className="ocean-eyebrow">
              Technology · People · Purpose
            </p>

            <h1>Beth Howell</h1>
            <h2>Leadership and Development</h2>

            {isMobile ? (
              <div
               className="ocean-scroll"
               style={{paddingTop: '50px'}}
              >
               <span>Dive in</span>
               <ArrowDown size={20}  />
             </div>
            ) : (
            <button
              className="bubble-button"
              onClick={() => setActiveSection("about")}
            >
              <span>Explore</span>
              <ArrowRight size={19} />
            </button>
            )}
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
          onNext={() => setActiveSection("contact")}
          isMobile={isMobile}
        />
        );

      case "contact":
        return (
          <Contact
            onBack={() =>
              isMobile
                ? scrollToSection("home")
                : setActiveSection("home")
            }
            isMobile={isMobile}
          />
        );
    }
  };


  return (
    <main className="ocean-page">
      <div className="ocean-background" aria-hidden="true">
        <div className="ocean-background_image" />
        <div className="ocean-background_shade" />
        <div className="ocean-light ocean-light--one" />
        <div className="ocean-light ocean-light--two" />
        <div className="ocean-caustics" />
        
        {/* animated fish */}
        {customFish.map((fish) => (
          <SwimmingFish key={fish.id} {...fish} />
        ))}
            {/* animated fish*/}
        <div
            // className={`fish-school ${
            //     fishMovingRight ? "swimming-right" : "swimming-left"
            // }`}
            className="fish-school"
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
        onNavigate={handleNavigation}
      />

      {isMobile ? (
        <div className="ocean-mobile-content">
          <section id="home" className="ocean-hero ocean-mobile-section">
            {renderSection("home")}
          </section>

          <section id="about" className="ocean-hero ocean-mobile-section">
            {renderSection("about")}
          </section>

          <section id="experience" className="ocean-hero ocean-mobile-section">
            {renderSection("experience")}
          </section>

          <section id="projects" className="ocean-hero ocean-mobile-section">
            {renderSection("projects")}
          </section>

          <section id="contact" className="ocean-hero ocean-mobile-section">
            {renderSection("contact")}
          </section>
        </div>
      ) : (
        <section className="ocean-hero">
          {renderSection()}
        </section>
      )}

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
