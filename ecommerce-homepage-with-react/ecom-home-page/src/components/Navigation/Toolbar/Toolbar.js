import React from "react";

import classes from './Toolbar.module.css';
import SubMenu from "../Menu/SubMenu/SubMenu";

const Toolbar = () => (
    <header className={classes.Toolbar}>
        <SubMenu />
        <div>Searchbar</div>
        <div>MainMenu</div>
    </header>
);

export default Toolbar;