import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./designer.sass";
import {designer_list, top_designer} from './data.js';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import TextField from '@material-ui/core/TextField';

const Designer = () => {
  const [type, setType] = useState('');
  const handleSelectType = (e) => setType(e);
  return (
    <div className="designer">
      <div className="list">
        <div className="designer_title">
          Designer List
        </div>
        <div className="designer_filter">
          <div className="designer_filter_search">
          <TextField
            label="Search by designer name"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <YoutubeSearchedForIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          </div>
          <div className="designer_filter_type">
            <DropdownButton
              alignRight
              title={type ? type : 'Type'}
              id="dropdown-menu-align-right"
              onSelect={(e) => {handleSelectType(e)}}
                >
                <Dropdown.Item eventKey="Architecture">Architecture</Dropdown.Item>
                <Dropdown.Item eventKey="Interior Architect">Interior Architect</Dropdown.Item>
                <Dropdown.Item eventKey="Kitchen Planning">Kitchen Planning</Dropdown.Item>
                <Dropdown.Item eventKey="Design/Decoration">Design/Decoration</Dropdown.Item>
            </DropdownButton>
          </div>

          <div className="designer_filter_search_button">
            <Button>Search</Button>
          </div>
          
        </div>
        <div className="designer_list">
          {
            designer_list.map((item, index) => (
              <div className="designer_list_item">
                <img src={item.image_url} alt='designer'/>
                <div className="designer_list_item_content">
                  <Link to="/designer-detail/1" className="designer_list_item_content_title">{item.title}</Link>
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
