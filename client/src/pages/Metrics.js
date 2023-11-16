import React from "react";
import Navbar from "../components/Navbar";
import { useAllShifts } from "../hooks/useAllShifts";
import { useUpdateData } from "../hooks/useUpdateData";
import { Box, Container, Grid } from "@mui/material";

function Metrics() {
  const shiftData = useAllShifts();
  const updateData = useUpdateData();
  const shiftDataLength = shiftData.length;
  const updateDataLength = updateData.length;

  return (
    <>
      <Navbar />
      <Container>
        <Grid container>
          <Grid item xs={6} sx={{ padding: 2 }}>
            <Box sx={{ backgroundColor: "white", borderRadius: 1 }}>
              <h2>Shiftlog Metrics</h2>
              <p>Number of Logs: {shiftDataLength}</p>
              <p>Number of Logs by User: </p>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <h2>Number of Updates: {updateDataLength}</h2>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Metrics;
