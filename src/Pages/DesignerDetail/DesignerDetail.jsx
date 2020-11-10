import React, {useEffect} from "react";
import { Link } from 'react-router-dom'
import "./designerdetail.sass";

const NewsDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div 
        className="block_title"
        style={{
          backgroundImage: `url("${require("../../images/header/news.png")}"`
        }}
      >News</div>
      <div className="news_detail">
        <div className="news_detail_header">
          <Link to="/news">News</Link>
          <span> / Newsletter No.1</span>
        </div>
        <div className="news_detail_image">
          <img src={require("../../images/body/news/news_1.png")} alt="" />
        </div>
        <div className="news_detail_content">
          <div className="news_detail_content_title">Newsletter No.1</div>
          <div className="news_detail_content_time">26th Feb 2020</div>
          <p className="first_pline">
            The first issue of 5G-Enhance newsletter has been released. The
            5G-Enhance newsletters will keep you updated with the latest project's
            news and achievements.
          </p>
          <p className="link_file">
            <a href="#abc">5G-Enhance_newsletter_No1</a>
          </p>
          <p>
            <b>Introduction to 5G-Enhance </b>
          </p>
          <p>
            5G Enhanced Mobile Broadband Access Networks in Crowded Environments
            (5G-Enhance) is a Horizon 2020 joint project composed of EU research
            team (VTT, FHG, UOULU and Accelleran) and Japan research team (TUAT,
            NICT, UEC, CATV, JCTA and RWJ). 5G-Enhance intends to develop and
            execute large scale trial activities on actual testbed in EU and
            Japan.
          </p>
          <p>
            A key objective for 5G-Enhance is to define and evaluate interoperable
            5G eMBB and efficient network solutions in dense area.
          </p>
          <p>
            In order to fulfil this the 5G-Enhance consortium has identified a
            number of key project objectives; each of which is associated with a
            distinct set of research and innovations. These specific objectives
            are:
          </p>
          <p>
            Objective 1: Develop, plan and execute large scale trial activities on
            actual testbeds between EU and Japan.
          </p>
          <p>
            Objective 2: Clarify the design and specification required for the
            demonstration and trials based on two wireless applications with the
            5G network.
          </p>
          <p>
            Objective 3: Development of 5G enhanced mobile broadband technologies
            in dense area for achieving the requirements (5G KPI) of the two
            applications.
          </p>
          <p>
            Objective 4: Establish long-term research collaboration between
            leading industry players, top research institutes and universities in
            Europe and Japan.
          </p>
        </div>
        <div className="news_detail_related">
          <div className="news_detail_related_label">Related News</div>
          <div className="news_detail_related_list">
            <div className="news_detail_related_list_item">
              <div className="news_detail_related_list_item_image">
                <img
                  src={require("../../images/body/news/news_2.png")}
                  alt="related news 1"
                />
              </div>
              <div className="news_detail_related_list_item_title">
                EU JP Workshop
              </div>
              <div className="news_detail_related_list_item_time">
                26th Feb 2020
              </div>
            </div>
            <div className="news_detail_related_list_item">
              <div className="news_detail_related_list_item_image">
                <img
                  src={require("../../images/body/news/news_3.png")}
                  alt="related news 2"
                />
              </div>
              <div className="news_detail_related_list_item_title">
                The 6th IEEE WCNC International Workshop on Smart Spectrum (IWSS
                2020).
              </div>
              <div className="news_detail_related_list_item_time">
                26th Feb 2020
              </div>
            </div>
            <div className="news_detail_related_list_item">
              <div className="news_detail_related_list_item_image">
                <img
                  src={require("../../images/body/news/news_4.png")}
                  alt="related news 3"
                />
              </div>
              <div className="news_detail_related_list_item_title">
                The 5th F2F meeting took place at Tokyo, Japan.
              </div>
              <div className="news_detail_related_list_item_time">
                26th Feb 2020
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
