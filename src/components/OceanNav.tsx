import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/oceanNavigation.css";

export type SectionKey = 
    | "home"
    | "about"
    | "experience"
    | "projects"
    | "values";

interface OceanNavProps {
    activeSection: SectionKey;
    onNavigate: (section: SectionKey) => void;
}

const navItems: { label: string; key: SectionKey }[] = [
    { label: "Home", key: "home" },
    { label: "About", key: "about" },
    { label: "Experience", key: "experience" },
    { label: "Projects", key: "projects" },
    { label: "What matters", key: "values" }, 
]; 

function OceanNav({ activeSection, onNavigate }: OceanNavProps){
    const [menuOpen, setMenuOpen] = useState(false);

    function handleNavigate(section: SectionKey) {
      onNavigate(section);
      setMenuOpen(false);
    };

    return (
        <header className="ocean-header">
          <button
            className="ocean-logo"
            onClick={() => handleNavigate("home")}
            aria-label="Go to home"
          >
            B.
          </button>
    
          {/* Desktop navigation */}
          <nav className="ocean-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.key}
                className={activeSection === item.key ? "active" : ""}
                onClick={() => handleNavigate(item.key)}
                aria-current={
                  activeSection === item.key ? "page" : undefined
                }
              >
                {item.label}
              </button>
            ))}
          </nav>
    
          {/* Mobile hamburger button */}
          <button
            className="ocean-menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
    
          {/* Mobile navigation */}
          <nav
            id="mobile-navigation"
            className={`ocean-mobile-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.key}
                className={activeSection === item.key ? "active" : ""}
                onClick={() => handleNavigate(item.key)}
                aria-current={
                  activeSection === item.key ? "page" : undefined
                }
              >
                {item.label}
              </button>
            ))}
          </nav>
        </header>
      );
    }

export default OceanNav; 