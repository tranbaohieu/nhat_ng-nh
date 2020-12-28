import React, {useEffect, useState} from "react";
import "./idea.sass";
import idea_list from "./data.js";



const Idea = () => {
  const [data_idea_list, setDataIdeaList] = useState({rooms: []});
  const userToken = localStorage.getItem("user");
  
  useEffect(()=>{
    const requestOptions = {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({email: userToken})
      };
    if (userToken) {
      fetch(`http://localhost:8000/room/getSavedRoom`, requestOptions)
        .then(response => response.json())
        .then(data => {setDataIdeaList({rooms: data.rooms});console.log(data_idea_list.rooms); console.log(data.rooms)})
    }
  }, []);

  return (
    userToken ?
      <div className="idea">
        <div className="idea_title">
          My Idea Handbook
        </div>
        <div className="idea_list">
          {
            data_idea_list.rooms.map((item, index) => (
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
        <h1>
          YOU SHOULD LOGIN
        </h1>
      </div>
      )
  );
};
export default Idea;
