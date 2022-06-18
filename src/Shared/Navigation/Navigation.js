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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>

          <NavLink to="/Users">
            <Button color="inherit">Users</Button>
          </NavLink>
          <NavLink to="/Createuser">
            <Button color="inherit">Create Users</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
