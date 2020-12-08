import React, {useEffect, useState, Component} from "react";
import "./designer.sass";
import { Link } from "react-router-dom";
import news_list_search from "./search_data.js";
import ReactStars from "react-rating-stars-component";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from "react-bootstrap";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: '',
      size: '',
      style: '',
      color: ''
    }
  }

  componentDidMount() {
    if(this.props.location.query) {
      console.log('===', this.props.location.query.roomType.split(' ')[1])
      this.setState({
        room: this.props.location.query.roomType.split(' ')[1]
      })
    }
  }

  handleSelectLivingRoom(e){
    this.setState({
      room: e
    })
  }
  handleSelectSize(e) {
    this.setState({
      size: e
    })
  }
  handleSelectStyle(e) {
    this.setState({
      style: e
    })
  }
  handleSelectColor(e) {
    this.setState({
      color: e
    })
  }

  searchRoom = (item) => {
      return this.state.room === '' ? true : (this.state.room === item.room)
  }
  searchSize = (item) => {
    return this.state.size === '' ? true : ( this.state.size === '5m2 - 20m2' ? item.size >= 5 && item.size <= 20 : item.size >= 20 && item.size <= 30)
  }
  searchStyle = (item) => {
    return this.state.style === '' ? true : (this.state.style === item.style)
  }
  searchColor = (item) => {
    return this.state.color === '' ? true : item.color.includes(this.state.color)
  }

  resetDropdownValue() {
    this.setState({room: '', size: '', style: '', color: ''})
  }

  render() {
    return (
      <div className="body">
        <div className="filter">
          <DropdownButton
            alignRight
            title={this.state.room ? this.state.room : 'Room'}
            id="dropdown-menu-align-right"
            onSelect={(e) => {this.handleSelectLivingRoom(e)}}
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
            title={this.state.size ? this.state.size : 'Size'}
            id="dropdown-menu-align-right"
            onSelect={(e) => {this.handleSelectSize(e)}}
              >
              <Dropdown.Item eventKey="5m2 - 20m2">5m2 - 20m2</Dropdown.Item>
              <Dropdown.Item eventKey="20m2 - 30m2">20m2 - 30m2</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            alignRight
            title={this.state.style ? this.state.style : 'Style'}
            id="dropdown-menu-align-right"
            onSelect={(e) => {this.handleSelectStyle(e)}}
              >
              <Dropdown.Item eventKey="Modern">Modern</Dropdown.Item>
              <Dropdown.Item eventKey="Classic">Classic</Dropdown.Item>
              <Dropdown.Item eventKey="Country">Country</Dropdown.Item>
              <Dropdown.Item eventKey="Asian">Asian</Dropdown.Item>
              <Dropdown.Item eventKey="Electric">Electric</Dropdown.Item>
              <Dropdown.Item eventKey="Industry">Industrial</Dropdown.Item>
              <Dropdown.Item eventKey="Tropical">Tropic</Dropdown.Item>
              <Dropdown.Item eventKey="Conolial">Conolial</Dropdown.Item>
              <Dropdown.Item eventKey="Simplify">Simplify</Dropdown.Item>
              <Dropdown.Item eventKey="Inelegance">Inelegance</Dropdown.Item>
              <Dropdown.Item eventKey="Northern Europe">Northern Europe</Dropdown.Item>
              <Dropdown.Item eventKey="Neo-classic">Neo-classic</Dropdown.Item>
          </DropdownButton>
          
          <DropdownButton
            alignRight
            title={this.state.color ? this.state.color : 'Color'}
            id="dropdown-menu-align-right"
            onSelect={(e) => {this.handleSelectColor(e)}}
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
              <Dropdown.Item eventKey="Gold">Gold</Dropdown.Item>
              <Dropdown.Item eventKey="Dark brown">Dark brown</Dropdown.Item>
              <Dropdown.Item eventKey="Stone grey">Stone grey</Dropdown.Item>
              <Dropdown.Item eventKey="Woddy brown">Woddy brown</Dropdown.Item>

          </DropdownButton>
          <Button className="btn-reset" onClick={() => {this.resetDropdownValue()}}> Reset to default </Button>
        </div>
        <div className="room">
          <div className="room_list">
          {
            news_list_search.map((item, index) => (
              this.searchRoom(item) && this.searchSize(item) && this.searchStyle(item) && this.searchColor(item) ?
                  <div className="room_list_item">
                  <div className="room_list_item_image">
                    <Link to={item.detail_link}>
                        <img
                        src={item.image}
                        alt={index}
                        />
                      </Link>
                  </div>
                  {
                      item.description ? (
                        <Link to={item.detail_link}>
                          <div className="room_list_item_title">
                              <p>{item.description}</p>
                          </div>
                      </Link>
                      ) : null
                  }
                  <div className="room_list_item_square">
                              <p>{item.size}m2</p>
                          </div>
                  <div className="room_list_item_area">{item.area}</div>
                  {/* <div className="room_list_item_rate">
                      <ReactStars
                      count={5}
                      size={24}
                      value={item.rate}
                      activeColor="#ffd700"
                      edit={false}
                      /> 
                  </div>*/}
                  {/* <Link to={item.detail_link} className="view_detail">View Detail &#62;&#62;</Link> */}
                  </div>
              : null)) 
          }
          </div>
        </div>
      </div>
    )
  }
}

export default News;
