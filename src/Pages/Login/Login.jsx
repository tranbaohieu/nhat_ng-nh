import React, { useState } from "react";
import "./login.sass";
import teamLogo from "../../images/body/team/team_logo.svg";
import vietnameseImage from "../../images/body/team/vietnamese_team.svg";
import japaneseImage from "../../images/body/team/japanese_team.svg";
import member_list from "./data.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Team = () => {
  const [show, setShow] = useState({ display: false, name: '', profile: '', email: '' });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="block_title"
        style={{
          backgroundImage: `url("${require("../../images/header/team.png")}"`
        }}
      >
        Our Team
      </div>
      <div className="team">
        <div className="team_logo">
          <img src={teamLogo} alt="Team logo" />
        </div>

        <div className="team_member">
          {member_list.map((item, index) => (
            <div className="team_member_item">
              <div className="member_list_title">{item.title}</div>
              <div className="member_list_line"></div>
              <div className="member_list_details">
                {item.member.map((item_member, index_member) => (
                  <div className="team_member_item_member">
                    <img src={item_member.member_image} alt="Member" onClick={e => setShow({ display: true, name: item_member.modal.title, profile: item_member.modal.profile, email: item_member.modal.contact.email })} />
                    {/* <div className="member_name">{item_member.member_name}</div> */}
                    <a href={item_member.personal_link} target="_blank">{item_member.member_name}</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="team_details team_vietnam">
          <div className="team_details_image_wrapper">
            <div className="team_details_image">
              <img src={vietnameseImage} alt="Vietnamese Team" />
            </div>
          </div>
          <div className="team_details_description_wrapper">
            <div className="team_details_description">
              <div className="team_details_description_title">
                Vietnamese Team
              </div>
              <div className="team_details_description_line"></div>
              <div className="team_details_description_info">
                <ul>
                  <li>
                    School of Information and Communication Technology, Hanoi
                    University of Science and Technology
                  </li>
                  <li>
                    School of Electrical Engineering, Hanoi University of
                    Science and Technology
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="team_details team_japan">
          <div className="team_details_description_wrapper">
            <div className="team_details_description">
              <div className="team_details_description_title">
                Japanese Team
              </div>
              <div className="team_details_description_line"></div>
              <div className="team_details_description_info">
                <ul>
                  <li>Graduate School of Engineering, Chiba University</li>
                  <li>
                    Wireless System Laboratory, Toshiba Corporate Research &
                    Development Center, Toshiba Corporation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="team_details_image_wrapper">
            <div className="team_details_image">
              <img src={japaneseImage} alt="Japanese Team" />
            </div>
          </div>
        </div>
      </div>

      <Modal show={show.display} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{show.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Profile</h3>
          <hr></hr>
          <p>{show.profile}</p>
          <hr></hr>
          <h3>Contact Info</h3>
          <p>
            <b>Email:</b> {show.email}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Team;
