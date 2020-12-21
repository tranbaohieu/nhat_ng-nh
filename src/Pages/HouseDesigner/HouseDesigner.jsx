import React, { Component } from "react";
import "./housedesigner.sass";
import { Link } from "react-router-dom";
import list_search from "./search_data.js";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from "react-bootstrap";

class HouseDesigner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: '',
      size: '',
      style: '',
      window: '',
      balcony: ''
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
  handleSelectWindow(e) {
    this.setState({
      window: e
    })
  }
  handleSelectBalcony(e) {
    this.setState({
      balcony: e
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
  searchWindow = (item) => {
    return this.state.window === '' ? true : (this.state.window === item.window)
  }
  searchBalcony = (item) => {
    return this.state.balcony === '' ? true : (this.state.balcony === item.balcony)
  }
  resetDropdownValue() {
    this.setState({room: '', size: '', style: '', window: '', balcony: ''})
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
            title={this.state.window ? this.state.window : 'Number of windows'}
            id="dropdown-menu-align-right"
            onSelect={(e) => {this.handleSelectWindow(e)}}
              >
              <Dropdown.Item eventKey="0">0</Dropdown.Item>
              <Dropdown.Item eventKey="1">1</Dropdown.Item>
              <Dropdown.Item eventKey="2">2</Dropdown.Item>
              <Dropdown.Item eventKey="3">3</Dropdown.Item>
              <Dropdown.Item eventKey="4">4</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            alignRight
            title={this.state.balcony ? this.state.balcony : 'Have a balcony'}
            id="dropdown-menu-align-right"
            onSelect={(e) => {this.handleSelectBalcony(e)}}
              >
              <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
              <Dropdown.Item eventKey="No">No</Dropdown.Item>
          </DropdownButton>
          
          <Button className="btn-reset" onClick={() => {this.resetDropdownValue()}}> Reset to default </Button>
        </div>
        <div className="room">
          <div className="room_list">
          {
            list_search.map((item, index) => (
              this.searchRoom(item) && this.searchSize(item) && this.searchStyle(item) && this.searchWindow(item) && this.searchBalcony(item) ?
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
                  </div>
              : null)) 
          }
          </div>
        </div>
      </div>
    )
  }
}

export default HouseDesigner;
