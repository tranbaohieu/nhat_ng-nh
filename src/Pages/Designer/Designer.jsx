import { Button } from "@material-ui/core";
import React from "react";
import "./designer.sass";
import {designer_list, top_designer} from './data.js';
import { Link } from "react-router-dom";

const Designer = () => {
  return (
    <div className="designer">
      <div className="list">
        <div className="designer_title">
          Designer List
        </div>
        <div className="designer_filter">
          <Button >
            Search by designer name
          </Button>
          <Button>
            Type
          </Button>
          <div className="button_search">
            <Button>Search</Button>
          </div>
          
        </div>
        <div className="designer_list">
          {
            designer_list.map((item, index) => (
              <div className="designer_list_item">
                <img src={item.image_url} alt='designer'/>
                <div className="designer_list_item_content">
                  <div className="designer_list_item_content_title">{item.title}</div>
                  <div className="designer_list_item_type">{item.type}</div>
                  <div className="designer_list_item_location">{item.location}</div>
                  <div className="designer_list_item_description">{item.description}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="top_designer">
        <div className="top_designer_title">
          <div className="top_designer_title_icon"><img src={require("../../images/body/designer/award.png")} alt='award'/></div>
          <div className="top_designer_title_name">Top Designer</div>
          </div>
        {
          top_designer.map((item, index) => (
            <div className="top_designer_item">
              <div className="top_designer_item_icon">
                <div className="avatar"><img src={item.avatar} alt='avatar'/></div>
                <div className="location"><img src={item.location} alt='location'/></div>
              </div>
              <div className="top_designer_item_detail">
                <div className="top_designer_item_title">
                  <Link to="/designer-detail/1" className="view_top_desigener_detail">
                    {item.title}
                  </Link>
                  </div>
                  <div className="top_designer_item_type">{item.type}</div>
                  <div className="top_designer_item_number_of_designs">{item.number_of_designs}</div>
                  <div className="top_designer_item_location">{item.address}</div>
                </div>
            </div>
          ))
        }
        
      </div>
    </div>
  );
};

export default Designer;
