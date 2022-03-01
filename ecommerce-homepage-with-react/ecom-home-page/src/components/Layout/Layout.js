import React from "react";
import Aux from "../../hoc/Auxilary/Auxillary";

const layout = (props) => {
    return (
        <Aux>
            <div>
                Toolbar, Menu, Information
            </div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
};

export default layout;