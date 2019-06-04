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
            filpChildsOnMobile={true}
            title={<div style={title}> Reimagining <div style={Styles.highlight}>Governance</div></div>}
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
            title={<div style={title}> Make your community <div style={Styles.highlight}>thrive</div></div>}
            child1={
                <div>
                    <p>What does it meat to express your will...  <div style={Styles.highlight}>anytime, anywhere!</div></p>
                    <p>We can make governance a conversation.</p>

                </div>
            }
            child2={
                <div>
                    <p>Enable  frictionless participation on your community.</p>
                    <p>Let us know what you need</p>
                    <div style={Styles.button}>
                        Request invitation to join the Beta
                    </div>
                </div>
            }
        />
    }

    getVotingPage = () => {
        return <Section
            title={<div style={title}> <div style={Styles.highlight}>univesally verifiable</div> Voting system </div>}
            child1={
                <div>
                    <p>The most critical elections  today still relay on an envelop to guarantee its integrity. </p>
                    <p>Vocdoni gives cryptographic guarantees and make voting trully digital.</p>

                </div>
            }
            child2={
                <div>
                    <p> Powered by <div style={Styles.highlight}>Vocdoni Open Stack</div>, any third party can verifiy the integrity of the system</p>
                    <p>Don't trust us<div style={Styles.highlight}> TRUST THE MATH </div></p>
                    <div style={Styles.button} onClick={(e) => window.open("http://vocdoni.io/docs")}>
                        See technical specifications
                    </div>
                </div>
            }
        />
    }


    getBiometricPage = () => {
        return <Section
            title={<div style={title}> <div style={Styles.highlight}>Biometric verification</div> with ease </div>}
            child1={
                <div>
                    <p>Vocdoni integrates with the best existing <div style={Styles.highlight}>BIOMETRIC VERIFICATION</div> solutions, so you can  ensure that the participants in your organization are who you think they are.</p>

                </div>
            }
            child2={
                <div>
                    <p>No need for it?  Or you want to use your own authentication mechanisms?</p>
                    <p>You can always use your own infrastructure.</p>
                </div>
            }
        />
    }

    onPageChange = (number) => {
        this.setState({ currentPage: number });
    };

    getButtons = () => {
        return [
            <div style={Styles.highlight}>App</div>,
            <div onClick={(e) => window.open("http://vocdoni.io/docs")}> Open Stack</div>,
        ]
    }

    render() {

        return <div>
            <Navbar>
                <div style={Styles.highlight}>App</div>
                <div onClick={(e) => window.open("http://vocdoni.io/docs")}> Open Stack </div>
            </Navbar>
            <Pages
                onPageChange={this.onPageChange}>

                {this.getReimaginingPage()}
                {this.getCommunityPage()}
                {this.getVotingPage()}
                {this.getBiometricPage()}

            </Pages>
            <Background />
        </div>
    }
}