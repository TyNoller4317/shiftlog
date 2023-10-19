import React from "react";
import Table from "@mui/joy/Table";
import Moment from "moment";
import { Link } from "react-router-dom";

function ShiftViewTable({ tableData }) {
  return tableData ? (
    <>
      <Table aria-label="basic table">
        <thead>
          <tr>
            <th style={{ width: "8%" }}>Date</th>
            <th style={{ width: "10%" }}>Name</th>
            <th style={{ width: "10%" }}>Tickets</th>
            <th style={{ width: "10%" }}>Walkthrough</th>
            <th style={{ width: "12%" }}>Critical Site Updates</th>
            <th style={{ width: "50%" }}>Ticket Updates</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((shift, i) => (
            <tr key={i}>
              <td>
                <Link to={`/${shift._id}`}>
                  {Moment(shift.date).format("MM DD YYYY")}
                </Link>
              </td>
              <td>{shift.log_name}</td>
              <td>{shift.ticket}</td>
              <td>{shift.walkthrough}</td>
              <td>{shift.critical_updates}...</td>
              <td
                dangerouslySetInnerHTML={{ __html: shift.ticket_updates }}
              ></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}

export default ShiftViewTable;
