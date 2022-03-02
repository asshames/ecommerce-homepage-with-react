import React from "react";
import {LiveTv, LocalShipping, Search, ShoppingCart} from "@material-ui/icons"
import Logo from "../../Logo/Logo";

import classes from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <div className={classes.SearchBar}>
            <Logo>MyShop</Logo>
            <div style={{
                width: '20%',
                height: '30px',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                border: '1px solid lightgray',
                alignItems: "center"
            }}>
                <p style={{
                    fontSize: '20px',
                    marginLeft: '3px'
                }}>Product</p>
                <input
                    placeholder="Search..."
                    style={{
                    border: 'none'
                    }}>
                </input>
                <button><Search/></button>
            </div>

            <p style={{
                paddingLeft: "40px",
                paddingRight: "20px",
            }}><LocalShipping /></p>

            <button style={{
                margin: "15px",
                backgroundColor: "salmon",
                borderRadius: "30%"
            }}><LiveTv /></button>
            
            <button style={{
                border: "1px solid lightgray",
                boxSizing: "border-box",
                display: "flex",
                flexFlow: "column",
                borderRadius: "5%",
                margin: "5px",
                paddingRight: "20px",
                backgroundColor:"white"
            }}>Hello, SignIn/SignUp <strong>My Account</strong></button>

            <button style={{
                marginLeft: "10px",
                backgroundColor:"white"
            }}><ShoppingCart /></button>
        </div>
    )
}

export default SearchBar;