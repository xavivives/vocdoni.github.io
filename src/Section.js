import React from "react";
import { Mobile, Default } from "./Devices"
import Styles from './Styles'

const verticalCenter = {
    display: "flex",
    flexDirection: "row",
    alignItems: "   center",
    backgroundColor: "blue",
    height: "100%",
}

export default class Section extends React.Component {
    
    render() {
        return (

            <div style={verticalCenter}>
                <Mobile>
                    <div style={Styles.singleColumnContainer}>
                        <div style={Styles.singleColumn}>
                            {this.props.child1}
                            {this.props.child2}
                        </div>
                    </div>
                </Mobile>

                <Default>
                    <div style={Styles.center}>
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