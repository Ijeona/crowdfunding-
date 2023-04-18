import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

function LoginForm() {

    // state 

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    
    //hooks

    const navigate = useNavigate();

    //actions
    const handleChange = (event) => {
        const { id, value } = event.target;
        // grab the id and value from target
        // every time the input changes it calls this function
        // event.target: get the target of input.
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
        // [id] = overrides
    };

    const postData = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}api-token-auth/`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            }
        );
        return response.json();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            const { token } = await postData();
            if (token !== undefined) {
              window.localStorage.setItem("token", token);
              setLoggedIn(true);
              navigate("/");
            } else {
              setLoggedIn(false);
            }
          }
        };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Log In Form:</h1>
                {/* {<label htmlFor="username">Username:</label>} */}
                <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleChange}

                />
            </div>
            <div>
                {/* {<label htmlFor="password">Password:</label>} */}
                <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={handleChange}

                />
            </div>
            <button type="submit">
                Login
            </button>
        </form>
    );
}

export default LoginForm;