import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1, textAlign: 'center'  }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Selise Portal
          </Typography>

          <NavLink
            style={{ textDecoration: "none", marginRight: "4px" }}
            to="/Users"
          >
            <Button variant="contained">Users</Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/Createuser">
            <Button variant="contained">Create Users</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
