import React from "react";
import "./house.sass";
import { Link } from "react-router-dom";
import house_list from "./data.js";

const House = () => {
  return (
    <div className="house">
      <div className="house_list">
        {
          house_list.map((item, index) => (
            <div className="house_list_item">
              <div className="house_list_item_image">
                <Link to="/house-designer">
                  <img
                    src={item.image}
                    alt={index}
                  />
                </Link>
              </div>
              <div className="house_list_item_title">
                <Link
                  to={{
                    pathname: '/house-designer',
                    query: { roomType: item.title },
                  }}
                >{item.title}</Link>
              </div>
            </div>
          ))
        }
        </div>
    </div>
  );
};

export default House;