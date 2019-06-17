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
    paddingBottom: 40,
    lineHeight: "1.2em"
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
        Track("Docs")
        window.open("http://vocdoni.io/docs")
    }

    gotoForm() {
        Track("Form")
        window.open("https://xavi306763.typeform.com/to/eyvvuN")
    }

    getReimaginingPage = () => {
        return <Section
            filpChildsOnMobile={true}
            title={<div style={title}> Reimagining  <span style={Styles.highlight}>governance</span></div>}
            child1={
                <div>

                    <p>Up until today, voting and therefore participation, have been constrained by the physicality of how we cast our vote.</p>
                    <p>Vocdoni provides the necessary tools for your organization to reinvent what governance is.</p>
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
                    <p>What does it mean to express your ideas, your will, your needs... <span style={Styles.highlight}>anytime, anywhere!</span></p>
                    <p>Your organization can make governance a conversation, let's enable frictionless participation!</p>
                    <div style={Styles.button} onClick={() => this.gotoForm()}>
                        Request invitation to join the  <span style={Styles.highlight}>Beta</span>
                    </div>
                </div>
            }
        />
    }

    getUniversaly = () => {
        return <Section
            filpChildsOnMobile={true}
            title={<div style={title}> <span style={Styles.highlight}>universally verifiable</span> Voting system </div>}

            child1={
                <div>
                    <p> The most critical elections today still rely on an envelop to guarantee its integrity. </ p>
                    <p>Powered by Vocdoni <span style={Styles.highlight}> Open Stack</span>, and by using high-end cryptography, anyone can verify the integrity of the system allowing voting to become truly digital.</p>
                    <p>Don't trust us<span style={Styles.highlight}> TRUST THE MATH </span></p>
                    <div style={Styles.button} onClick={(e) => this.gotoDocs()}>
                        Go to Vocdoni <span style={Styles.highlight}>Open Stack</span> docs
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
            title={<div style={title}>An <span style={Styles.highlight}> authentic </span> user base </div>}

            child1={
                <img
                    style={featuredImage}
                    src={process.env.PUBLIC_URL + '/assets/authentication.png'}
                />
            }

            child2={
                <div key='child3'>
                    <p>Finely tune who can participate in each process. Request the user data that is meaningful to your organization.</p>
                    <p>Vocdoni integrates with the best <span style={Styles.highlight}>BIOMETRIC VERIFICATION</span> and <span style={Styles.highlight}>PAYMENT</span> solutions and provides tools to finely manage your user database, so you can ensure that the participants in your organization are who should be.</p>
                </div>
            }
        />
    }

    getPrivacyPage = () => {
        return <Section
            title={<div style={title}><span style={Styles.highlight}>Data protected </span> from  the heart</div>}
            child1={
                <div>
                    <p>Vocdoni is a privacy-centric project, where every user is in full control of the data they share and each organization is the full owner their <span style={Styles.highlight}>GDPR compliant</span>  secure database</p>

                </div>
            }
            child2={
                <div>
                    <p>Our business model is not around vendor lock-in so you can always migrate your data or use your own infrastructure.</p>
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
                {this.getPrivacyPage()}

            </Pages>
            <Background />
        </div>
    }
}