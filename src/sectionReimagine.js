import React from "react";

export default class SectionReimagine extends React.Component {
    render() {
        return (
            <div style={{ height: 1000, backgroundColor : this.props.color}}>
                <div style={{padding:100}}>Hello</div>
                <h2>Fifth Component</h2>
            </div>
        )
    }
}