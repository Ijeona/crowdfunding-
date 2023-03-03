import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PledgeForm from "../components/PledgeForm/PledgeForm";


function ProjectPage() {
    //state//
    const [project, setProject] = useState({ pledges: [] });
    const [users, setUsers] = useState();
    //Hook 
    const { id } = useParams();
    //Logged in features 
    const loggedIn = window.localStorage.getItem("token");
    const username = window.localStorage.getItem("username");
    const isOwner = true 
console.log(users,username)
    //Effects 
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProject(data);
            });
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}users`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setUsers(data);
            });
    }, []);
    console.log(project)
    return (
        <div>
            <h2>{project.title}</h2>
            <h3>Created at: {project.date_created}</h3>
            <h3>{`Status: ${project.is_open}`}</h3>
            {loggedIn && isOwner && ( <button>Edit</button>)/**button will only show if logged in and owner of project */}  
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
            <PledgeForm project={project} />
        </div>

    );
}


export default ProjectPage;