import React from "react";

import classes from "./MainMenuItem.module.css";

const MainMenuItemItem = (props) => (
    <li className={classes.MainMenuItem}>
        {props.children}
    </li>
);

export default MainMenuItemItem;