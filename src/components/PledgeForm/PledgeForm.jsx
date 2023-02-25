import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PledgeForm() {
    //State
    const [pledgeDetails, setpledgeDetails] = useState({
        amount: 0,
        comment:"",
        anonymous: false,
        project: null,
    });

    //Hooks
    const navigate = useNavigate(); //using the function useNavigate from react-router-dom.

    //Actions
    //everytime input changes, it calls this function called handleChange. 
    //whenever we call this function, an event is passed through it. The target is the input (username,password input)
    // id=username, value=kimghwjd
    const handleChange = (event) => {
        const {id, value} = event.target;
        // we are taking the id and value out of the input. 

        setpledgeDetails((pledgeDetails) =>({
            ...pledgeDetails, ///... doesn't give nested objects
            [id]: value,
        }));
    };

    const postData = async () => { //we are using async as we are doing await first
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}pledges/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(pledgeDetails),
          }
        );
        return response.json();
      };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (window.localStorage.getItem("token")) {
            console.log("token exists");
            await postData();
            navigate("/");
        }
        
        //     const { token } = await postData(); //calls the function above and returns JSON data
        //     window.localStorage.setItem("token", token); //when we set an item in local, we have to set a key and value
        // navigate("/"); //navigates to base url
        // }
      };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={handleChange}
            placeholder="Enter username"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button type="submit">
          Login
        </button>
      </form>
    );
  }
  
  export default PledgeForm;