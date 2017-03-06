import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Card extends Component {
    constructor () {
        super(...arguments);
    }

    render () {
        const item = this.props.item;

        return (
            <li className={("card " + this.props.selected)}>
                <div className="card-top">
                    <h1>{item.index}. {item.title}</h1>
                    <br/>
                    <a className={("state " + this.props.completed)}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/tick-big@2x.png"/>
                    </a>
                </div>
                <div className="bottom">
                    <span/>
                    <div onClick={this.props.onCompleted} data={item.index} className={(this.props.completed + " button ")}>Let's Go</div>
                </div>
            </li>
        );
    }
}

export default (Card);
