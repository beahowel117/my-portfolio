import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BubbleButton from "../components/BubbleButton";
import BubbleDetail from "../components/BubbleDetail";
import "../styles/experience.css";

type ExperienceCategory = "technical" | "leadership";

interface ExperienceItem {
    id: number;
    category: ExperienceCategory;
    title: string;
    company: string; 
    description: string;
}

const experiences: ExperienceItem[] = [
    {
        id: 1,
        category: "technical",
        title: "Technical Lead",
        company: "New York Life",
        description:
          "Led front-end development and helped build a customer-facing digital platform. Worked across engineering, product, QA, and business teams.",
      },
      {
        id: 2,
        category: "technical",
        title: "Software Developer",
        company: "MetroTek",
        description:
          "Owned the development lifecycle of a responsive website, from requirements gathering through deployment.",
      },
      {
        id: 3,
        category: "leadership",
        title: "Operations & Project Manager",
        company: "EB Florals",
        description:
          "Managed operations, vendors, logistics, inventory, and orders in a growing business.",
      },
      {
        id: 4,
        category: "leadership",
        title: "Program Manager",
        company: "Work on Climate",
        description:
          "Led volunteer program management and helped coordinate work across a mission-driven organization.",
      },
];

function Experience(){
    const [activeCategory, setActiveCategory] = useState<ExperienceCategory | null>(null);
    const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
    
    const filteredExperiences = experiences.filter(
        (experience) => experience.category === activeCategory
    );

    const handleCategoryChange = (category: ExperienceCategory) => {
        setActiveCategory(category);
        setSelectedExperience(null);
    }
    
    return (
        <section className="experience-section">
          <h2 className="experience-heading">Experience</h2>
    
          {!activeCategory ? (
            <div className="experience-categories">
              <button
                className="experience-category-bubble"
                onClick={() => handleCategoryChange("technical")}
              >
                Technical
              </button>
    
              <button
                className="experience-category-bubble"
                onClick={() => handleCategoryChange("leadership")}
              >
                Leadership
              </button>
            </div>
          ) : selectedExperience ? (
            <BubbleDetail
                title={selectedExperience.title}
                subtitle={selectedExperience.company}
                description={selectedExperience.description}
                backLabel="Back to projects"
                onBack={() => setSelectedExperience(null)}
            />
          ) : (
            <>
              <button
                className="experience-back"
                onClick={() => setActiveCategory(null)}
              >
                <ArrowLeft size={16} />
                Back to categories
              </button>
    
              <div className="experience-bubbles">
                {filteredExperiences.map((experience) => (
                  <BubbleButton 
                  key={experience.id}
                  title={experience.title}
                  subtitle={experience.company}
                  onClick={() => setSelectedExperience(experience)}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      );
    }
    
    export default Experience;