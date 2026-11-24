import { useState } from "react";
import BubbleButton from "../components/BubbleButton";
import BubbleDetail from "../components/BubbleDetail";
import SectionNavigation from "../components/SectionNavigation";
import { ArrowLeft } from "lucide-react";
import "../styles/project.css";

interface ProjectsProps {
    onBack: () => void;
    onNext: () => void;
    isMobile: boolean;
  }

interface ProjectItem {
    id: number;
    title: string;
    stack: string;
    description?: string;
    img?: string | null;
}

const projects: ProjectItem[] = [
    {
        id: 1,
        title: "Just the Headlines",
        stack: "React Native, NewsAPI",
        description: "Mobile App built with React Native and the NewsAPI updating to the latest headlines in the past 24 hours from various news sources.",
        img: "/images/JTH.png",
    },
    {
        id: 2,
        title: "The Entrepreneur",
        stack: "Monorepo: React, React Native, Claude API",
        description: "React monorepo utilizing Claude API to allow users to assess the market for their business ideas.",
        img: "/images/entrepreuner.png",
    },
    {
        id: 3,
        title: "Interactive Congressional Map",
        stack: "Python, Tavily API, Deepseek API, Next.js, Typescript",
        description: "Interactive United States map, displaying information about candidates running for various offices.",
        img: "/images/congressMap.png",
    },
    {
        id: 4,
        title: "Story Genius",
        stack: "React, AWS, GPT-3.5",
        description: "Story Genius leverages the RAG (Retrieval-Augmented Generation) method, combining AWS Elasticsearch for knowledge retrieval and GPT-3.5 Turbo for AI-driven user story generation, streamlining the software development process.",
        img: "/images/storyGenius.png",
    },
    {
        id: 5,
        title: "Farmers Market",
        stack: "React Native, Expo, Hugging Face API, NY State Open Data API",
        description: "A React Native app to help users discover nearby farmers markets using location-based data. It features an AI-powered chatbot that generates personalized recipes and shopping lists based on market finds.",
        img: "/images/farmersMarket.jpeg",
    },
    {
        id: 5,
        title: "Clean Energy Shop",
        stack: "Next.js, Typescript, GraphQL",
        description: "Responsive e-commerce product page, featuring dynamic product data, reusable UI components, interactive quantity selection, and automated testing with Vitest and React Testing Library.",
        img: "/images/kraken.png",
    },
];

function Projects({ onBack, onNext, isMobile }: ProjectsProps) {
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

    return(
    <section className="projects-section">
        <h2 className="projects-heading">Projects</h2>
        {selectedProject ? (
            <div className="project-content">
                <button
                    className="project-back"
                    onClick={() => setSelectedProject(null)}
                >
                    <ArrowLeft size={16} />
                    Back to projects
                </button>

                <BubbleDetail
                title={selectedProject.title}
                subtitle={selectedProject.stack}
                description={selectedProject.description}
                img={selectedProject.img}
                flippable={true}
                />
            </div>
        ) : (
        <SectionNavigation onBack={onBack} onNext={onNext}>
            <div className="projects-grid">
                {projects.map((project) => (
                    <BubbleButton
                        key={project.id}
                        title={project.title}
                        subtitle={project.stack}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>
        </SectionNavigation>
        )}         
    </section>
    );
};

export default Projects;