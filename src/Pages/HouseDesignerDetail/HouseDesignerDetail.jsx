import React, { useEffect, useState } from "react";
import "./housedesignerdetail.sass";
import { my_table } from './data.js';
import Carousel from 'react-bootstrap/Carousel';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from "react-bootstrap/Modal";
import ButtonBootstrap from "react-bootstrap/Button";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const HouseDesignerDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const [purchase, setShowPurchase] = useState({show: false, name: "", price: "", supplier: ""});
  const [rent, setShowRent] = useState({show: false, name: "", price: "", supplier: ""})

  const closePurchase = () => setShowPurchase({show: false});
  const closeRent = () => setShowRent({show: false});

  return (
  <>
    <div className="designer_body">
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
                  <div 
                  style={{display:"flex", justifyContent:"center",paddingBottom:20}}
                  >
                  <Button variant="outlined" style={{borderColor:"#F49A00",color:"#F49A00",borderRadius:"25px"}}>Save</Button>
                  </div>
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
                  </div>
                </div>
              </div>

              <div className="summary">
                  <b>Furniture Listing</b>
                  <ul>
                    {/* {item.data} */}
                    <li>5620$</li>
                    <li>{item.data.length} items</li>
                    <li>1 supplier</li>
                  </ul>
                </div>

              <div className="design_sum_information">
                <div className="designer_furniture">
                  <TableContainer component={Paper} >
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow
                        // style={{display:"flex",justifyContent:"space-around"}}
                        >
                          <TableCell>No</TableCell>
                          <TableCell align="right">Furniture Name</TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody className="furniture_details">
                        {item.data.map((data, index) => (
                          <TableRow key={data.index} 
                          // style={{display:"flex",justifyContent:"space-around"}}
                          >
                            <TableCell align="center">
                              {data.no}
                            </TableCell>
                            <TableCell component="th" scope="row">{data.furniture}</TableCell>
                            <TableCell align="right">
                              <Button variant="contained" style={{ backgroundColor: "#F49A00", color: "white",borderRadius:25 }} onClick={e => setShowPurchase({ show: true, name: data.furniture, price: data.price, supplier: data.supplier })}>
                                Purchase
                              </Button>
                            </TableCell>
                            <TableCell align="right">
                              <Button variant="contained"
                                style={{ backgroundColor: "#F49A00", color: "white",borderRadius:25 }}
                                onClick={e => setShowRent({ show: true, name: data.furniture, price: data.price, supplier: data.supplier })}
                              >
                                Rent
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                
              </div>
            </div>
            : null))}
      </div>
    </div>

    <Modal show={purchase.show} onHide={closePurchase}>
      <Modal.Header closeButton>
          <Modal.Title>Purchasing</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <b>Are you sure to purchase the item?</b>
        <p>Name: {purchase.name}</p>
        <p>Price: {purchase.price}</p>
        <p>Supplier: {purchase.supplier}</p>
      </Modal.Body>
      <Modal.Footer>
        <ButtonBootstrap variant="secondary" onClick={closePurchase}>
          No
        </ButtonBootstrap>
        <ButtonBootstrap variant="primary" onClick={closePurchase}>
          Yes
        </ButtonBootstrap>
      </Modal.Footer>
    </Modal>

    <Modal show={rent.show} onHide={closeRent}>
      <Modal.Header closeButton>
          <Modal.Title>Renting</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <b>Are you sure to rent the item?</b>
        <p>Name: {rent.name}</p>
        <p>Price: {rent.price}</p>
        <p>Supplier: {rent.supplier}</p>
      </Modal.Body>
      <Modal.Footer>
        <ButtonBootstrap variant="secondary" onClick={closeRent}>
          No
        </ButtonBootstrap>
        <ButtonBootstrap variant="primary" onClick={closeRent}>
          Yes
        </ButtonBootstrap>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default HouseDesignerDetail;
