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
    display: "inline",
    fontWeight: 600,
    color: "red"
}

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 1 };
    }

    getReimaginingPage = () => {
        return <Section
            child1="Hello"
            child2="Bye" />
    }

    pageOnChange = (number) => {
        this.setState({ currentPage: number });
    };

    render() {

        return <div>
            <Navbar />
            <Pages>

                {this.getReimaginingPage()}
                {this.getReimaginingPage()}
                {this.getReimaginingPage()}

            </Pages>
            <Background />
        </div>
    }
}