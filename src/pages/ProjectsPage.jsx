import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProjectCard from "../components/ProjectCard/ProjectCard";


function ProjectsPage() {
  // State
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

  // sorting the created date in order
  function compare(a, b) {
    if (a.date_created < b.date_created) {
      return 1;
    }
    if (a.date_created > b.date_created) {
      return -1;
    }
    return 0;
  }
  // organizes project list in reverse order so it shows the latest project first
  const latestProject = projectList.sort(compare);

  return (
    <div>
      <section className="text-section">
        <h2>Gardens bring so much joy but they need so much Love...</h2>
        <p>
          
        Welcome to our crowdfunding web app! Our mission is to help people build the garden of their dreams by connecting them with like-minded individuals who share their passion for gardening and sustainability.
        Our platform allows users to create and fund campaigns for a variety of garden-related projects, such as building raised garden beds, installing drip irrigation systems, and creating compost bins. Whether you're a seasoned gardener or just starting out, our community of supporters and contributors can help you bring your gardening dreams to life.
        Join us in our mission to create beautiful, sustainable gardens and connect with a community of passionate gardeners. 
        </p>
        <p>Let's work together to build the garden of your dreams! </p>
      </section>
      <h2 className="project-container">Discover Current Projects</h2>
      <div className="project-container">
        <div id="project-list">
          {latestProject.map((project, key) => {
            return <ProjectCard key={key} projectData={project} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
