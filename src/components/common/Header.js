import React from 'react'
import { AppBar, Toolbar } from "@material-ui/core"
import logo from "./../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Header = () => (
    <AppBar position='sticky'>
        <Toolbar>
            <Link to={`/`}>
                <img src={logo} alt="logo" width="140" height="60"></img>
            </Link>
        </Toolbar>
    </AppBar>
);

export default Header
