import React, {useEffect} from "react";
import "./designerdetail.sass";
import ReactStars from "react-rating-stars-component";
import { useTable } from 'react-table';
import { columns, data } from './data.js';

const DesignerDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <>
      <div className="designer_detail">
        <div className="designer_information">
          <div className="designer_information_image">
            <img src={require("../../images/body/designerdetail/5.jpg")} alt="" />
          </div>
          <div className="designer_information_detail">
            <div className="designer_information_detail_title">
              <b>Type</b>
              <ul>
                <li>Living Room</li>
                <li>Classic</li>
              </ul>
              <b>Designer</b>
              <p>ICON INTERIOR</p>  
              <b>Description</b>
              <p>Stand out with a picture of a golden lotus flower, symbolizing purity and purity. The architect Vinmic wishes to bring to Mr. Son's family a feeling of purifying mobile gases, enhancing good energy and eliminating bad things, avoiding sorrow. High-quality felt bed combined with imported mats in neutral colors, Asian-style wardrobe and open-design study desks create a comfortable, clear space to every corner.</p>
              <b>Rate</b>
              <p>
                <ReactStars
                  count={5}
                  size={24}
                  value={5}
                  activeColor="#ffd700"
                  edit={false}
                />
              </p>
            </div>
          </div>
        </div>


        <div className="designer_furniture">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DesignerDetail;
