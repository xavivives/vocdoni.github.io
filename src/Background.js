import React from "react";
import Styles from "./Styles";

export default class Background extends React.Component {
    render() {
        return (
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                backgroundColor: Styles.backgroundColor,
                padding: 10,
                height: "100%",
                zIndex: -2
            }}>
            </div >
        )
    }
}