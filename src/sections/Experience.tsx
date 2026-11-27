import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import BubbleButton from "../components/BubbleButton";
import BubbleDetail from "../components/BubbleDetail";
import SectionNavigation from "../components/SectionNavigation";
import "../styles/experience.css";

type ExperienceCategory = "technical" | "leadership";

interface ExperienceProps {
    onBack: () => void;
    onNext: () => void;
  }

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
          "Led a team of CI/CD engineers, collaborating across teams to plan sprints and deliver releases. Remained hands-on in development while supporting engineers. Implemented and trained engineers on the integration of AI in development to help increase efficiency. ",
      },
      {
        id: 2,
        category: "technical",
        title: "Software Engineer",
        company: "New York Life",
        description:
          "Developed features and improved performance for a new digital insurance sales platform that helped increase sales by 33%.",
      },
      {
        id: 3,
        category: "technical",
        title: "Software Developer",
        company: "MetroTek",
        description:
          "Owned the development lifecycle of a responsive website, from requirements gathering through deployment.",
      },
      {
        id: 4,
        category: "leadership",
        title: "Program Manager",
        company: "Work on Climate",
        description:
          "Led volunteer program management and helped coordinate work across a mission-driven organization.",
      },
      {
        id: 5,
        category: "leadership",
        title: "Head of Operations",
        company: "EB Florals",
        description:
          "Managed operations, vendors, logistics, inventory, and orders in a growing business.",
      },
      {
        id: 6,
        category: "leadership",
        title: "Account Manager",
        company: "Roberto Coin",
        description:
          "Managed luxury jewelry accounts, built client relationships, and led sales training and trunk shows. Collaborated with celebrity stylists, developed marketing campaigns, and oversaw product and inventory management.",
      },
];


function Experience({ onBack, onNext }: ExperienceProps) {
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
            <SectionNavigation onBack={onBack} onNext={onNext}>
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
            </SectionNavigation>
         ) : selectedExperience ? (
          <div className="experience-content">
            <button
              className="experience-back"
              onClick={() => setSelectedExperience(null)}
            >
              <ArrowLeft size={16} />
              Back to experiences
            </button>
        
            <BubbleDetail
              title={selectedExperience.title}
              subtitle={selectedExperience.company}
              description={selectedExperience.description}
            />
          </div>
        ) : (
          <div className="experience-content">
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
          </div>
        )}
        </section>
      );
    }
    
    export default Experience;