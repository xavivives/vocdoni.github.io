import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: 48,
                width: "100%",
                backgroundColor: "#F3F0ED",
            }}>
                <div style={{ paddingTop: 48, }}>

                    Vocdoni
                </div>
            </div >
        )
    }
}