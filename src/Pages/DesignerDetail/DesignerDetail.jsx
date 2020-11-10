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
              <p>If you are looking for an interior design of a luxury apartment with European beauty
              but still friendly and cozy, you should definitely not miss this apartment. Elegant 
              and sophisticated design lines. In addtion, new colors and combinations also help
              the apartment to be more new.</p>
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
