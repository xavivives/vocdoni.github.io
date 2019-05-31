import React from "react";
import { Pager } from "react-bootstrap";

import ReactPageScroller from "react-page-scroller";
import SectionReimagine from "./sectionReimagine";

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

        return <div className="demo-page-contain">


            <div
                style={{
                    position: "fixed",
                    zIndex:-1,
                    top: 0,
                    left: 0,
                    width: 10,//window.innerWidth,
                    height: 10, //window.innerHeight,
                    backgroundColor: "pink"
                }}>

                <ReactPageScroller
                    
                    ref={c => this._pageScroller = c}
                    pageOnChange={this.pageOnChange}
                    containerWidth={window.innerWidth * 0.9}
                    containerHeight={window.innerHeight * 0.9}>
                    <SectionReimagine color="rgba(100, 0, 0, 0.6)" />
                    <SectionReimagine color="rgba(0, 100, 0, 0.6)" />
                    <SectionReimagine color="rgba(0, 0, 100, 0.6)" />
                    <SectionReimagine color="rgba(0, 100, 100, 0.6)" goToPage={this.goToPage} />
                    <SectionReimagine color="rgba(0, 0, 0, 0.6)" />
                </ReactPageScroller>
            </div>



            <Pager className="pagination-additional-class" bsSize="large">
                {pagesNumbers}
            </Pager>
        </div >
    }
}