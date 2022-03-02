import { TodaysDeals } from "../../data";
import TodaysDealItem from "./TodaysDealItem/TodaysDealItem";
import classes from "./TodaysDeal.module.css";

const TodaysDeal = () => {
    return (
        <div className={classes.Border}>
            <div className={classes.View}>
                <p><strong>Todays Deals</strong></p>
                <p>View All</p>
            </div>
            <div className={classes.TodaysDeal}>
                {TodaysDeals.map((item) => (
                    <TodaysDealItem item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default TodaysDeal;