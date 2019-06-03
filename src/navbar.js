import React from "react";
import { Mobile, Default } from "./Devices"
import VocdoniLogo from "./VocdoniLogo"
import { HamburgerSqueeze } from 'react-animated-burgers'
import Styles from './Styles'

const backgroundColor = "#F3F0ED"
const elementPadding = 24

const fixed = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
}

const row = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
}

const title = {
    display: "flex",
    flexDirecton: "row",
    //justifyContent: "space-around"
}

const titleName = {
    fontSize: 24,
    paddingRight: elementPadding,
    paddingLeft: elementPadding
}

const titleLogo = {
}

const burguer = {
    paddingLeft: elementPadding,
    paddingRight: elementPadding,
}

const navPadding = {
    paddingTop: elementPadding * 2,
    paddingBottom: elementPadding,
    width: "100%",
    backgroundColor: backgroundColor,
}


const verticalButtonItem = {
    padding: elementPadding,
}


export default class Navbar extends React.Component {

    state = {
        menuIsVisible: false
    }

    toggleButton = () => {
        this.setState({
            menuIsVisible: !this.state.menuIsVisible
        })
    }

    renderMenu(visible) {
        if (visible) {
            return <div>

                <div style={verticalButtonItem}>
                    App
                </div>
                <div style={verticalButtonItem}>
                    Open Stack
                </div>
                <div style={verticalButtonItem}>
                    Services
                </div>
            </div>
        }

        return <div />
    }

    render() {
        return (
            <div>
                <Mobile>
                    <div style={fixed}>
                        <div style={navPadding}>
                            <div style={Styles.singleColumnContainer}>
                                <div style={Styles.singleColumn}>
                                    <div style={row}>
                                        <div style={title}>
                                            <div style={titleName}>Vocdoni</div>
                                            <div style={titleLogo}>{VocdoniLogo()}</div>
                                        </div>

                                        <div style={burguer}>
                                            <HamburgerSqueeze
                                                buttonWidth={20}
                                                isActive={this.state.menuIsVisible}
                                                toggleButton={this.toggleButton}
                                                barColor="#444" />
                                        </div>
                                    </div>
                                    {this.renderMenu(this.state.menuIsVisible)}
                                </div>
                            </div>
                        </div>
                    </div >
                </Mobile>

                <Default>
                    <div style={fixed}>
                        <div style={navPadding}>

                            <div style={Styles.singleColumnContainer}>
                                <div style={Styles.desktopRow}>
                                    <div style={Styles.column}>
                                        <div style={title}>
                                            <div style={titleName}>Vocdoni</div>
                                            <div style={titleLogo}>{VocdoniLogo()}</div>
                                        </div>
                                    </div>
                                    <div style={Styles.column}>
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
                    </div>

                </Default>
            </div>
        )
    }
}