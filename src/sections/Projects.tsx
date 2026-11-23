import { useState } from "react";
import BubbleButton from "../components/BubbleButton";
import BubbleDetail from "../components/BubbleDetail";
import "../styles/project.css";

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
        img: null,
    },
    {
        id: 2,
        title: "The Entrepreneur",
        stack: "Monorepo: React, React Native, Claude API",
        description: "React monorepo using Claude API allowing users to assess the market for their business ideas.",
        img: null,
    },
    {
        id: 3,
        title: "Interactive Congressional Map",
        stack: "Python, Tavily API, Deepseek API, Next.js, Typescript",
        description: "React monorepo using Claude API allowing users to assess the market for their business ideas.",
        img: "/images/congressMap.png",
    },
    {
        id: 4,
        title: "Story Genius",
        stack: "React, React Native, Claude API",
        description: "React monorepo using Claude API allowing users to assess the market for their business ideas.",
        img: "/images/storyGenius.png",
    },
    {
        id: 5,
        title: "Farmers Market",
        stack: "React, React Native, Claude API",
        description: "React monorepo using Claude API allowing users to assess the market for their business ideas.",
        img: "/images/farmersMarket.jpeg",
    },

];

function Projects(){
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

    return(
    <section className="project-section">
        <h2 className="project-heading">Projects</h2>

       {selectedProject ? ( 
        <BubbleDetail 
            title={selectedProject.title}
            subtitle={selectedProject.stack}
            description={selectedProject.description}
            img={selectedProject.img}
            backLabel="Back to projects"
            onBack={() => setSelectedProject(null)}
            flippable={true}
        />
       ): (
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
       )
        }
    </section>
    );
};

export default Projects;