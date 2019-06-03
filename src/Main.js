import React from "react";
import Navbar from "./navbar";
import Pages from "./Pages";
import Background from "./Background";
import Section from "./Section";

const title = {
    textTransform: "uppercase",
    fontSize: 40,
    fontWeight: 400,
    width: "100%"
}

const highlight = {
   // display: "inline",
    fontWeight: 600,
}

const featuredImage = {
    maxWidth: "100%",
    maxHeight: "100%"
}

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 1 };
    }

    getReimaginingPage = () => {
        return <Section
            title={<div style={title}> Reimagining <div style={highlight}>Governance</div></div>}
            child1={this.state.currentPage}
            child2={<img style={featuredImage} src={process.env.PUBLIC_URL + '/assets/screenshot.png'} />} />
    }

    onPageChange = (number) => {
        this.setState({ currentPage: number });
    };

    render() {

        return <div>
            <Navbar />
            <Pages
                onPageChange={this.onPageChange}>

                {this.getReimaginingPage()}
                {this.getReimaginingPage()}
                {this.getReimaginingPage()}

            </Pages>
            <Background />
        </div>
    }
}