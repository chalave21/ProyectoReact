import React from "react";
import Cartwidget from "../common/Cartwidget";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Cartwidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
