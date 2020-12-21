import React from "react";
import "./idea.sass";
import idea_list from "./data.js";

const Idea = () => {
  const userToken = localStorage.getItem("user");

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
        <h1>
          YOU SHOULD LOGIN
        </h1>
      </div>
      )
  );
};
export default Idea;
