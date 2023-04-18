import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProjectCard from "../components/ProjectCard/ProjectCard";

// import { allProjects } from "../data";

function HomePage() {
  const authToken = window.localStorage.getItem("token");
  // State
  const [projectList, setProjectList] = useState([]);
  // const [user, setUser] = useState([]);

  // const { id } = useParams();

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
  // console.log(latestProject);

  return (
    <div>
      <section className="text-section">
      
        <h2>Hello, from Grow Garden</h2>
        <p>
        Welcome to our crowdfunding web app! Our mission is to help people build the garden of their dreams by connecting them with like-minded individuals who share their passion for gardening and sustainability.
        Our platform allows users to create and fund campaigns for a variety of garden-related projects, such as building raised garden beds, installing drip irrigation systems, and creating compost bins. Whether you're a seasoned gardener or just starting out, our community of supporters and contributors can help you bring your gardening dreams to life.
        Join us in our mission to create beautiful, sustainable gardens and connect with a community of passionate gardeners. Let's work together to build the garden of your dreams!
        </p>
      </section>
      <h2 className="project-container">Latest Projects</h2>
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

export default HomePage;
