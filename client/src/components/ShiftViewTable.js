<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> 87ffa30 (Updated the design of the shiftlog as well as adding search functionality to the shiftlogs.)
import Table from "@mui/joy/Table";
import Moment from "moment";
import { Link } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "../styles/ShiftViewTable.css";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";

<<<<<<< HEAD
function ShiftViewTable({ tableData }) {
  const checkMobile = useCheckMobileScreen();
  console.log(checkMobile);

  return tableData.length > 0 ? (
    <>
      <Table aria-label="basic table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Date</TableCell>
            {checkMobile ? (
              <></>
            ) : (
              <TableCell className="tableCell">Name</TableCell>
            )}
            <TableCell className="tableCell">Critical Site Updates</TableCell>
            <TableCell className="tableCell">Ticket Updates</TableCell>
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
              {checkMobile ? <></> : <TableCell>{shift.log_name}</TableCell>}
              <TableCell>
                <div
                  dangerouslySetInnerHTML={{
                    __html: shift.critical_updates,
                  }}
                />
              </TableCell>
              <TableCell>
                <div
                  dangerouslySetInnerHTML={{
                    __html: shift.ticket_updates,
                  }}
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
=======
//checking out AG Grid
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

function ShiftViewTable({ tableData }) {
  const checkMobile = useCheckMobileScreen();

  const handleDetailsView = (props) => {
    return (
      <Link className="details-link" to={`/${props.data._id}`}>
        {Moment(props.value).format("MMMM-DD-YYYY")}
      </Link>
    );
  };

  const removeHTML = (props) => {
    return (
      <div
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: props.value }}
      />
    );
  };

  const [colDefs, setColDefs] = useState([
    { field: "date", cellRenderer: handleDetailsView, filter: true },
    { field: "log_name", filter: true },
    {
      field: "critical_updates",
      flex: 2, //valueFormatter: (text) => text.value.replace(/<[^>]*>/g, ""),
      cellRenderer: removeHTML,
      filter: true,
    },
    {
      field: "ticket_updates",
      flex: 2,
      cellRenderer: removeHTML,
      filter: true,
    },
  ]);

  return tableData.length > 0 ? (
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: 600 }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={tableData}
        columnDefs={colDefs}
        containerStyle={{ height: 700 }}
        rowHeight={80}
      />
    </div>
  ) : (
    <h1>Loading</h1>
>>>>>>> 87ffa30 (Updated the design of the shiftlog as well as adding search functionality to the shiftlogs.)
  );
}

export default ShiftViewTable;
<<<<<<< HEAD
=======

// return tableData.length > 0 ? (
//   <>
//     <Table aria-label="basic table">
//       <TableHead>
//         <TableRow>
//           <TableCell className="tableCell">Date</TableCell>
//           {checkMobile ? (
//             <></>
//           ) : (
//             <TableCell className="tableCell">Name</TableCell>
//           )}
//           <TableCell className="tableCell">Critical Site Updates</TableCell>
//           <TableCell className="tableCell">Ticket Updates</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {tableData.map((shift, index) => (
//           <TableRow key={index}>
//             <TableCell>
//               {" "}
//               <Link to={`/${shift._id}`}>
//                 {Moment(shift.date).format("MM-DD-YYYY")}
//               </Link>
//             </TableCell>
//             {checkMobile ? <></> : <TableCell>{shift.log_name}</TableCell>}
//             <TableCell>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: shift.critical_updates,
//                 }}
//               />
//             </TableCell>
//             <TableCell>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: shift.ticket_updates,
//                 }}
//               />
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </>
// ) : (
//   <Table aria-label="basic table">
//     <TableHead>
//       <TableRow>
//         <TableCell sx={{ width: "10%" }}>Date</TableCell>
//         <TableCell sx={{ width: "10%" }}>Name</TableCell>
//         <TableCell sx={{ width: "30%" }}>Critical Site Updates</TableCell>
//         <TableCell sx={{ width: "50%" }}>Ticket Updates</TableCell>
//       </TableRow>
//     </TableHead>
//   </Table>
// );
>>>>>>> 87ffa30 (Updated the design of the shiftlog as well as adding search functionality to the shiftlogs.)
