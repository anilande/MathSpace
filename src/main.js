import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Carousel from './components/Carousel';
import data from './data/data';

class MathSpace extends Component {

    constructor () {
        super(...arguments);

        this.data = data;

        this.state = {
            itemsList: this.data.subtopics,
            title: this.data.topic.title
        };
    }

    render () {
        return (
            <div className="app-page">
                <header>
                    <div className="fleft hamberger">
                        <hr/> <hr/> <hr/>
                    </div>
                    <div className="title">{this.state.title}</div>
                    <div className="fright profile"/>
                </header>
                <Carousel itemsList={this.state.itemsList}/>
                <footer className="footer">
                    <div className="fleft left">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/tick@2x.png"/>
                    </div>
                    <div className="fleft center">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/piechart@2x.png"/>
                    </div>
                    <div className="fright right">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/linegraph@2x.png"/>
                    </div>
                </footer>
            </div>
        );
    }
}

ReactDom.render(<MathSpace />, document.getElementById('appContainer'));

export default (MathSpace);
