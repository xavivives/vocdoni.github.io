import React from "react";
import Navbar from "./navbar";
import Pages from "./Pages";
import Background from "./Background";
import Section from "./Section";
import Styles from "./Styles";
import Track from "./Analytics"

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

    gotoDocs() {
        //window.open("http://vocdoni.io/docs")
        Track();
    }

    getReimaginingPage = () => {
        return <Section
            filpChildsOnMobile={true}
            title={<div style={title}> Reimagining <span style={Styles.highlight}>Governance</span></div>}
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
            title={<div style={title}> Make your community <span style={Styles.highlight}>thrive</span></div>}
            child1={
                <img
                    style={featuredImage}
                    src={process.env.PUBLIC_URL + '/assets/community.png'}
                />
            }
            child2={
                <div>
                    <p>What does it meat to express your will...  <span style={Styles.highlight}>anytime, anywhere!</span></p>
                    <p>We can make governance a conversation.</p>
                    <p>Enable  frictionless participation on your community.</p>
                    <p>Let us know what you need</p>
                    <div style={Styles.button}>
                        Request invitation to join the Beta
                    </div>
                </div>
            }
        />
    }

    getUniversaly = () => {
        return <Section
            filpChildsOnMobile={true}
            title={<div style={title}> <span style={Styles.highlight}>univesally verifiable</span> Voting system </div>}

            child1={
                <div>
                    <p> The most critical elections today still relay on an envelop to guarantee its integrity. </ p>
                    <p>Vocdoni gives cryptographic guarantees and make voting trully digital.</p>

                    <p> Powered by <span style={Styles.highlight}>Vocdoni Open Stack</span>, any third party can verifiy the integrity of the system</p>
                    <p>Don't trust us<span style={Styles.highlight}> TRUST THE MATH </span></p>
                    <div style={Styles.button} onClick={(e) => this.gotoDocs()}>
                        See technical specifications
                    </div>
                </div>
            }

            child2={
                <img
                    style={featuredImage}
                    src={process.env.PUBLIC_URL + '/assets/universallyVerifiable.png'}
                />

            }
        />
    }


    getBiometricPage = () => {
        return <Section
            title={<div style={title}> <span style={Styles.highlight}>Biometric verification</span> with ease </div>}

            child1={
                <img
                    style={featuredImage}
                    src={process.env.PUBLIC_URL + '/assets/authentication.png'}
                />
            }

            child2={
                <div key='child3'>
                    <p>Vocdoni integrates with the best existing <span style={Styles.highlight}>BIOMETRIC VERIFICATION</span> solutions, so you can  ensure that the participants in your organization are who you think they are.</p>

                    <p>No need for it?  Or you want to use your own authentication mechanisms?</p>
                    <p>You can always use your own infrastructure.</p>
                </div>
            }
        />
    }

    getMillionsPage = () => {
        return <Section
            title={<div style={title}> From few to <span style={Styles.highlight}>millions</span> </div>}
            child1={
                <div>
                    <p>Is your community is small? Or you want to power national elections?</p>
                    <p>Vocdoni, has been designed with scalability and flexibility in mind.</p>
                </div>
            }
            child2={
                <div>
                    <p>But, if you have specific needs, we’re happy to start a conversation</p>
                    <div style={Styles.button} onClick={(e) => window.open("mailto:root@vocdoni.io")}>
                        Get in touch
                    </div>
                </div>
            }
        />
    }

    onPageChange = (number) => {
        this.setState({ currentPage: number });
    };

    getButtons = () => {
        return [
            <div key="App" style={Styles.highlight}>App</div>,
            <div key="Open Stack" onClick={(e) => this.gotoDocs()}> Open Stack</div>,
        ]
    }

    render() {

        return <div>
            <Navbar>
                {this.getButtons()}
            </Navbar>
            <Pages
                onPageChange={this.onPageChange}>

                {this.getReimaginingPage()}
                {this.getCommunityPage()}
                {this.getUniversaly()}
                {this.getBiometricPage()}
                {this.getMillionsPage()}

            </Pages>
            <Background />
        </div>
    }
}