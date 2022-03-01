import React from "react";
import Aux from "../../hoc/Auxilary/Auxillary";

const layout = (props) => {
    return (
        <Aux>
            <div>
                SAVE MORE ON APP, BECOME A MERCHANT, CAMPAIGN, TRACK MY ORDER, PRESS RELEASE, MYSHOP LEARNING
            </div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
};

export default layout;