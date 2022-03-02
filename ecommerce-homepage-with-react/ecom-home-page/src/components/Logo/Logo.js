import React from "react";

import classes from "./Logo.module.css";

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            {props.children}
        </div>
    );
}

export default Logo;