import React from "react";
import { Mobile, Default } from "./Devices"
import Styles from './Styles'

const verticalCenter = {
    display: "flex",
    flexDirection: "row",
    alignItems: "   center",
    height: "100%",
    paddingLeft: 30,
    paddingRight: 30
}

export default class Section extends React.Component {

    render() {

        let mobileChild1 = this.props.child1
        let mobileChild2 = this.props.child2

        if (this.props.filpChildsOnMobile) {
            mobileChild1 = this.props.child2
            mobileChild2 = this.props.child1
        }
        return (
            <div style={{ paddingTop: 60, paddingBottom: 120 }}>

                <div style={verticalCenter}>
                    <Mobile>
                        <div style={Styles.singleColumnContainer}>
                            <div style={Styles.singleColumn}>
                                {this.props.title}
                                {mobileChild1}
                                {mobileChild2}
                            </div>
                        </div>
                    </Mobile>

                    <Default>
                        <div style={Styles.singleColumnContainer}>
                            <div style={Styles.desktopRow}>
                                {this.props.title}
                            </div>
                            <div style={Styles.desktopRow}>
                                <div style={Styles.column}>
                                    {this.props.child1}
                                </div>
                                <div style={Styles.column}>
                                    {this.props.child2}
                                </div>
                            </div>
                        </div>
                    </Default>
                </div>
            </div>
        )
    }
}