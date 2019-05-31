import React from "react";

export default class Background extends React.Component {
    render() {
        return (
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width:"100%",
                backgroundColor: "#F3F0ED",
                padding: 10,
                height:window.innerHeight,
                zIndex: -2
                
            }}>
                Vocdoni
            </div >
        )
    }
}