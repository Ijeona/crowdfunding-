import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PledgeForm(props) {

  const { project } = props;

    //State
    const [pledgeDetails, setPledgeDetails] = useState({
    // default values 
        amount: "",
        comment:"",
        anonymous: false,
        project: null,
    });

    //Hooks
    const navigate = useNavigate(); //using the function use Navigate from react-router-dom.
    const { id } = useParams();
    //Actions
    //everytime input changes, it calls this function called handleChange. 
    //whenever we call this function, an event is passed through it. The target is the input (username,password input)
    const handleChange = (event) => {
        const {id, value} = event.target;
        // we are taking the id and value out of the input. 

        setPledgeDetails((pledgeDetails) =>({
            ...pledgeDetails, ///... doesn't give nested objects
            [id]: value,
            project: project.id,

        }));
    };

    // const postData = async () => { //we are using async as we are doing await first
    //     const response = await fetch(
    //       `${import.meta.env.VITE_API_URL}pledges/`,
    //       {
    //         method: "post",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(pledgeDetails),
    //       }
    //     );
    //     return response.json();
    //   };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const loggedIn = window.localStorage.getItem("token");

        if (loggedIn) {
          try {
            const response = await fetch(
              `${import.meta.env.VITE_API_URL}pledges/`,
              {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Token ${authToken}`,
                },
                body: JSON.stringify({ project: project.id, ...pledges }),
              }
            );
            if (!response.ok) {
              throw new Error(await response.text());
            }
            location.reload();
          } catch (err) {
            console.error(err);
            alert(`Error: ${err.message}`);
          }
        } else {
    
          navigate(`/login`);
        }
      };
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <h3>Donate Now:</h3>
              <input
                type="number"
                min="1"
                id="amount"
                placeholder="Help Make Someone's Dream Garden come true!"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="comment"
                placeholder="Leave a Comment"
                maxlength="100"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="anonymous">
                Anonymous:
                <input
                  className="checkbox"
                  type="checkbox"
                  id="anonymous"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <button className="project-button" type="submit">
                Pledge
              </button>
            </div>
          </form>
        </div>
      );
    }
    
    export default PledgeForm;
    