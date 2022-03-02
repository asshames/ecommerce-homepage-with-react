import React from "react";
import Layout from "../../components/Layout/Layout";
import Aux from "../../hoc/Auxilary/Auxillary";
import Slider from "../../components/Slider/Slider";
import News from "../../components/News/News";
import Buttons from "../../components/Buttons/Buttons";
import TodaysDeal from "../../components/TodaysDeal/TodaysDeal";
import Collections from "../../components/Collections/Collections";
import Flooter from "../../components/Flooter/Flooter";

const MyShop = () => {
    return (
        <Aux>
            <Layout />
            <Slider />
            <News />
            <Buttons />
            <TodaysDeal />
            <Collections />
            <Flooter />
        </Aux>
    );
};

export default MyShop;