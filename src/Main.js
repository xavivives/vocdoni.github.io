import React from "react";
import Navbar from "./navbar";
import Pages from "./Pages";
import Background from "./Background";
import Section from "./Section";
import Styles from "./Styles";

const title = {
    textTransform: "uppercase",
    fontSize: 40,
    fontWeight: 400,
    width: "100%",
    paddingBottom: 50
}

const highlight = {
     display: "inline",
    fontWeight: 900,
}

const featuredImage = {
    maxWidth: "100%",
    maxHeight: "100%"
}

const button = {
    padding: "10px 20px 10px 20px",
    color: Styles.backgroundColor,
    backgroundColor: "#444",
    borderRadius: 5,
    display: "inline-block"
}

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 1 };
    }

    getReimaginingPage = () => {
        return <Section
            filpChildsOnMobile={true}
            title={<div style={title}> Reimagining <div style={highlight}>Governance</div></div>}
            child1={
                <div>

                    <p>Up until today, participation has been constrained by the physicality of how we cast our vote.</p>
                    <p>Vocdoni provides the necessary tools for your organization to reinvent what governance can be.</p>
                </div>
            }
            child2={
                <img
                    style={featuredImage}
                    src={process.env.PUBLIC_URL + '/assets/screenshot.png'}
                />
            }
        />
    }

    getCommunityPage = () => {
        return <Section
            title={<div style={title}> Make your community <div style={highlight}>thrive</div></div>}
            child1={
                <div>
                    <p>What does it meat to express your will...  <div style={highlight}>anytime, anywhere!</div></p>
                    <p>We can make governance a conversation.</p>

                </div>
            }
            child2={
                <div>
                    <p>Enable  frictionless participation on your community.</p>
                    <p>Let us know what you need</p>
                    <div style={button}>
                        Request invitation to join the Beta
                    </div>
                </div>
            }
        />
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
                {this.getCommunityPage()}
                {this.getReimaginingPage()}

            </Pages>
            <Background />
        </div>
    }
}