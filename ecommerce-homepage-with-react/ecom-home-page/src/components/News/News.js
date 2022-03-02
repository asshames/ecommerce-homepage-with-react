import React from "react";

import classes from "./News.module.css";

const News = () => {
    return (
        <div className={classes.News}>
            <button>Latest news:</button>
            <input placeholder="Updating the latest news"></input>
        </div>
    );
};

export default News;