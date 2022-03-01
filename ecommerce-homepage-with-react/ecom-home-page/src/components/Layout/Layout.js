import React from "react";
import Aux from "../../hoc/Auxilary/Auxillary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

const Layout = (props) => {
    return (
        <Aux>
            <div>
                <Toolbar />
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;