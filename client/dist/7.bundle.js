(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./client/src/components/TutorRegistration.jsx":
/*!*****************************************************!*\
  !*** ./client/src/components/TutorRegistration.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TutorRegistration = function (_React$Component) {\n    _inherits(TutorRegistration, _React$Component);\n\n    function TutorRegistration(props) {\n        _classCallCheck(this, TutorRegistration);\n\n        var _this = _possibleConstructorReturn(this, (TutorRegistration.__proto__ || Object.getPrototypeOf(TutorRegistration)).call(this, props));\n\n        _this.state = {\n            tests: [{ test: 'DAT', test_id: '1' }, { test: 'LSAT', test_id: '2' }, { test: 'SAT', test_id: '3' }, { test: 'GRE', test_id: '4' }, { test: 'GMAT', test_id: '5' }, { test: 'HR TA', test_id: '6' }],\n            test: '',\n            selectedTests: [],\n            bio: '',\n            rate: '',\n            form: {}\n        };\n        _this.handleChange = _this.handleChange.bind(_this);\n        _this.handleSubmit = _this.handleSubmit.bind(_this);\n        _this.handleCheck = _this.handleCheck.bind(_this);\n        return _this;\n    }\n\n    _createClass(TutorRegistration, [{\n        key: 'handleCheck',\n        value: function handleCheck(e) {\n            var _this2 = this;\n\n            console.log(\"lets check props : \", this.props);\n            var array = this.state.selectedTests.slice();\n            if (array.indexOf(e.target.value) === -1) {\n                this.setState({\n                    selectedTests: [].concat(_toConsumableArray(this.state.selectedTests), [e.target.value])\n                }, function () {\n                    return console.log(_this2.state.selectedTests);\n                });\n            } else {\n\n                var idx = array.indexOf(e.target.value);\n                console.log('idx', idx);\n                array.splice(idx, 1);\n                this.setState({\n                    selectedTests: array\n                }, function () {\n                    return console.log(_this2.state.selectedTests);\n                });\n            }\n        }\n    }, {\n        key: 'handleChange',\n        value: function handleChange(event) {\n            var _this3 = this;\n\n            this.setState(_defineProperty({}, event.target.name, event.target.value), function () {\n                console.log('We just updated : ', _this3.state.bio, ' and ', _this3.state.rate);\n            });\n        }\n    }, {\n        key: 'handleSubmit',\n        value: function handleSubmit(event) {\n            var _this4 = this;\n\n            event.preventDefault();\n            var testsArray = [];\n            this.state.selectedTests.forEach(function (test_id) {\n                testsArray.push({ tutor_id: _this4.props.id,\n                    test_id: test_id });\n            });\n\n            var form = {\n                tests: testsArray,\n                bio: this.state.bio,\n                rate: Number(this.state.rate),\n                id: this.props.id\n            };\n            console.log('form', form);\n            _axios2.default.post('/tutors/' + this.props.id, form).then(function () {\n                return console.log('Updated and registered as tutor!');\n            }).catch(function (err) {\n                return console.error(err);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this5 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'tutor-registration' },\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'Tutor Registration'\n                ),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement(\n                    _reactBootstrap.FormGroup,\n                    { controlId: 'formControlsTextarea' },\n                    _react2.default.createElement(\n                        _reactBootstrap.ControlLabel,\n                        null,\n                        'Bio'\n                    ),\n                    _react2.default.createElement(_reactBootstrap.FormControl, { maxLength: '255', componentClass: 'textarea', placeholder: 'Enter text (Max: 255 characters)', name: 'bio', value: this.state.bio, onChange: this.handleChange })\n                ),\n                _react2.default.createElement(\n                    _reactBootstrap.FormGroup,\n                    { controlId: 'formControlsTextarea' },\n                    _react2.default.createElement(\n                        _reactBootstrap.ControlLabel,\n                        null,\n                        'Rate: (hourly)'\n                    ),\n                    _react2.default.createElement(_reactBootstrap.FormControl, {\n                        type: 'number',\n                        placeholder: '$$$',\n                        name: 'rate', value: this.state.rate, onChange: this.handleChange\n                    })\n                ),\n                _react2.default.createElement(\n                    _reactBootstrap.FormGroup,\n                    null,\n                    this.state.tests.map(function (test, i) {\n                        return _react2.default.createElement(\n                            _reactBootstrap.Checkbox,\n                            { onChange: _this5.handleCheck, inline: true, key: i, value: test.test_id },\n                            test.test\n                        );\n                    })\n                ),\n                _react2.default.createElement(\n                    _reactBootstrap.Button,\n                    { bsStyle: 'success', type: 'submit', onClick: this.handleSubmit },\n                    'Submit'\n                )\n            );\n        }\n    }]);\n\n    return TutorRegistration;\n}(_react2.default.Component);\n\nexports.default = TutorRegistration;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvVHV0b3JSZWdpc3RyYXRpb24uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9UdXRvclJlZ2lzdHJhdGlvbi5qc3g/YmJkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7Rm9ybUdyb3VwICwgQ29udHJvbExhYmVsLCBGb3JtQ29udHJvbCwgQ2hlY2tib3gsIFJhZGlvLCBGaWVsZEdyb3VwLCBCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNsYXNzIFR1dG9yUmVnaXN0cmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRlc3RzOiBbXG4gICAgICAgICAgICAgICAge3Rlc3Q6J0RBVCcsIHRlc3RfaWQ6ICcxJ30sXG4gICAgICAgICAgICAgICAge3Rlc3Q6J0xTQVQnLCB0ZXN0X2lkOiAnMid9LFxuICAgICAgICAgICAgICAgIHt0ZXN0OidTQVQnLCB0ZXN0X2lkOiAnMyd9LFxuICAgICAgICAgICAgICAgIHt0ZXN0OidHUkUnLCB0ZXN0X2lkOiAnNCd9LFxuICAgICAgICAgICAgICAgIHt0ZXN0OidHTUFUJywgdGVzdF9pZDogJzUnfSxcbiAgICAgICAgICAgICAgICB7dGVzdDonSFIgVEEnLCB0ZXN0X2lkOiAnNid9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGVzdDogJycsXG4gICAgICAgICAgICBzZWxlY3RlZFRlc3RzIDogW10sXG4gICAgICAgICAgICBiaW86ICcnLFxuICAgICAgICAgICAgcmF0ZTogJycsXG4gICAgICAgICAgICBmb3JtOiB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGVjayA9IHRoaXMuaGFuZGxlQ2hlY2suYmluZCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlQ2hlY2soZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxldHMgY2hlY2sgcHJvcHMgOiBcIiAsIHRoaXMucHJvcHMpO1xuICAgICAgICB2YXIgYXJyYXkgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGVzdHMuc2xpY2UoKVxuICAgICAgICBpZihhcnJheS5pbmRleE9mKGUudGFyZ2V0LnZhbHVlKSA9PT0gLTEpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUZXN0cyA6IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkVGVzdHMsIGUudGFyZ2V0LnZhbHVlXVxuICAgICAgICAgICAgfSwgKCk9PmNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2VsZWN0ZWRUZXN0cykpXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGlkeCA9IGFycmF5LmluZGV4T2YoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWR4JywgaWR4KVxuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGlkeCwxKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUZXN0cyA6IGFycmF5XG4gICAgICAgICAgICB9LCAoKT0+Y29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWxlY3RlZFRlc3RzKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIFxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSwoKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dlIGp1c3QgdXBkYXRlZCA6ICcsIHRoaXMuc3RhdGUuYmlvLCcgYW5kICcsIHRoaXMuc3RhdGUucmF0ZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIHZhciB0ZXN0c0FycmF5ID0gW107XG4gICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRUZXN0cy5mb3JFYWNoKCh0ZXN0X2lkKT0+e1xuICAgICAgICAgICAgICAgIHRlc3RzQXJyYXkucHVzaCh7dHV0b3JfaWQgOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICAgICAgICAgICAgICB0ZXN0X2lkIDogdGVzdF9pZH0pXG4gICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgdmFyIGZvcm0gPSB7XG4gICAgICAgICAgICAgICAgdGVzdHM6IHRlc3RzQXJyYXksXG4gICAgICAgICAgICAgICAgYmlvOiB0aGlzLnN0YXRlLmJpbyxcbiAgICAgICAgICAgICAgICByYXRlOiBOdW1iZXIodGhpcy5zdGF0ZS5yYXRlKSxcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0nLCBmb3JtKVxuICAgICAgICAgICAgYXhpb3MucG9zdChgL3R1dG9ycy8ke3RoaXMucHJvcHMuaWR9YCxmb3JtKVxuICAgICAgICAgICAgICAgICAudGhlbigoKT0+Y29uc29sZS5sb2coJ1VwZGF0ZWQgYW5kIHJlZ2lzdGVyZWQgYXMgdHV0b3IhJykpXG4gICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+Y29uc29sZS5lcnJvcihlcnIpKVxuICAgICAgICBcbiAgICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHV0b3ItcmVnaXN0cmF0aW9uJz5cbiAgICAgICAgICAgICAgICA8aDE+VHV0b3IgUmVnaXN0cmF0aW9uPC9oMT5cbiAgICAgICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgICAgICAgXG5cbiAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Db250cm9sc1RleHRhcmVhXCI+XG4gICAgICA8Q29udHJvbExhYmVsPkJpbzwvQ29udHJvbExhYmVsPlxuICAgICAgPEZvcm1Db250cm9sICBtYXhMZW5ndGg9ICcyNTUnIGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRleHQgKE1heDogMjU1IGNoYXJhY3RlcnMpXCIgbmFtZT0nYmlvJyB2YWx1ZT17dGhpcy5zdGF0ZS5iaW99IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgICAgPEZvcm1Hcm91cCBjb250cm9sSWQ9XCJmb3JtQ29udHJvbHNUZXh0YXJlYVwiPlxuICAgICAgPENvbnRyb2xMYWJlbD5SYXRlOiAoaG91cmx5KTwvQ29udHJvbExhYmVsPlxuICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiQkJFwiXG4gICAgICAgICAgICBuYW1lPSdyYXRlJyB2YWx1ZT17dGhpcy5zdGF0ZS5yYXRlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICBcblxuICAgIFxuICAgIDxGb3JtR3JvdXA+XG4gICAge3RoaXMuc3RhdGUudGVzdHMubWFwKCh0ZXN0LGkpID0+IHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPENoZWNrYm94IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoZWNrfSBpbmxpbmUga2V5PXtpfSB2YWx1ZT17dGVzdC50ZXN0X2lkfT57dGVzdC50ZXN0fTwvQ2hlY2tib3g+XG4gICAgICAgIClcbiAgICB9KX1cbiAgICAgIFxuICAgIDwvRm9ybUdyb3VwPlxuICAgIDxCdXR0b24gYnNTdHlsZT1cInN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUdXRvclJlZ2lzdHJhdGlvbjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWlCQTtBQUNBO0FBQ0E7QUFyQkE7QUFzQkE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE1QkE7QUErQkE7Ozs7QUF0R0E7QUFDQTtBQXdHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/TutorRegistration.jsx\n");

/***/ })

}]);