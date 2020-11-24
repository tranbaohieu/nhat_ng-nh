import React, {useEffect, useState} from "react";
import "./designer.sass";
import { Link } from "react-router-dom";
import news_list_search from "./search_data.js";
import ReactStars from "react-rating-stars-component";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from "react-bootstrap";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [dropdown_value,setDropDownValue]=useState({room: '', size: '', style: '', color: ''});
  const handleSelectLivingRoom=(e)=>{
    setDropDownValue({room: e, size: dropdown_value.size, style: dropdown_value.style, color: dropdown_value.color})
  }
  const handleSelectSize=(e)=>{
    setDropDownValue({room: dropdown_value.room, size: e, style: dropdown_value.style, color: dropdown_value.color})
  }
  const handleSelectStyle=(e)=>{
    setDropDownValue({room: dropdown_value.room, size: dropdown_value.size, style: e, color: dropdown_value.color})
  }
  const handleSelectColor=(e)=>{
    setDropDownValue({room: dropdown_value.room, size: dropdown_value.size, style: dropdown_value.style, color: e})
  }

  const [searchValue,setSearchValue]=useState(false);
  const handleSearch=(e)=>{
    setSearchValue(true)
  }

  const searchRoom = (item) => {
      return dropdown_value.room === '' ? true : (dropdown_value.room === item.room)
  }
  const searchSize = (item) => {
    return dropdown_value.size === '' ? true : ( dropdown_value.size === '5m2 - 20m2' ? item.size >= 5 && item.size <= 20 : item.size >= 20 && item.size <= 30)
  }
  const searchStyle = (item) => {
    return dropdown_value.style === '' ? true : (dropdown_value.style === item.style)
  }
  const searchColor = (item) => {
    return dropdown_value.color === '' ? true : (dropdown_value.color === item.color)
  }

  const resetDropdownValue = () => {
    setDropDownValue({room: '', size: '', style: '', color: ''})
  }

  return (
    <>
      <div className="filter">
        <DropdownButton
          alignRight
          title={dropdown_value.room ? dropdown_value.room : 'Room'}
          id="dropdown-menu-align-right"
          onSelect={handleSelectLivingRoom}
            >
            <Dropdown.Item eventKey="Livingroom">Livingroom</Dropdown.Item>
            <Dropdown.Item eventKey="Bedroom">Bedroom</Dropdown.Item>
            <Dropdown.Item eventKey="Bathroom">Bathroom</Dropdown.Item>
            <Dropdown.Item eventKey="Kitchen">Kitchen</Dropdown.Item>
            <Dropdown.Item eventKey="Entertainment room">Entertainment room</Dropdown.Item>
            <Dropdown.Item eventKey="Classroom/Office">Classroom/Office</Dropdown.Item>
            <Dropdown.Item eventKey="Gym">Gym</Dropdown.Item>
            <Dropdown.Item eventKey="Dressing room">Dressing room</Dropdown.Item>
            <Dropdown.Item eventKey="Stairs room">Stairs room</Dropdown.Item>
            <Dropdown.Item eventKey="Doors">Doors</Dropdown.Item>
            <Dropdown.Item eventKey="Bedroom">Yatch &amp; Planes</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          alignRight
          title={dropdown_value.size ? dropdown_value.size : 'Size'}
          id="dropdown-menu-align-right"
          onSelect={handleSelectSize}
            >
            <Dropdown.Item eventKey="5m2 - 20m2">5m2 - 20m2</Dropdown.Item>
            <Dropdown.Item eventKey="20m2 - 30m2">20m2 - 30m2</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          alignRight
          title={dropdown_value.style ? dropdown_value.style : 'Style'}
          id="dropdown-menu-align-right"
          onSelect={handleSelectStyle}
            >
            <Dropdown.Item eventKey="Modern">Modern</Dropdown.Item>
            <Dropdown.Item eventKey="Classic">Classic</Dropdown.Item>
            <Dropdown.Item eventKey="Country">Country</Dropdown.Item>
            <Dropdown.Item eventKey="Asia">Asia</Dropdown.Item>
            <Dropdown.Item eventKey="Electric">Electric</Dropdown.Item>
            <Dropdown.Item eventKey="Industry">Industry</Dropdown.Item>
            <Dropdown.Item eventKey="Tropic">Tropic</Dropdown.Item>
            <Dropdown.Item eventKey="Conolial">Conolial</Dropdown.Item>
            <Dropdown.Item eventKey="Simplify">Simplify</Dropdown.Item>
            <Dropdown.Item eventKey="Inelegance">Inelegance</Dropdown.Item>
            <Dropdown.Item eventKey="Northern Europe">Northern Europe</Dropdown.Item>
        </DropdownButton>
        
        <DropdownButton
          alignRight
          title={dropdown_value.color ? dropdown_value.color : 'Color'}
          id="dropdown-menu-align-right"
          onSelect={handleSelectColor}
            >
            <Dropdown.Item eventKey="White">White</Dropdown.Item>
            <Dropdown.Item eventKey="Gray">Gray</Dropdown.Item>
            <Dropdown.Item eventKey="Black">Black</Dropdown.Item>
            <Dropdown.Item eventKey="Pink">Pink</Dropdown.Item>
            <Dropdown.Item eventKey="Red">Red</Dropdown.Item>
            <Dropdown.Item eventKey="Grown">Grown</Dropdown.Item>
            <Dropdown.Item eventKey="Orange">Orange</Dropdown.Item>
            <Dropdown.Item eventKey="Yellow">Yellow</Dropdown.Item>
            <Dropdown.Item eventKey="Green">Green</Dropdown.Item>
            <Dropdown.Item eventKey="Blue">Blue</Dropdown.Item>
            <Dropdown.Item eventKey="Purple">Purple</Dropdown.Item>
        </DropdownButton>
        <Button onClick={resetDropdownValue}> Reset to default </Button>
      </div>
      <div className="room">
        <div className="room_list">
        {
          news_list_search.map((item, index) => (
            searchRoom(item) && searchSize(item) && searchStyle(item) && searchColor(item) ?
                <div className="room_list_item">
                <div className="room_list_item_image">
                    <img
                    src={item.image}
                    alt={index}
                    />
                </div>
                {
                    item.description ? (
                    <div className="room_list_item_description">
                        <p>{item.description}</p>
                    </div>
                    ) : null
                }
                <div className="room_list_item_area">{item.area}</div>
                <div className="room_list_item_rate">
                    <ReactStars
                    count={5}
                    size={24}
                    value={item.rate}
                    activeColor="#ffd700"
                    edit={false}
                    />
                </div>
                <Link to={item.detail_link} className="view_detail">View Detail &#62;&#62;</Link>
                </div>
            : <div></div>)) 
        }
        </div>
      </div>

      {/* <div className="news_navigation">
        <div className="news_navigation_left news_navigation_transparent news_navigation_item">
          <img
            src={require("../../images/body/news/right_end.png")}
            alt="left_end"
          />
        </div>
        <div className="news_navigation_left news_navigation_transparent news_navigation_item">
          <img src={require("../../images/body/news/right.png")} alt="left" />
        </div>
        <div className="news_navigation_item">1</div>
        <div className="news_navigation_item">2</div>
        <div className="news_navigation_item">3</div>
        <div className="news_navigation_item">4</div>
        <div className="news_navigation_item">5</div>
        <div className="news_navigation_right news_navigation_transparent news_navigation_item">
          <img src={require("../../images/body/news/right.png")} alt="right" />
        </div>
        <div className="news_navigation_right news_navigation_transparent news_navigation_item">
          <img
            src={require("../../images/body/news/right_end.png")}
            alt="right_end"
          />
        </div>
      </div> */}
    </>
  );
};

export default News;
