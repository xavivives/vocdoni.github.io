import React from "react";

export default class Section extends React.Component {
    render() {
        return (

            <div style={{
                padding: 60
            }}>
                {this.props.children}
            </div>

        )
    }
}