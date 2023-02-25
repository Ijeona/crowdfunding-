import { useState, useEffect } from "react";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

function ProjectsPage() {
    //state//
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectList(data);
            });
    }, []);

    return (
        <div>
            <h1>Crowdfunding - Essential services</h1>
            <p>
                Site to donate to homes that provide services for the needy.
            </p>
            <div id="project-list">
                {projectList.map((project, key) => {
                    return <ProjectCard key={key} projectData={project} />;
                })}
            </div>
        </div>
    );
}

export default ProjectsPage;