import React from "react";
import { Pager } from "react-bootstrap";

import ReactPageScroller from "react-page-scroller";
import Section from "./Section";

const title = {
    textTransform: "uppercase",
    fontSize: 40,
    fontWeight: 400,
}

export default class ScrollContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 1 };
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({ currentPage: number });
    };

    getPagesNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= 5; i++) {
            pageNumbers.push(
                <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>{i}</Pager.Item>
            )
        }

        return [...pageNumbers];
    };

    render() {

        const pagesNumbers = this.getPagesNumbers();

        return <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
        }}>
            <ReactPageScroller
                ref={c => this._pageScroller = c}
                pageOnChange={this.pageOnChange}
                containerWidth={window.innerWidth}
                containerHeight={window.innerHeight }>
                <Section>
                    <div style={title}>
                        <b>Reimagining</b>
                    </div>
                    <div style={title}>
                        Governance
                    </div>
                </Section>
                <Section> Two </Section>
                <Section> Three </Section>
                <Section goToPage={this.goToPage}> Four </Section>
            </ReactPageScroller>
        </div>
    }
}