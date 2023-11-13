import React from "react";
import Table from "@mui/joy/Table";
import Moment from "moment";
import { Link } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function ShiftViewTable({ tableData }) {
  return tableData.length > 0 ? (
    <>
      <Table aria-label="basic table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "10%" }}>Date</TableCell>
            <TableCell sx={{ width: "10%" }}>Name</TableCell>
            {/* <TableCell>Tickets</TableCell>
            <TableCell>Walkthrough</TableCell> */}
            <TableCell sx={{ width: "30%" }}>Critical Site Updates</TableCell>
            <TableCell sx={{ width: "50%" }}>Ticket Updates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((shift, index) => (
            <TableRow key={index}>
              <TableCell>
                {" "}
                <Link to={`/${shift._id}`}>
                  {Moment(shift.date).format("MM-DD-YYYY")}
                </Link>
              </TableCell>
              <TableCell>{shift.log_name}</TableCell>
              <TableCell>
                <div
                  dangerouslySetInnerHTML={{ __html: shift.critical_updates }}
                />
              </TableCell>
              <TableCell>
                <div
                  dangerouslySetInnerHTML={{ __html: shift.ticket_updates }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  ) : (
    <Table aria-label="basic table">
      <TableHead>
        <TableRow>
          <TableCell sx={{ width: "10%" }}>Date</TableCell>
          <TableCell sx={{ width: "10%" }}>Name</TableCell>
          <TableCell sx={{ width: "30%" }}>Critical Site Updates</TableCell>
          <TableCell sx={{ width: "50%" }}>Ticket Updates</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}

export default ShiftViewTable;
