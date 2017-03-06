import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Card from './Card';

const NAV_CAROUSEL_ITEM_WIDTH = 65;

class Carousel extends Component {
    constructor () {
        super(...arguments);

        this.data = this.props.itemsList;

        this.state = {
            itemsList: this.data || [],
            selected: 0
        };

        this.navCarouselItemClick = this.navCarouselItemClick.bind(this);
        this.cardCompleted = this.cardCompleted.bind(this);
        this.carouselLeft  = this.carouselLeft.bind(this);
        this.carouselRight = this.carouselRight.bind(this);
        this.navLeft  = this.navLeft.bind(this);
        this.navRight = this.navRight.bind(this);
        this.navigate = this.navigate.bind(this);

        this.page = 0;
    }

    componentDidMount(){
        const
            length = this.props.itemsList.length + 1,
            children = [].slice.call(this.carousel.children),
            itemWidth = (100 / length),
            itemHeight = window.innerHeight;

        this.carousel.style.width = (length * 100) + '%';
        children.forEach((childNode) => {
            childNode.style.width = "calc(" + itemWidth + '% - 20px)';
            childNode.style.height = (itemHeight - 100)+ 'px';
        });

        this.navCarousel.style.width = (length * NAV_CAROUSEL_ITEM_WIDTH) + 'px';

        this.itemWidth = itemWidth;
    }

    navCarouselItemClick(e) {
        this.page = parseInt(e.currentTarget.innerText, 10) - 1;
        this.navigate();
    }

    navigate() {
        this.carousel.style.left = "calc(" + ((this.page * 100) - 10) * -1 + "%" + " - 20px)";
        this.setState({selected: this.page});
    }
    cardCompleted(e) {
        const index = parseInt(e.currentTarget.getAttribute('data'), 10) - 1;

        this.data[index].completed = true;
        this.setState({selected: index});
    }
    carouselLeft(e){
        this.page--;
        this.navigate();
        if (this.page <= 0) {
            e.currentTarget.style.display = 'none';
        }
        else {
            e.currentTarget.style.display = '';
        }
    }
    carouselRight(e){
        this.page++;
        this.navigate();
        if (this.page >= (this.state.itemsList.length -1)) {
            e.currentTarget.style.display = 'none';
        }
        else {
            e.currentTarget.style.display = '';
        }
    }

    navLeft(e){
        this.navCarousel.style.left = (this.navCarousel.offsetLeft - NAV_CAROUSEL_ITEM_WIDTH) * -1 + "px";
        if (this.navCarousel.offsetLeft === 0) {
            e.currentTarget.style.display = 'none';
        }
        else {
            e.currentTarget.style.display = '';
        }
    }
    navRight(e){
        this.navCarousel.style.left = (this.navCarousel.offsetLeft + NAV_CAROUSEL_ITEM_WIDTH) * -1 + "px";
        if (this.navCarousel.offsetLeft >= (this.state.itemsList.length * NAV_CAROUSEL_ITEM_WIDTH)) {
            e.currentTarget.style.display = 'none';
        }
        else {
            e.currentTarget.style.display = '';
        }
    }

    render () {
        const self = this;
        let
            cardList = [],
            navitemList = [];

        this.state.itemsList.map(function(item, index) {
            const
                selectClass = (self.state.selected === index) ? "active" : "",
                completedClass = item.completed ? "completed" : "";

            navitemList.push(<li key={index} className={("carousel-item " + selectClass + " " + completedClass)} onClick={self.navCarouselItemClick}><span className="inner">{item.index}</span></li>);
            cardList.push(<Card key={item.index} item={item} completed={completedClass} selected={selectClass} onCompleted={self.cardCompleted}/>);
        })

        return (
            <div>
                <div className="head">
                    <div className="nav-carousel"><ul className="nav" ref={(node) => { this.navCarousel = node; }}> {navitemList} </ul> </div>
                    <div className="navig">
                        <div className="navig-nav">
                            <div className="fleft left-arrow-nav" onClick={this.navLeft}/>
                            <div className="fright right-arrow-nav" onClick={this.navRight}/>
                        </div>
                    </div>
                </div>
                <div className="carousel"><ul className="cards" ref={(node) => { this.carousel = node; }}> {cardList} </ul></div>
                <div className="navig">
                    <div className="navig-nav">
                        <div className="fleft left-arrow" onClick={this.carouselLeft}/>
                        <div className="fright right-arrow" onClick={this.carouselRight}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default (Carousel);
