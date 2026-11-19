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
    return(
        <header className="ocean-header">
        <button
          className="ocean-logo"
          onClick={() => onNavigate("home")}
          aria-label="Go to home"
        >
          B.
        </button>
  
        <nav className="ocean-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={activeSection === item.key ? "active" : ""}
              onClick={() => onNavigate(item.key)}
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