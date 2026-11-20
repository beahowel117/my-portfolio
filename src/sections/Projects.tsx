import { useState } from "react";
import BubbleButton from "../components/BubbleButton";
import BubbleDetail from "../components/BubbleDetail";
import "../styles/project.css";

interface ProjectItem {
    id: number;
    title: string;
    stack: string;
    description?: string;
    img?: string;
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
        stack: "React, React Native, Claude API",
        description: "React monorepo using Claude API allowing users to assess the market for their business ideas.",
        img: null,
    },
    {
        id: 3,
        title: "The Entrepreneur",
        stack: "React, React Native, Claude API",
        description: "React monorepo using Claude API allowing users to assess the market for their business ideas.",
        img: null,
    },
    {
        id: 4,
        title: "The Entrepreneur",
        stack: "React, React Native, Claude API",
        description: "React monorepo using Claude API allowing users to assess the market for their business ideas.",
        img: null,
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
            backLabel="Back to projects"
            onBack={() => setSelectedProject(null)}
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