import React from "react";

import classes from './Toolbar.module.css';
import SubMenu from "../Menu/SubMenu/SubMenu";
import SearchBar from "../SearchBar/SearchBar";
import MainMenu from "../Menu/MainMenu/MainMenu";

const Toolbar = () => (
    <header className={classes.Toolbar}>
        <SubMenu />
        <SearchBar />
        <MainMenu />
    </header>
);

export default Toolbar;