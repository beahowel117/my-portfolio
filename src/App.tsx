
import { useState } from "react";
import Landscape from "./components/Landscape";
import Ocean from "./components/Ocean";

type PortfolioVersion = "landscape" | "ocean";

function App() {
  const [version, setVersion] =
    useState<PortfolioVersion>("ocean");

  return (
    <>
      {version === "landscape" ? <Landscape /> : <Ocean />}

      <div className="version-switcher">
        <button
          className={version === "landscape" ? "selected" : ""}
          onClick={() => setVersion("landscape")}
        >
          Landscape
        </button>

        <button
          className={version === "ocean" ? "selected" : ""}
          onClick={() => setVersion("ocean")}
        >
          Ocean
        </button>
      </div>
    </>
  );
}

export default App;

