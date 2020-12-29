import React, {useEffect, useState} from "react";
import "./idea.sass";
import { Link } from 'react-router-dom';


const Idea = () => {
  const [data_idea_list, setDataIdeaList] = useState({rooms: []});
  const userToken = localStorage.getItem("user");
  
  useEffect(()=>{
    if (userToken) {
    const requestOptions = {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({email: JSON.parse(userToken).email})
      };
      fetch(`https://ouichi.herokuapp.com/room/getSavedRoom`, requestOptions)
        .then(response => response.json())
        .then(data => {setDataIdeaList({rooms: data.rooms})})
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
                  <Link to={item.detail_link}>
                    <img src={item.image} alt={index}/>
                  </Link>
                </div>
                <div className="idea_list_item_title">
                  <Link to={item.detail_link}>
                    <p>{item.title}</p>
                  </Link>
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
