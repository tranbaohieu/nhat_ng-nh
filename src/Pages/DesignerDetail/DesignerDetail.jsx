import React from "react";
import "./designerdetail.sass";

const DesignerDetail = () => {
  return (
    <div className="designer_detail">
      <div className="designer_detail_image">
        <img src={require("../../images/body/designerdetail/block_image.png")} alt='banner'/>
      </div>
      <div className="designer_detail_information">
        <div className="designer_detail_information_title">
          NEW BEAUTIFUL HOUSE
        </div>
        <div className="designer_detail_information_description">
          The design company to build beautiful new houses we specialize in designing townhouses.
        </div>
        <div className="designer_detail_information_details">
          <div className="designer_detail_information_details_1">
            <div className="designer_detail_information_details_1_type">
              <div className="designer_detail_information_details_1_type_icon">
                <img src={require("../../images/body/designerdetail/type.png")} alt='type'/>
              </div>
              <div className="designer_detail_information_details_1_type_name">
                Architecture
              </div>
            </div>
            <div className="designer_detail_information_details_1_location">
              <div className="designer_detail_information_details_1_location_icon">
                <img src={require("../../images/body/designerdetail/location.png")} alt='location'/>
              </div>
              <div className="designer_detail_information_details_1_location_name">
                Nha Trang, Khanh Hoa, Viet Nam
              </div>
            </div>
          </div>
          <div className="designer_detail_information_details_2">
            <div className="designer_detail_information_details_2_email">
              <div className="designer_detail_information_details_2_email_icon">
                <img src={require("../../images/body/designerdetail/email.png")} alt='email'/>
              </div>
              <div className="designer_detail_information_details_2_email_name">
                beautifulhouse@gmail.com
              </div>
            </div>
            <div className="designer_detail_information_details_2_web">
              <div className="designer_detail_information_details_2_web_icon">
                <img src={require("../../images/body/designerdetail/web.png")} alt='web'/>
              </div>
              <div className="designer_detail_information_details_2_web_name">
                www.beautifulhouse.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desinger_detail_projects">
        <div className="designer_detail_projects_title">Projects</div>
        <div className="designer_detail_projects_list">
          <div className="designer_detail_projects_list_image">
            <img src={require("../../images/body/designerdetail/project1.png")} alt="project" />
          </div>
          <div className="designer_detail_projects_list_title">
            Garden Villa . Green House area Phu Quoc
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerDetail;
