/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Carousel = __webpack_require__(3);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _data = __webpack_require__(5);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MathSpace = function (_Component) {
	    _inherits(MathSpace, _Component);
	
	    function MathSpace() {
	        _classCallCheck(this, MathSpace);
	
	        var _this = _possibleConstructorReturn(this, (MathSpace.__proto__ || Object.getPrototypeOf(MathSpace)).apply(this, arguments));
	
	        _this.data = _data2.default;
	
	        _this.state = {
	            itemsList: _this.data.subtopics,
	            title: _this.data.topic.title
	        };
	        return _this;
	    }
	
	    _createClass(MathSpace, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'app-page' },
	                _react2.default.createElement(
	                    'header',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'fleft hamberger' },
	                        _react2.default.createElement('hr', null),
	                        ' ',
	                        _react2.default.createElement('hr', null),
	                        ' ',
	                        _react2.default.createElement('hr', null)
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'title' },
	                        this.state.title
	                    ),
	                    _react2.default.createElement('div', { className: 'fright profile' })
	                ),
	                _react2.default.createElement(_Carousel2.default, { itemsList: this.state.itemsList }),
	                _react2.default.createElement(
	                    'footer',
	                    { className: 'footer' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'fleft left' },
	                        _react2.default.createElement('img', { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/tick@2x.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'fleft center' },
	                        _react2.default.createElement('img', { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/piechart@2x.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'fright right' },
	                        _react2.default.createElement('img', { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/linegraph@2x.png' })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return MathSpace;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(MathSpace, null), document.getElementById('appContainer'));
	
	exports.default = MathSpace;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Card = __webpack_require__(4);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NAV_CAROUSEL_ITEM_WIDTH = 65;
	
	var Carousel = function (_Component) {
	    _inherits(Carousel, _Component);
	
	    function Carousel() {
	        _classCallCheck(this, Carousel);
	
	        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
	
	        _this.data = _this.props.itemsList;
	
	        _this.state = {
	            itemsList: _this.data || [],
	            selected: 0
	        };
	
	        _this.navCarouselItemClick = _this.navCarouselItemClick.bind(_this);
	        _this.cardCompleted = _this.cardCompleted.bind(_this);
	        _this.carouselLeft = _this.carouselLeft.bind(_this);
	        _this.carouselRight = _this.carouselRight.bind(_this);
	        _this.navLeft = _this.navLeft.bind(_this);
	        _this.navRight = _this.navRight.bind(_this);
	        _this.navigate = _this.navigate.bind(_this);
	
	        _this.page = 0;
	        return _this;
	    }
	
	    _createClass(Carousel, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var length = this.props.itemsList.length + 1,
	                children = [].slice.call(this.carousel.children),
	                itemWidth = 100 / length,
	                itemHeight = window.innerHeight;
	
	            this.carousel.style.width = length * 100 + '%';
	            children.forEach(function (childNode) {
	                childNode.style.width = "calc(" + itemWidth + '% - 20px)';
	                childNode.style.height = itemHeight - 100 + 'px';
	            });
	
	            this.navCarousel.style.width = length * NAV_CAROUSEL_ITEM_WIDTH + 'px';
	
	            this.itemWidth = itemWidth;
	        }
	    }, {
	        key: 'navCarouselItemClick',
	        value: function navCarouselItemClick(e) {
	            this.page = parseInt(e.currentTarget.innerText, 10) - 1;
	            this.navigate();
	        }
	    }, {
	        key: 'navigate',
	        value: function navigate() {
	            this.carousel.style.left = "calc(" + (this.page * 100 - 10) * -1 + "%" + " - 20px)";
	            this.setState({ selected: this.page });
	        }
	    }, {
	        key: 'cardCompleted',
	        value: function cardCompleted(e) {
	            var index = parseInt(e.currentTarget.getAttribute('data'), 10) - 1;
	
	            this.data[index].completed = true;
	            this.setState({ selected: index });
	        }
	    }, {
	        key: 'carouselLeft',
	        value: function carouselLeft(e) {
	            this.page--;
	            this.navigate();
	            if (this.page <= 0) {
	                e.currentTarget.style.display = 'none';
	            } else {
	                e.currentTarget.style.display = '';
	            }
	        }
	    }, {
	        key: 'carouselRight',
	        value: function carouselRight(e) {
	            this.page++;
	            this.navigate();
	            if (this.page >= this.state.itemsList.length - 1) {
	                e.currentTarget.style.display = 'none';
	            } else {
	                e.currentTarget.style.display = '';
	            }
	        }
	    }, {
	        key: 'navLeft',
	        value: function navLeft(e) {
	            this.navCarousel.style.left = (this.navCarousel.offsetLeft - NAV_CAROUSEL_ITEM_WIDTH) * -1 + "px";
	            if (this.navCarousel.offsetLeft === 0) {
	                e.currentTarget.style.display = 'none';
	            } else {
	                e.currentTarget.style.display = '';
	            }
	        }
	    }, {
	        key: 'navRight',
	        value: function navRight(e) {
	            this.navCarousel.style.left = (this.navCarousel.offsetLeft + NAV_CAROUSEL_ITEM_WIDTH) * -1 + "px";
	            if (this.navCarousel.offsetLeft >= this.state.itemsList.length * NAV_CAROUSEL_ITEM_WIDTH) {
	                e.currentTarget.style.display = 'none';
	            } else {
	                e.currentTarget.style.display = '';
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var self = this;
	            var cardList = [],
	                navitemList = [];
	
	            this.state.itemsList.map(function (item, index) {
	                var selectClass = self.state.selected === index ? "active" : "",
	                    completedClass = item.completed ? "completed" : "";
	
	                navitemList.push(_react2.default.createElement(
	                    'li',
	                    { key: index, className: "carousel-item " + selectClass + " " + completedClass, onClick: self.navCarouselItemClick },
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'inner' },
	                        item.index
	                    )
	                ));
	                cardList.push(_react2.default.createElement(_Card2.default, { key: item.index, item: item, completed: completedClass, selected: selectClass, onCompleted: self.cardCompleted }));
	            });
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'head' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'nav-carousel' },
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'nav', ref: function ref(node) {
	                                    _this2.navCarousel = node;
	                                } },
	                            ' ',
	                            navitemList,
	                            ' '
	                        ),
	                        ' '
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'navig' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'navig-nav' },
	                            _react2.default.createElement('div', { className: 'fleft left-arrow-nav', onClick: this.navLeft }),
	                            _react2.default.createElement('div', { className: 'fright right-arrow-nav', onClick: this.navRight })
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'carousel' },
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'cards', ref: function ref(node) {
	                                _this2.carousel = node;
	                            } },
	                        ' ',
	                        cardList,
	                        ' '
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'navig' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'navig-nav' },
	                        _react2.default.createElement('div', { className: 'fleft left-arrow', onClick: this.carouselLeft }),
	                        _react2.default.createElement('div', { className: 'fright right-arrow', onClick: this.carouselRight })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Carousel;
	}(_react.Component);
	
	exports.default = Carousel;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Card = function (_Component) {
	    _inherits(Card, _Component);
	
	    function Card() {
	        _classCallCheck(this, Card);
	
	        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	    }
	
	    _createClass(Card, [{
	        key: 'render',
	        value: function render() {
	            var item = this.props.item;
	
	            return _react2.default.createElement(
	                'li',
	                { className: "card " + this.props.selected },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'card-top' },
	                    _react2.default.createElement(
	                        'h1',
	                        null,
	                        item.index,
	                        '. ',
	                        item.title
	                    ),
	                    _react2.default.createElement('br', null),
	                    _react2.default.createElement(
	                        'a',
	                        { className: "state " + this.props.completed },
	                        _react2.default.createElement('img', { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/tick-big@2x.png' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'bottom' },
	                    _react2.default.createElement('span', null),
	                    _react2.default.createElement(
	                        'div',
	                        { onClick: this.props.onCompleted, data: item.index, className: this.props.completed + " button " },
	                        'Let\'s Go'
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Card;
	}(_react.Component);
	
	exports.default = Card;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var data = {
	    topic: {
	        title: "Geometry"
	    },
	    subtopics: [{ index: 1, title: "Triangles", completed: true }, { index: 2, title: "Angle Sum", completed: true }, { index: 3, title: "Similar Triangles", completed: true }, { index: 4, title: "Congruence", completed: false }, { index: 5, title: "Enlargements", completed: false }, { index: 6, title: "Parallel Lines", completed: false }, { index: 7, title: "Pythagoras Theorem", completed: false }, { index: 8, title: "Revision", completed: false }, { index: 9, title: "Topic Test", completed: false }]
	};
	
	exports.default = data;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map