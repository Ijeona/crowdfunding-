import { useState, useEffect } from "react";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
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

    function compare(a, b) {
        if (a.date_created < b.date_created) {
            return 1;
        }
        if (a.date_created > b.date_created) {
            return -1;
        }
        return 0;
    }

    const latestProject = projectList.sort(compare).slice(0, 3);

    return (
        <div>
            <h1>Crowdfunding - Essential services</h1>
            <p>
                Site to donate to homes that provide services for the needy.
            </p>
            <h3>Latest Projects</h3>
            <div id="project-list">
                {latestProject.map((project, key) => {
                    return <ProjectCard key={key} projectData={project} />;
                })}
            </div>
        </div>
    );
}

export default HomePage;