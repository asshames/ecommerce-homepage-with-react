import React from "react";
import MainMenuItemItem from "./NavigationItem/MainMenuItem";
import classes from "./MainMenu.module.css";

const MainMenu = () => {
    return (
        <ul className={classes.MainMenu}>
            <MainMenuItemItem>Uddakta Mall</MainMenuItemItem>
            <MainMenuItemItem> Ecommerce Partner</MainMenuItemItem>
            <MainMenuItemItem>Myshop Campaign</MainMenuItemItem>
            <MainMenuItemItem>Promotions</MainMenuItemItem>
            <MainMenuItemItem>Myshop Global</MainMenuItemItem>
            <MainMenuItemItem>More</MainMenuItemItem>
        </ul>
    );
};

export default MainMenu;