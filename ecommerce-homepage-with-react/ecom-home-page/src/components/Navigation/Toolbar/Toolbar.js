import React from "react";

import classes from './Toolbar.module.css';
import SubMenu from "../Menu/SubMenu/SubMenu";
import SearchBar from "../SearchBar/SearchBar";

const Toolbar = () => (
    <header className={classes.Toolbar}>
        <SubMenu />
        <SearchBar />
        <div>MainMenu</div>
    </header>
);

export default Toolbar;