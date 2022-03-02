import React from "react";
import Layout from "../../components/Layout/Layout";
import Aux from "../../hoc/Auxilary/Auxillary";
import Slider from "../../components/Slider/Slider";
import News from "../../components/News/News";
import Buttons from "../../components/Buttons/Buttons";
import TodaysDeal from "../../components/TodaysDeal/TodaysDeal";

const MyShop = () => {
    return (
        <Aux>
            <Layout />
            <Slider />
            <News />
            <Buttons />
            <TodaysDeal />
            <div>Winter Collections</div>
            <div>Electronics</div>
            <div>Women's Collection</div>
            <div>Ladies Bag Collections</div>
            <div>Global Products</div>
            <div>Sharee's collection</div>
            <div>SmartPhones</div>
            <div>Flagship Store</div>
            <div>Ekshop</div>
            <div>Just For You</div>
            <div>Flooter</div>
        </Aux>
    );
};

export default MyShop;