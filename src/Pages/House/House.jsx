import React from "react";
import "./house.sass";
import { Link } from "react-router-dom";
import house_list from "./data.js";
import buttonHome from "../../images/body/home/button.svg";
import homeImage from "../../images/body/home/home.png";

const House = () => {
  return (
    <div className="house">
      <div className="house_list">
        {
          house_list.map((item, index) => (
            <div className="house_list_item">
              <div className="house_list_item_image">
                <Link to="/designer">
                  <img
                    src={item.image}
                    alt={index}
                  />
                </Link>
              </div>
              <div className="house_list_item_title">
                <Link to="/designer">{item.title}</Link>
              </div>
            </div>
          ))
        }
        </div>
    </div>
    // <div className="home">
    //   <div className="home_content">
    //     <div className="home_content_title">
    //       <b>Fi-Mi</b>: A <b>F</b>ine-grained A<b>I</b>-based <b>M</b>obile A
    //       <b>i</b>r Quality Monitoring and Forecasting System
    //     </div>
    //     <div className="home_content_line"></div>
    //     <div className="home_content_description">
    //       Fi-Mi is a project funded by VinIF, composed of HUST team (SoICT, SEE), Chiba University, 
    //       and Wireless System R & D Laboratory, Toshiba. Fi-Mi relies on lightweight air quality monitoring 
    //       devices mounted on the buses. On the one hand, by exploiting the buses' dynamic and deep 
    //       learning-based prediction techniques, Fi-Mi can broaden the monitoring regions and provide 
    //       fine-grained air quality information. On the other hand, by utilizing cost-effective monitoring 
    //       devices, Fi-Mi can significantly reduce costs compared to the existing approaches.
    //     </div>

    //     <Link to="/team" className="home_button_explore">
    //       <span>EXPLORE NOW</span>
    //       <img src={buttonHome} alt="Button explore" />
    //     </Link>
    //   </div>
 
    //   <div className="home_background_wrapper">
    //     <div className="home_background">
    //       <img src={homeImage} alt="Home" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default House;