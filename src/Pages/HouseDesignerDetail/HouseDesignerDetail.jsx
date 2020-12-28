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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { notification } from "antd";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const userToken = localStorage.getItem("user");


const HouseDesignerDetail = () => {
  
  const save_room = (item) => {
    if (userToken){
      const requestOptions = {
        email: userToken,
        image: item.image_title,
        title: item.title,
        size: item.size,
        detail_link: item.detail_link
        };
      axios.post('http://localhost:8000/auth/updateRoom', requestOptions)
        .then(response => {
          notification.open({
            type: 'success',
            message: 'Success',
            description: 'Save ideas succesfully',
            duration: 2
          })
      })
    }
    else {
      alert("You must login to use this function")
    }
    
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  
  const sumPrice = (item) => {
    let sum = 0
    for (var i = 0; i < item.data.length; i++){
      sum += parseInt(item.data[i].price, 10)
    }
    return sum
  };
  
  const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  const countSupplier = (item) => {
    let supplier = []
    for (var i = 0; i < item.data.length; i++){
      supplier.push(item.data[i].supplier)
    }
    let distinctSupplier = supplier.filter(distinct)
    return distinctSupplier.length
  };

  const [purchase, setShowPurchase] = useState({show: false, no:"", name: "", price: "", supplier: ""});
  const [rent, setShowRent] = useState({show: false, no:"", name: "", price: "", supplier: ""})

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
                    <Button 
                    variant="outlined" 
                    style={{borderColor:"#F49A00",color:"#F49A00",borderRadius:"25px"}} 
                    onClick={() => save_room(item)}
                    htmlType="submit"
                    >
                      Save
                    </Button>
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
                    <li>{sumPrice(item)}$</li>
                    <li>{item.data.length} items</li>
                    <li>{countSupplier(item)} supplier(s)</li>
                  </ul>
                </div>

              <div className="design_sum_information">
                <div className="designer_furniture">
                  <TableContainer component={Paper} >
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">No</TableCell>
                          <TableCell align="center">Furniture Name</TableCell>
                          <TableCell align="center"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody className="furniture_details">
                        {item.data.map((data, index) => (
                          <TableRow key={data.index}>
                            <TableCell align="center">
                              {data.no}
                            </TableCell>
                            <TableCell align="center" component="th" scope="row">
                              {data.furniture}
                            </TableCell>
                            <TableCell align="center">
                              <div className="button_purchase_rent">
                                <div className="button_purchase">
                                  <Button variant="contained" style={{ backgroundColor: "#F49A00", color: "white",borderRadius:25 }} onClick={e => setShowPurchase({ show: true, no:data.no, name: data.furniture, price: data.price, supplier: data.supplier })}>
                                    Purchase
                                  </Button>
                                </div>
                                <div className="button_rent">
                                  <Button variant="contained"
                                    style={{ backgroundColor: "#F49A00", color: "white",borderRadius:25 }}
                                    onClick={e => setShowRent({ show: true, no: data.no, name: data.furniture, price: data.price, supplier: data.supplier })}
                                  >
                                    Rent
                                  </Button>
                                </div>
                              </div>
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

    <Dialog
      fullWidth='xs'
      maxWidth='xs'
      open={purchase.show}
      onClose={closePurchase}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <div className="dialog_title">
          List sofa for purchasing
        </div>
        </DialogTitle>
      <DialogContent>
        <div className="dialog_content_wrapper">
          <div className="dialog_content">
            <TableContainer>
              <TableHead>
                <TableRow>
                  <TableCell align="center">No</TableCell>
                  <TableCell align="center">Supplier</TableCell>
                  <TableCell align="center">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell>
                  {purchase.no}
                </TableCell>
                <TableCell>
                  {purchase.supplier}
                </TableCell>
                <TableCell>
                  {purchase.price}
                </TableCell>
              </TableBody>
            </TableContainer>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={closePurchase} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>

    <Dialog
      open={rent.show}
      onClose={closeRent}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <div className="dialog_title">
          List sofa for renting
        </div>
        </DialogTitle>
      <DialogContent>
        <div className="dialog_content_wrapper">
          <div className="dialog_content">
            <TableContainer>
              <TableHead>
                <TableRow>
                  <TableCell align="center">No</TableCell>
                  <TableCell align="center">Supplier</TableCell>
                  <TableCell align="center">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell>
                  {rent.no}
                </TableCell>
                <TableCell>
                  {rent.supplier}
                </TableCell>
                <TableCell>
                  {rent.price}
                </TableCell>
              </TableBody>
            </TableContainer>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={closeRent} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default HouseDesignerDetail;
