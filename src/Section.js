import React from "react";
import { Mobile, Default } from "./Devices"
import Styles from './Styles'

const verticalCenter = {
    display: "flex",
    flexDirection: "row",
    alignItems: "   center",
    height: "100%",
}

export default class Section extends React.Component {

    render() {
        return (

            <div style={verticalCenter}>
                <Mobile>
                    <div style={Styles.singleColumnContainer}>
                        <div style={Styles.singleColumn}>
                            {this.props.title}
                            {this.props.child1}
                            {this.props.child2}
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
                )
            }
}