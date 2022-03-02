import React from "react";
import Layout from "../../components/Layout/Layout";
import Aux from "../../hoc/Auxilary/Auxillary";
import Slider from "../../components/Slider/Slider";
import News from "../../components/News/News";
import Buttons from "../../components/Buttons/Buttons";
import TodaysDeal from "../../components/TodaysDeal/TodaysDeal";
import Collections from "../../components/Collections/Collections";

const MyShop = () => {
    return (
        <Aux>
            <Layout />
            <Slider />
            <News />
            <Buttons />
            <TodaysDeal />
            <Collections />
            <div>Just For You</div>
            <div>Flooter</div>
        </Aux>
    );
};

export default MyShop;