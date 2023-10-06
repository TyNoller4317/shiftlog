import React from "react";
import Table from "@mui/joy/Table";
import Moment from "moment";
import { Link } from "react-router-dom";

function ShiftViewTable({ tableData }) {
  return (
    <>
      <Table aria-label="basic table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Tickets</th>
            <th>Walkthrough</th>
            <th>Critical Site Updates</th>
            <th>Ticket Updates</th>
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
              <td>{shift.ticket_updates}...</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ShiftViewTable;
