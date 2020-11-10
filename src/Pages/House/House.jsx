import React, { useState } from "react";
import "./house.sass";
import { Link } from "react-router-dom";
import house_list from "./data.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Designer from "../Designer/Designer.jsx";

const House = () => {
  const [show, setShow] = useState({ display: false, name: '', profile: '', email: '' });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                    // onClick={e => setShow({ display: true})}
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
      

      <Modal show={show.display} onHide={handleClose}>
        <Modal.Body>
          <Designer />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default House;