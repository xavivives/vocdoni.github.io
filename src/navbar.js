import React from "react";
import { Mobile, Default } from "./Devices"
import VocdoniLogo from "./VocdoniLogo"
import { HamburgerSqueeze } from 'react-animated-burgers'
import Styles from './Styles'

const fixed = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: Styles.backgroundColor,
}

const buttonsRow = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%"
}

const logoBurguerRow = {
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
    margin:"auto",
    fontSize: 24,
    paddingRight: Styles.elementPadding,
}

const mobileTitleName = {
    margin:"auto",
    fontSize: 20,
    paddingRight: Styles.elementPadding,
}

const titleLogo = {
    alignItems: "center",
    display: "block",
    margin: "auto"
}

const navPadding = {
    paddingTop: Styles.elementPadding * 2,
    paddingBottom: Styles.elementPadding,
    width: "100%",
}
const mobileNavPadding = {
    paddingTop: Styles.elementPadding * 0.7,
    paddingBottom: Styles.elementPadding,
    width: "100%",
}


const verticalButton = {
    cursor: "pointer",
    padding: Styles.elementPadding,
}

const horizontalButton = {
    cursor: "pointer",
    paddingLeft: Styles.elementPadding * 2,
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
            return this.getButtons(verticalButton)
        }
        return <div />
    }

    getButtons = (buttonStyle) => {
        return this.props.children.map((child, index) => <div key={index} style={buttonStyle}>{child}</div>)
    }



    render() {
        return (
            <div style={fixed}>
                <div style={Styles.pageCenter}>
                    <Mobile>
                        <div style={mobileNavPadding}>
                            <div style={Styles.singleColumnContainer}>
                                <div style={Styles.singleColumn}>
                                    <div style={logoBurguerRow}>


                                        <HamburgerSqueeze
                                            buttonWidth={20}
                                            isActive={this.state.menuIsVisible}
                                            toggleButton={this.toggleButton}
                                            barColor="#444"
                                            />

                                        <div style={title}>
                                            <div style={mobileTitleName}>Vocdoni</div>
                                            <div style={titleLogo}>{VocdoniLogo()}</div>
                                        </div>

                                    </div>
                                    {this.renderMenu(this.state.menuIsVisible)}
                                </div>
                            </div>
                        </div>

                    </Mobile>

                    <Default>

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
                                        <div style={buttonsRow}>
                                            {this.getButtons(horizontalButton)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Default>
                </div>
            </div>
        )
    }
}