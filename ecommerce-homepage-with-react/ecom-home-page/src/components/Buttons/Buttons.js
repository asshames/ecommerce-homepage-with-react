import { SettingsApplications, SpeakerGroupOutlined, StoreMallDirectoryTwoTone, Streetview } from "@material-ui/icons";
import React from "react";

import classes from "./Buttons.module.css"

const Buttons = () => {
    return (
        <div className={classes.Buttons}>
            <button> <StoreMallDirectoryTwoTone style={{paddingRight:"30px"}}/> MyShop Mall </button>
            <button> <Streetview style={{paddingRight:"30px"}} /> District Branding </button>
            <button> <SpeakerGroupOutlined style={{paddingRight:"30px"}} /> Campaigns </button>
            <button> <SettingsApplications style={{paddingRight:"30px"}} /> Services </button>
        </div>
    );
};

export default Buttons;