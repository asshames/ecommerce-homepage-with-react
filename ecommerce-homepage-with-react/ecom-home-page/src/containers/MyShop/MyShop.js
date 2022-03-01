import React, { Component } from "react";
import Aux from "../../hoc/Auxilary/Auxillary";

class MyShop extends Component{
    render() {
        return (
            <Aux>
                <div>SubMenu</div>
                <div>Searchbar</div>
                <div>MainMenu</div>
                <div>Category</div>
                <div>News</div>
                <div>ShopMall</div>
                <div>Collections</div>
                <div>Information</div>
            </Aux>
        );
    };
};

export default MyShop;