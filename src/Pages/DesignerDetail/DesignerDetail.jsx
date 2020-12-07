import React, {useEffect} from "react";
import "./designerdetail.sass";
import ReactStars from "react-rating-stars-component";
import { useTable } from 'react-table';
// import { columns, data } from './data.js';
import {my_table} from './data.js';
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from 'react-router-dom';


const DesignerDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const renderTableData = () => {
    return my_table.map((item, index) => (
      item.detail_link === window.location.pathname ?
          <tr>
              <td>{item.data.no}</td>
              <td>{item.data.furniture}</td>
              <td>{item.data.price}</td>
              <td>{item.data.supplier}</td>
          </tr>
        : <div></div> ))
  }

  

  return (
    <div className="body">
      <div className="designer_detail">
        {my_table.map((item, index) => (
        item.detail_link === window.location.pathname ?
        <div>
          <div className="designer_information">
            <div className="designer_information_image">
            <Carousel>
                {item.image.map((image, index) => (
                <Carousel.Item>
                  <img
                    src={image.url}
                    alt="First slide"
                  />
                </Carousel.Item>
                ))}
              </Carousel>
            </div>
            
              <div className="designer_information_detail">
                <div className="designer_information_detail_title">
                  <b>Type</b>
                  <ul>
                    <li>{item.room}</li>
                    <li>{item.style}</li>
                  </ul>
                  <b>Designer</b>
                  <p>ICON INTERIOR</p>  
                  <b>Description</b>
                  <p>{item.description}</p>
                  {/* <b>Rate</b>
                  <p>
                    <ReactStars
                      count={5}
                      size={24}
                      value={item.rate}
                      activeColor="#ffd700"
                      edit={false}
                    />
                  </p> */}
                </div>
              </div>
          </div>
          
          <div className="design_sum_information">
            <div className="designer_furniture">
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Furniture Name</th>
                    <th>Price</th>
                    <th>Supplier</th>
                  </tr>
                </thead>
                <tbody className="furniture_details">
                    {item.data.map((data, index) => (
                      <tr>
                        <td>{data.no}</td>
                        <td>{data.furniture}</td>
                        <td>{data.price}$</td>
                        <td>{data.supplier}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="summary">
              <b>Summary</b>
              <ul>
                {/* {item.data} */}
                <li>5620$</li>
                <li>{item.data.length} items</li>
                <li>1 supplier</li>
              </ul>
            </div>
          </div>
        </div>
        : null))}
      </div>
    </div>
  );
};

export default DesignerDetail;
