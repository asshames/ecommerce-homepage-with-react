import { popularCollection } from "../../data";
import Collection from "./Collection/Collection";
import classes from "./Collections.module.css";

const Collections = () => {
    return (
        <div className={classes.Border}>
            <div className={classes.View}>
                <p><strong>Collections</strong></p>
                <p>View All</p>
            </div>
            <div className={classes.Collections}>
                {popularCollection.map((item) => (
                    <Collection item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default Collections;