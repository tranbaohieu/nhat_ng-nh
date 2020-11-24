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
  console.log(location.pathname);
  console.log(111111111)
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
    <>
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
                  <b>Rate</b>
                  <p>
                    <ReactStars
                      count={5}
                      size={24}
                      value={item.rate}
                      activeColor="#ffd700"
                      edit={false}
                    />
                  </p>
                  <b>Summary</b>
                  <ul>
                    <li>5620$</li>
                    <li>3 items</li>
                    <li>1 supplier</li>
                  </ul>
                </div>
              </div>
          </div>

          <div className="designer_furniture">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>First Name</th>
                  <th>Furniture</th>
                  <th>Price</th>
                  <th>Supplier</th>
                </tr>
              </thead>
              <tbody>
                  {item.data.map((data, index) => (
                    <tr>
                      <td>{data.no}</td>
                      <td>{data.furniture}</td>
                      <td>{data.price}</td>
                      <td>{data.supplier}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        : <div></div>))}
      </div>
    </>
  );
};

export default DesignerDetail;
