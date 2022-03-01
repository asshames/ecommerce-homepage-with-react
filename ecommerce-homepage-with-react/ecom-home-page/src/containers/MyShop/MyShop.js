import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import Aux from "../../hoc/Auxilary/Auxillary";

class MyShop extends Component{
    render() {
        return (
            <Aux>
                <Layout/>
                <div>Slider</div>
                <div>News</div>
                <div>ShopMall, District, Campaigns, Services</div>
                <div>Today's Deal</div>
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
};

export default MyShop;