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
    justifyContent: "space-between"
}

const column = {
    width: 350,
}

const h3 = {
    fontSize: 24,
}

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Mobile>
                    <div style={fixed}>
                        <div style={{ paddingTop: 48, }}>
                            <div style={h3}>
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
                                    <div style={column}>
                                    <div style={h3}>
                                Vocdoni
                                {VocdoniLogo()}
    
                            </div>
                                </div>
                                    <div style={column}>
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