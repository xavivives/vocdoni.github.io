import React from "react";

const topPadding = 120;
const verticalCenter = {
    display: "flex",
    flexDirection: "row",
    alignItems: "   center",
    backgroundColor: "blue",
    height:"100%",
    //justiftyContent: "center"
}


export default class Section extends React.Component {
    render() {
        return (

            <div style={verticalCenter}>
                <div>
                    {this.props.children}
                </div>
            </div>


        )
    }
}