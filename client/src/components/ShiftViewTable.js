import React, { useState } from "react";
import Table from "@mui/joy/Table";
import Moment from "moment";
import { Link } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "../styles/ShiftViewTable.css";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";

//AG Grid
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

function ShiftViewTable({ tableData }) {
  const checkMobile = useCheckMobileScreen();

  const formatDate = (props) => {
    return (
      <Link className="shiftlink" to={props.data._id}>
        {Moment(props.value).format("MMMM-DD-YYYY")}
      </Link>
    );
  };

  const removeHtml = (props) => {
    console.log(props.value);
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: props.value,
        }}
      />
    );
  };

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "date", cellRenderer: formatDate, filter: true },
    { field: "log_name", filter: true },
    {
      field: "critical_updates",
      flex: 2,
      cellRenderer: removeHtml,
      filter: true,
      wrapText: true,
      autoHeight: true,
    },
    {
      field: "ticket_updates",
      flex: 2,
      cellRenderer: removeHtml,
      filter: true,
      autoHeight: true,
      wrapText: true,
    },
  ]);

  return tableData.length > 0 ? (
    <>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 700 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact rowData={tableData} columnDefs={colDefs} rowHeight={60} />
      </div>
    </>
  ) : (
    <></>
  );
}

export default ShiftViewTable;
