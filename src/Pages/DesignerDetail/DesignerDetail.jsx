import React, { useEffect } from "react";
import "./designerdetail.sass";
import ReactStars from "react-rating-stars-component";
import { useTable } from 'react-table';
// import { columns, data } from './data.js';
import { my_table } from './data.js';
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
// import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

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
        : <div></div>))
  }
  const classes = useStyles();
  // const [modalStyle] = React.useState(getModalStyle)
  const [purchase, setPurchase] = React.useState(false);
  const [rent, setRent] = React.useState(false)
  // const classes = useStyles();

  const handleOpenPurchase = () => {
    // console.log("abc loz")
    setPurchase(true);
  };

  const handleOpenRent = () => {
    setRent(true);
  };

  const handleClosePurchase = () => {
    setPurchase(false);
  };

  const handleCloseRent = () => {
    setRent(false);
  };

  const bodyRent = (
    <div style={{
      textAlign: "center", 
    }}>
      <form
        style={{ 
          display: "inline-block", 
          width: 400,
          backgroundColor: "white",
          marginTop: 200
        }}  
      >

        <h2>List of Rent</h2>
                  <TableContainer style={{ display: "inline-block"}}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>No</TableCell>
                          <TableCell align="right">Supplier</TableCell>
                          <TableCell align="right">Price</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      <TableRow>
                            <TableCell component="th" scope="row">
                              1
                            </TableCell>
                            <TableCell align="right">Interior</TableCell>
                            <TableCell align="right">13$</TableCell>
                          </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
      </form>
    </div>
  )
  const bodyPurchase = (
    <div style={{
      textAlign: "center", 
    }}>
      <form
        style={{ 
          display: "inline-block", 
          width: 400,
          backgroundColor: "white",
          marginTop: 200
        }}  
      >

        <h2>List of purchase</h2>
                  <TableContainer style={{ display: "inline-block"}}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>No</TableCell>
                          <TableCell align="right">Supplier</TableCell>
                          <TableCell align="right">Price</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      <TableRow>
                            <TableCell component="th" scope="row">
                              1
                            </TableCell>
                            <TableCell align="right">Interior</TableCell>
                            <TableCell align="right">13$</TableCell>
                          </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
      </form>
    </div>
  )

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
                  {/* <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Supplier</th>
                    <th>purchase</th>
                    <th>Rent</th>
                  </tr>
                </thead>
                <tbody className="furniture_details">
                    {item.data.map((data, index) => (
                      <tr>
                        <td>{data.no}</td>
                        <td>{data.furniture}</td>
                        <td>{data.price}$</td>
                        <td>{data.supplier}</td>
                        <td><button>purchase</button></td>
                        <td><button>rent</button></td>
                      </tr>
                    ))}
                </tbody>
              </table> */}
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>No</TableCell>
                          <TableCell align="right">Name</TableCell>
                          <TableCell align="right">Price</TableCell>
                          <TableCell align="right">Supplier</TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {item.data.map((data, index) => (
                          <TableRow key={data.index}>
                            <TableCell component="th" scope="row">
                              {data.no}
                            </TableCell>
                            <TableCell align="right">{data.furniture}</TableCell>
                            <TableCell align="right">{data.price}</TableCell>
                            <TableCell align="right">{data.supplier}</TableCell>
                            <TableCell align="right">
                              <Button variant="contained" style={{ backgroundColor: "#F49A00", color: "white" }} onClick={handleOpenPurchase}>
                                Purchase
                              </Button>
                              <Modal
                                open={purchase}
                                onClose={handleClosePurchase}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                              >
                                {bodyPurchase}
                              </Modal>
                            </TableCell>
                            <TableCell align="right">
                              <Button variant="contained"
                                style={{ backgroundColor: "#F49A00", color: "white" }}
                                onClick={handleOpenRent}
                              >
                                Rent
                              </Button>
                              <Modal
                                open={rent}
                                onClose={handleCloseRent}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                              >
                                {bodyRent}
                              </Modal>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
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
