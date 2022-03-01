import React from "react";

import classes from "./SubMenu.module.css";
import NavigationItem from "../../NavigationItem/NavigationItem";

const SubMenu = () => {
    return (
        <ul className={classes.SubMenu}>
            <NavigationItem>SAVE MORE ON APP</NavigationItem>
            <NavigationItem>BECOME A MARCHANT</NavigationItem>
            <NavigationItem>CAMPAIGN</NavigationItem>
            <NavigationItem>TRACK MY ORDER</NavigationItem>
            <NavigationItem>PRESS RELEASE</NavigationItem>
            <NavigationItem>MYSHOP LEARNING</NavigationItem>
            <NavigationItem>English</NavigationItem>
            <NavigationItem>+880 XXXX XXXX</NavigationItem>
        </ul>
    )
}

export default SubMenu;