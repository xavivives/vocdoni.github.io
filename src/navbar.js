import React from "react";
import { Mobile, Desktop } from "./Devices"
import VocdoniLogo from "./VocdoniLogo"

const fixed = {
    position: "fixed",
    top: 0,
    left: 0,
    height: 48,
    width: "100%",
    backgroundColor: "#F3F0ED",
}

const center = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
}
const desktopRow = {
    display: "flex",
    flexDirecton: "row",
    width: 761,
    justifyContent: "space-between"
}

const row = {
    display: "flex",
    flexDirecton: "row",
    justifyContent: "space-between",
    width:"100%"
}

const centeredRowElement = {
    width: 350,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}

const title = {
    display: "flex",
    flexDirecton: "row",
    //justifyContent: "space-around"
}

const titleName = {
    fontSize: 24,
    paddingRight: 20,
}

const titleLogo = {
    
}

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Mobile>
                    <div style={fixed}>
                        <div style={{ paddingTop: 48, }}>
                            <div style={title}>
                                Vocdoni

                            </div>
                        </div>
                    </div >
                </Mobile>

                <Desktop>
                    <div style={fixed}>
                        <div style={{ paddingTop: 48, }}>
                            <div style={center}>
                                <div style={desktopRow}>
                                    <div style={centeredRowElement}>
                                        <div style={title}>
                                            <div style={titleName}>Vocdoni</div>
                                            <div style={titleLogo}>{VocdoniLogo()}</div>
                                        </div>
                                    </div>
                                    <div style={centeredRowElement}>
                                        <div style={row}>
                                            <div>
                                                App
                                            </div>
                                            <div>
                                                Open Stack
                                            </div>
                                            <div>
                                                Services
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div >
                </Desktop>
            </div>
        )
    }
}