import React from "react";
import "./idea.sass";
// import idea_list from "./data.js";
import { Button } from "react-bootstrap";


const Idea = () => {
  const [idea_list, setDataIdeaList] = useState("");
  const userToken = localStorage.getItem("user");
  const get_saved_ideas = (userToken) => {
    const requestOptions = {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({email: userToken})
      };
      fetch(`http://localhost:8000/room/getSavedRoom`, requestOptions)
          .then(response => response.json())
          .then(data => setDataIdeaList(data))
          .then(console.log(idea_list))
  }

  return (
    userToken ?
      <div className="idea">
        <div className="idea_title">
          My Idea Handbook
        </div>
        <div className="idea_list">
          {
            idea_list.map((item, index) => (
              <div className="idea_list_item">
                <div className="idea_list_item_image">
                  <img src={item.image} alt={index}/>
                </div>
                <div className="idea_list_item_description">
                  <p>{item.description}</p>
                </div>
                <div className="idea_list_item_size">
                  <p>{item.size}m2</p>
                </div>
                <div className="room_list_item_date">{item.date}</div>
              </div>
            ))
          }
        </div>
      </div>
    : (
      <div className="idea_not_login">
      <Button onClick={get_saved_ideas}> Reset to default </Button>
        <h1>
          YOU SHOULD LOGIN
        </h1>
      </div>
      )
  );
};
export default Idea;
