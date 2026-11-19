
import { useState, useEffect } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import "../styles/Ocean.css";

const bubbles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 11) % 100}%`,
  size: `${8 + ((index * 13) % 25)}px`,
  duration: `${8 + ((index * 7) % 12)}s`,
  delay: `${-((index * 3) % 15)}s`,
}));

function Ocean() {
  const [isExploring, setIsExploring] = useState(false);
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
});
  return (
    <main className="ocean-page">
      <div className="ocean-background" aria-hidden="true">
        <div className="ocean-background_image" />
        <div className="ocean-background_shade" />
        <div className="ocean-light ocean-light--one" />
        <div className="ocean-light ocean-light--two" />
        <div className="ocean-caustics" />
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

      <header className="ocean-header">
        <button
          className="ocean-logo"
          onClick={() => setIsExploring(false)}
        >
          B.
        </button>

        <nav className="ocean-nav" aria-label="Main navigation">
          <button onClick={() => setIsExploring(false)}>Home</button>
          <button onClick={() => setIsExploring(true)}>About</button>
          <button onClick={() => setIsExploring(true)}>Experience</button>
          <button onClick={() => setIsExploring(true)}>Projects</button>
          <button onClick={() => setIsExploring(true)}>What matters</button>
        </nav>
      </header>

      <section className="ocean-hero">
        {!isExploring ? (
          <div className="ocean-hero_content">
            <p className="ocean-eyebrow">Technology · People · Purpose</p>

            <h1>Beth Howell</h1>

            <h2>Leadership and Development</h2>

            <button
              className="bubble-button"
              onClick={() => setIsExploring(true)}
            >
              <span>Explore</span>
              <ArrowRight size={19} />
            </button>
          </div>
        ) : (
          <div className="ocean-intro">
            <button
              className="ocean-back"
              onClick={() => setIsExploring(false)}
            >
              <ArrowDown size={15} />
              Return to the surface
            </button>

            <p className="ocean-eyebrow">A little about me</p>

            <h2>Curious by nature. Driven to build.</h2>

            <p>
              My background brings together software engineering,
              technical leadership, program delivery, and operations.
              I'm interested in using technology and thoughtful
              collaboration to make meaningful things happen.
            </p>
          </div>
        )}
      </section>

      <div className="ocean-scroll">
        <span>{isExploring ? "Keep exploring" : "Dive in"}</span>
        <ArrowDown size={17} />
      </div>
    </main>
  );
}

export default Ocean;
