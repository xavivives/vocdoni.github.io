import React from "react";
import ReactPageScroller from "react-page-scroller";

export default class Pages extends React.Component {
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

    render() {

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
                {this.props.children}
            </ReactPageScroller>
        </div>
    }
}