import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ImExit } from "react-icons/im";
import "./Navbar.scss"

const Navbar = ({ handleDrawerToggle }) => {
    return (
        <AppBar position="sticky" style={{ backgroundColor: "white", color: "black", borderRadius: "30px 30px 0 0", padding: "0 30px", boxShadow: "none" }}>
            <Toolbar style={{ borderBottom: "1px solid grey" }}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', display: "flex", fontSize: "24px", alignItems: "center" }}>
                    Good morning, Maharram 👋 <p style={{ fontWeight: 200, fontSize: "12px" }}>you have <span style={{ color: "#36A2Eb" }}>1 new message</span></p>
                </Typography>
                <IconButton color="inherit">
                    <ImExit />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
