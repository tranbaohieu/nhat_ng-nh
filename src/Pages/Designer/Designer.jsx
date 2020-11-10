import React, {useEffect} from "react";
import "./designer.sass";
import { Link } from "react-router-dom";
import news_list from "./data.js";
import ReactStars from "react-rating-stars-component";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="filter">Filter</div>
      <div className="room">
        <div className="room_list">
        {
          news_list.map((item, index) => (
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
              <Link to="/designer-detail/1" className="view_detail">View Detail &#62;&#62;</Link>
            </div>
          ))
        }
        </div>
        <div className="news_navigation">
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
        </div>
      </div>
    </>
  );
};

export default News;
