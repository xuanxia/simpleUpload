(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-upload"] = factory();
	else
		root["react-upload"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/ImageUpload.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/BaseUpload.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__("./src/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ** 最底层组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var BaseUpload = function (_Component) {
    _inherits(BaseUpload, _Component);

    function BaseUpload(props) {
        var _this2 = this;

        _classCallCheck(this, BaseUpload);

        var _this = _possibleConstructorReturn(this, (BaseUpload.__proto__ || Object.getPrototypeOf(BaseUpload)).call(this, props));

        _this.handleDeleted = function (item) {
            console.log(item);
            _this.setState({ fileList: _this.state.fileList.filter(function (it) {
                    return item.key !== it.key;
                }) });
        };

        _this.handleSort = function (startIndex, endIndex) {

            var result = Array.from(_this.state.fileList);
            var temp = result[startIndex];

            result[startIndex] = result[endIndex];
            result[endIndex] = temp;

            _this.setState({ fileList: result });
        };

        _this.getHandles = function () {
            return {
                handleDeleted: _this.handleDeleted,
                handleSort: _this.handleSort
            };
        };

        _this.handleOnChange = function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(files) {
                var _this$props, uploadServerHost, dealResponse, getSignatureInfo, _loop, index;

                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _this$props = _this.props, uploadServerHost = _this$props.uploadServerHost, dealResponse = _this$props.dealResponse, getSignatureInfo = _this$props.getSignatureInfo;

                                _loop = function _loop(index) {
                                    var file = files[index];

                                    var imgBlobUrl = URL.createObjectURL(file);

                                    var img = document.createElement("img");

                                    img.onload = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                                        var width, height, option, signatureInfo, result;
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        width = img.width, height = img.height;
                                                        option = {
                                                            file: file,
                                                            width: width,
                                                            height: height
                                                        };
                                                        _context.next = 4;
                                                        return getSignatureInfo(option);

                                                    case 4:
                                                        signatureInfo = _context.sent;


                                                        console.log(signatureInfo);
                                                        _context.next = 8;
                                                        return (0, _utils.xhrUpload)({
                                                            file: file, uploadServerHost: uploadServerHost, signatureInfo: signatureInfo
                                                        });

                                                    case 8:
                                                        result = _context.sent;


                                                        _this.setState({
                                                            fileList: _this.state.fileList.concat([Object.assign({}, {
                                                                name: file.name,
                                                                size: file.size,
                                                                type: file.type,
                                                                webkitRelativePath: file.webkitRelativePath
                                                            }, dealResponse(result))])
                                                        });

                                                    case 10:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this2);
                                    }));
                                    img.src = imgBlobUrl;
                                };

                                for (index = 0; index < files.length; index++) {
                                    _loop(index);
                                }

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();

        _this.onResize = function (dom) {
            // TODO 校验
            _this.setState({
                fileInput: {
                    width: dom.offsetWidth,
                    height: dom.offsetHeight
                }
            });
        };

        _this.state = {

            fileList: (0, _utils.getInitFileList)(props),

            fileInput: {
                width: 0,
                height: 0
            }
        };
        return _this;
    }

    // 删除已上传文件


    // 排序


    _createClass(BaseUpload, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                multiple = _props.multiple,
                UploadedImage = _props.UploadedImage,
                UploadButton = _props.UploadButton;
            var _state = this.state,
                fileList = _state.fileList,
                fileInput = _state.fileInput;


            console.log(fileList);

            return _react2.default.createElement(
                'div',
                { className: 'simple-upload-wrapper' },
                UploadedImage && _react2.default.createElement(UploadedImage, _extends({ fileList: fileList }, this.props, { handles: this.getHandles() })),
                UploadButton ? _react2.default.createElement(
                    UploadButton,
                    { onResize: this.onResize },
                    _react2.default.createElement('input', {
                        type: 'file',
                        accept: 'image/*',
                        multiple: multiple,
                        onChange: function onChange(event) {
                            console.log(event);
                            console.log(event.target);
                            console.log(event.target.files);
                            _this3.handleOnChange(event.target.files);
                        },
                        style: {
                            width: fileInput.width,
                            height: fileInput.height,
                            opacity: 0,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 99,
                            cursor: 'pointer'
                        }
                    })
                ) : _react2.default.createElement('input', {
                    type: 'file',
                    accept: 'image/*',
                    multiple: multiple,
                    onChange: function onChange(event) {
                        _this3.handleOnChange(event.target.files);
                    }
                })
            );
        }
    }]);

    return BaseUpload;
}(_react.Component);

BaseUpload.defaultProps = {
    uploadServerHost: '', // 文件上传地址
    downloadServerHost: '', // 文件下载地址
    thumbnail: '', // 预览图后缀
    multiple: false, // 是否批量上传
    UploadedImage: null, // 已上传的图片展示
    UploadButton: null, // 上传按钮
    value: ['test/2018-12-20/21e7f9b0-0426-11e9-b976-3bc8b2c85260_400_400.jpg'], // 回显值
    dealResponse: function dealResponse(response) {
        return response;
    }, // 处理图片服务器返回值
    getSignatureInfo: function getSignatureInfo() {}
};
exports.default = BaseUpload;

/***/ }),

/***/ "./src/components/ImageUpload.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _BaseUpload = __webpack_require__("./src/components/BaseUpload.js");

var _BaseUpload2 = _interopRequireDefault(_BaseUpload);

var _defaultFunc = __webpack_require__("./src/defaultFunc/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 应用主入口
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                **/

// React Libs


var ReactUpload = function (_PureComponent) {
    _inherits(ReactUpload, _PureComponent);

    function ReactUpload() {
        _classCallCheck(this, ReactUpload);

        return _possibleConstructorReturn(this, (ReactUpload.__proto__ || Object.getPrototypeOf(ReactUpload)).apply(this, arguments));
    }

    _createClass(ReactUpload, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                dealResponse = _props.dealResponse,
                uploadServerHost = _props.uploadServerHost,
                downloadServerHost = _props.downloadServerHost,
                draggable = _props.draggable,
                getSignatureInfo = _props.getSignatureInfo;


            return _react2.default.createElement(_BaseUpload2.default, {
                multiple: true,
                uploadServerHost: uploadServerHost,
                downloadServerHost: downloadServerHost,
                UploadedImage: draggable ? _defaultFunc.DraggableUploadedImage : _defaultFunc.UploadedImage,
                UploadButton: _defaultFunc.UploadButton,
                dealResponse: dealResponse,
                getSignatureInfo: getSignatureInfo
            });
        }
    }]);

    return ReactUpload;
}(_react.PureComponent);

exports.default = ReactUpload;

/***/ }),

/***/ "./src/defaultFunc/DraggableUploadedImage.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   ** 支持拖拽排序图片展示组件
                                                                                                                                                                                                                                                                   */


var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactBeautifulDnd = __webpack_require__("react-beautiful-dnd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getListStyle = function getListStyle(isDraggingOver) {
    return {
        background: isDraggingOver ? '#fff' : '#fff',
        display: 'inline-block',
        padding: 0
    };
};

var getItemStyle = function getItemStyle(isDragging, draggableStyle) {
    return _extends({
        display: 'inline-block',
        marginRight: 8,
        position: 'relative',
        padding: 0,
        userSelect: 'none',
        background: isDragging ? '#fff' : '#fff'
    }, draggableStyle);
};

var UploadedImage = function (_Component) {
    _inherits(UploadedImage, _Component);

    function UploadedImage(props) {
        _classCallCheck(this, UploadedImage);

        var _this = _possibleConstructorReturn(this, (UploadedImage.__proto__ || Object.getPrototypeOf(UploadedImage)).call(this, props));

        _this.onDragEnd = function (result) {
            if (result.source && result.destination) {
                var handles = _this.props.handles;


                handles.handleSort(result.source.index, result.destination.index);
            }
        };

        return _this;
    }

    _createClass(UploadedImage, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                fileList = _props.fileList,
                handles = _props.handles;


            if (!fileList || !fileList.length) {
                return;
            }

            var handleDeleted = handles.handleDeleted;


            return _react2.default.createElement(
                _reactBeautifulDnd.DragDropContext,
                { onDragEnd: this.onDragEnd },
                _react2.default.createElement(
                    _reactBeautifulDnd.Droppable,
                    { droppableId: 'droppable', direction: 'horizontal' },
                    function (provided, snapshot) {
                        return _react2.default.createElement(
                            'div',
                            _extends({
                                style: getListStyle(snapshot.isDraggingOver),
                                ref: provided.innerRef
                            }, provided.droppableProps),
                            fileList.map(function (item, index) {
                                return _react2.default.createElement(
                                    _reactBeautifulDnd.Draggable,
                                    {
                                        key: item.key,
                                        draggableId: item.key,
                                        index: index,
                                        style: {
                                            display: 'inline-block',
                                            position: 'relative',
                                            marginRight: 12
                                        } },
                                    function (provided, snapshot) {
                                        return _react2.default.createElement(
                                            'div',
                                            _extends({
                                                ref: provided.innerRef
                                            }, provided.draggableProps, provided.dragHandleProps, {
                                                style: getItemStyle(snapshot.isDragging, provided.draggableProps.style)
                                            }),
                                            _react2.default.createElement('img', {
                                                width: 100,
                                                height: 100,
                                                src: '' + item.url,
                                                alt: ''
                                            }),
                                            _react2.default.createElement(
                                                'a',
                                                {
                                                    onClick: function onClick() {
                                                        handleDeleted && handleDeleted(item);
                                                    },
                                                    style: {
                                                        display: 'inline-block',
                                                        position: 'absolute',
                                                        fontSize: 12,
                                                        left: 60,
                                                        top: 5,
                                                        zIndex: 10,
                                                        color: '#fff',
                                                        background: '#e2e2e2',
                                                        padding: '2px 5px',
                                                        cursor: 'pointer'
                                                    } },
                                                '\u5220\u9664'
                                            )
                                        );
                                    }
                                );
                            })
                        );
                    }
                )
            );
        }
    }]);

    return UploadedImage;
}(_react.Component);

exports.default = UploadedImage;

/***/ }),

/***/ "./src/defaultFunc/UploadButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UploadButton = function (_Component) {
    _inherits(UploadButton, _Component);

    function UploadButton() {
        _classCallCheck(this, UploadButton);

        return _possibleConstructorReturn(this, (UploadButton.__proto__ || Object.getPrototypeOf(UploadButton)).apply(this, arguments));
    }

    _createClass(UploadButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var onResize = this.props.onResize;


            onResize(this.refs.buttonWrapper);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { ref: 'buttonWrapper', style: {
                        width: 100,
                        height: 100,
                        position: 'relative',
                        border: '1px solid #dbdbdb',
                        fontSize: 70,
                        textAlign: 'center',
                        display: 'inline-block',
                        verticalAlign: 'top',
                        color: 'rgb(128,134,139)'
                    } },
                _react2.default.createElement(
                    'span',
                    { style: { cursor: 'pointer' } },
                    '+'
                ),
                this.props.children
            );
        }
    }]);

    return UploadButton;
}(_react.Component);

exports.default = UploadButton;

/***/ }),

/***/ "./src/defaultFunc/UploadedImage.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ** 普通图片上传后展示组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var UploadedImage = function (_Component) {
    _inherits(UploadedImage, _Component);

    function UploadedImage(props) {
        _classCallCheck(this, UploadedImage);

        return _possibleConstructorReturn(this, (UploadedImage.__proto__ || Object.getPrototypeOf(UploadedImage)).call(this, props));
    }

    _createClass(UploadedImage, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                fileList = _props.fileList,
                handles = _props.handles;


            if (!fileList || !fileList.length) {
                return;
            }

            var handleDeleted = handles.handleDeleted;


            return _react2.default.createElement(
                'div',
                { style: { display: 'inline-block' } },
                fileList.map(function (item) {
                    return _react2.default.createElement(
                        'div',
                        { key: item.key, style: {
                                display: 'inline-block',
                                position: 'relative',
                                marginRight: 12
                            } },
                        _react2.default.createElement('img', {
                            width: 100,
                            height: 100,
                            src: '' + item.url,
                            alt: ''
                        }),
                        _react2.default.createElement(
                            'a',
                            {
                                onClick: function onClick() {
                                    handleDeleted && handleDeleted(item);
                                },
                                style: {
                                    display: 'inline-block',
                                    position: 'absolute',
                                    fontSize: 12,
                                    left: 60,
                                    top: 5,
                                    zIndex: 10,
                                    color: '#fff',
                                    background: '#e2e2e2',
                                    padding: '2px 5px',
                                    cursor: 'pointer'
                                } },
                            '\u5220\u9664'
                        )
                    );
                })
            );
        }
    }]);

    return UploadedImage;
}(_react.Component);

exports.default = UploadedImage;

/***/ }),

/***/ "./src/defaultFunc/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DraggableUploadedImage = exports.UploadButton = exports.UploadedImage = undefined;

var _UploadedImage = __webpack_require__("./src/defaultFunc/UploadedImage.js");

var _UploadedImage2 = _interopRequireDefault(_UploadedImage);

var _UploadButton = __webpack_require__("./src/defaultFunc/UploadButton.js");

var _UploadButton2 = _interopRequireDefault(_UploadButton);

var _DraggableUploadedImage = __webpack_require__("./src/defaultFunc/DraggableUploadedImage.js");

var _DraggableUploadedImage2 = _interopRequireDefault(_DraggableUploadedImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.UploadedImage = _UploadedImage2.default;
exports.UploadButton = _UploadButton2.default;
exports.DraggableUploadedImage = _DraggableUploadedImage2.default;

/***/ }),

/***/ "./src/utils/getInitFileList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    var value = props.value,
        downloadServerHost = props.downloadServerHost;


    if (Array.isArray(value) && value.length) {
        return value.map(function (item) {
            return {
                key: item,
                url: downloadServerHost + "/" + item,
                thumbnail: downloadServerHost + "/" + item + props.thumbnail
            };
        });
    }
    return [];
};

/***/ }),

/***/ "./src/utils/httpFetch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function (suffix, width, height, extraParam) {
    var apiServerUrl = 'https://hp.bncry.cn/util/getAliyunSignature';
    var url = apiServerUrl + '?' + ['bizName=test', 'suffix=' + suffix, 'width=' + width, 'height=' + height].join('&');

    return new Promise(function (resolve, reject) {
        fetch(url).then(function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(response) {
                var res, formData;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return response.json();

                            case 2:
                                res = _context.sent;
                                formData = res.data;


                                resolve({
                                    key: formData.dirPath,
                                    policy: formData.policy,
                                    OSSAccessKeyId: formData.OSSAccessKeyId,
                                    success_action_status: '200',
                                    callback: formData.callback,
                                    signature: formData.signature
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, undefined);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }());
    });
};

/***/ }),

/***/ "./src/utils/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getInitFileList = exports.xhrUpload = exports.httpFetch = undefined;

var _httpFetch = __webpack_require__("./src/utils/httpFetch.js");

var _httpFetch2 = _interopRequireDefault(_httpFetch);

var _xhrUpload = __webpack_require__("./src/utils/xhrUpload.js");

var _xhrUpload2 = _interopRequireDefault(_xhrUpload);

var _getInitFileList = __webpack_require__("./src/utils/getInitFileList.js");

var _getInitFileList2 = _interopRequireDefault(_getInitFileList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.httpFetch = _httpFetch2.default;
exports.xhrUpload = _xhrUpload2.default;
exports.getInitFileList = _getInitFileList2.default;

/***/ }),

/***/ "./src/utils/xhrUpload.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (option) {
    var file = option.file,
        uploadServerHost = option.uploadServerHost,
        signatureInfo = option.signatureInfo;


    return new Promise(function (resolve, reject) {

        var progressFunction = function progressFunction(evt) {
            console.log(evt);
        };

        var uploadComplete = function uploadComplete(evt) {
            if (evt && evt.target && evt.target.status === 200) {
                try {
                    resolve(JSON.parse(evt.target.response));
                } catch (e) {
                    reject(evt.target);
                }
            } else {
                reject(evt.target);
            }
        };

        var uploadFailed = function uploadFailed(evt) {
            reject(evt.target);
        };

        var form = new FormData(); // FormData 对象

        // 签名信息
        for (var key in signatureInfo) {
            form.append(key, signatureInfo[key]);
        }
        console.log(uploadServerHost);
        form.append("file", file); // 文件对象

        var xhr = new XMLHttpRequest(); // XMLHttpRequest 对象

        xhr.open("post", uploadServerHost, true); // post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
        xhr.onload = uploadComplete; // 请求完成
        xhr.onerror = uploadFailed; // 请求失败
        xhr.upload.onprogress = progressFunction; // 上传进度调用方法实现
        xhr.upload.onloadstart = function () {
            // 上传开始执行方法
            console.log('start');
        };
        xhr.send(form); // 开始上传，发送form数据
    });
};

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-beautiful-dnd":
/***/ (function(module, exports) {

module.exports = require("react-beautiful-dnd");

/***/ })

/******/ });
});