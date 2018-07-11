(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./client/src/components/Settings.jsx":
/*!********************************************!*\
  !*** ./client/src/components/Settings.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Settings = function (_Component) {\n  _inherits(Settings, _Component);\n\n  function Settings(props) {\n    _classCallCheck(this, Settings);\n\n    var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this, props));\n\n    _this.getAllTests = function () {\n      _axios2.default.get('/tests').then(function (_ref) {\n        var data = _ref.data;\n\n        _this.setState({\n          tests: data\n        });\n      }).catch(function (err) {\n        console.error('There was an error getting all the tests: ', err);\n      });\n    };\n\n    _this.handleCheck = function (e) {\n      var array = _this.state.selectedTests.slice();\n      if (array.indexOf(Number(e.target.value)) === -1) {\n        _this.setState({\n          selectedTests: [].concat(_toConsumableArray(_this.state.selectedTests), [e.target.value])\n        }, function () {\n          return console.log(_this.state.selectedTests);\n        });\n      } else {\n        var idx = array.indexOf(Number(e.target.value));\n        console.log('idx', idx);\n        array.splice(idx, 1);\n        _this.setState({\n          selectedTests: array\n        }, function () {\n          return console.log(_this.state.selectedTests);\n        });\n      }\n    };\n\n    _this.handleChange = function (event) {\n      _this.setState(_defineProperty({}, event.target.name, event.target.value));\n    };\n\n    _this.isPreselectedTests = function (id) {\n      if (_this.state.selectedTests.indexOf(id) !== -1) {\n        return true;\n      } else {\n        return false;\n      }\n    };\n\n    _this.handleSubmit = function (event) {\n      event.preventDefault();\n      var testsArray = [];\n      _this.state.selectedTests.forEach(function (test_id) {\n        testsArray.push({\n          tutor_id: _this.props.id,\n          test_id: test_id\n        });\n      });\n\n      var form = {\n        tests: testsArray,\n        tutorBio: _this.state.tutorBio,\n        rate: Number(_this.state.price),\n        id: _this.props.id,\n        userBio: _this.state.bio,\n        name: _this.state.name,\n        isTutor: _this.state.isTutor\n      };\n\n      _axios2.default.post('/users/' + _this.props.id, form).then(function () {\n        _this.handleFileUpload(_this.props.id);\n      }).then(function () {\n        _this.setState({\n          selectedFile: null,\n          submitted: true\n        });\n      }).catch(function (err) {\n        return console.error(err);\n      });\n    };\n\n    _this.handleFileSelect = function (e) {\n      _this.setState({\n        selectedFile: e.target.files\n      });\n    };\n\n    _this.handleFileUpload = function (user_id) {\n      var formData = new FormData();\n      formData.append('file', _this.state.selectedFile[0]);\n      _axios2.default.post('http://ec2-34-207-66-224.compute-1.amazonaws.com:5000/photo-upload', formData, {\n        headers: {\n          'Content-Type': 'multipart/form-data',\n          crossDomain: true\n        }\n      }).then(function (_ref2) {\n        var data = _ref2.data;\n\n        var userPhoto = {\n          user_id: user_id,\n          location: data.Location\n        };\n        _axios2.default.post('/users/photo', userPhoto);\n      }).catch(function (error) {\n        return console.error('There was an error with the POST request to the server: ', error);\n      });\n    };\n\n    _this.state = {\n      tests: [],\n      test: '',\n      name: '',\n      bio: '',\n      tutorBio: '',\n      submitted: false,\n      selectedTests: [],\n      price: '',\n      isTutor: false,\n      preSelected: [],\n      photo: '',\n      selectedFile: null\n    };\n    return _this;\n  }\n\n  _createClass(Settings, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var id = this.props.id;\n\n      var info = void 0;\n      _axios2.default.get('/users/info/' + id).then(function (_ref3) {\n        var data = _ref3.data;\n\n        info = data[0];\n        _this2.setState({\n          id: info.id,\n          name: info.Name,\n          bio: info.Bio\n        });\n      }).then(function () {\n        _this2.getAllTests();\n        if (info.Tutor === 1) {\n          _this2.setState({\n            isTutor: true\n          });\n          _axios2.default.get('/tutors/' + id).then(function (_ref4) {\n            var data = _ref4.data;\n\n            info = data;\n            var preselected = [];\n            info.tests.forEach(function (test) {\n              preselected.push(test.id);\n            });\n            _this2.setState({\n              tutorBio: info.Bio,\n              price: info.Price,\n              selectedTests: preselected\n            });\n          });\n        }\n      }).then(function () {\n        return _axios2.default.get('/users/photo', {\n          params: {\n            user_id: _this2.props.id\n          }\n        });\n      }).then(function (_ref5) {\n        var data = _ref5.data;\n\n        _this2.setState({\n          photo: data[0].location\n        });\n      }).catch(function (err) {\n        console.error(\"There was an error getting the user's settings: \", err);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var conditionalDisplay = !this.state.isTutor ? _react2.default.createElement('div', null) : _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Tutor settings '\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsTextarea' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Tutor Bio'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            maxLength: '255',\n            componentClass: 'textarea',\n            placeholder: 'Enter text (Max: 255 characters)',\n            name: 'tutorBio',\n            value: this.state.tutorBio,\n            onChange: this.handleChange\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsTextarea' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Rate: (hourly)'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            type: 'number',\n            placeholder: this.state.price,\n            name: 'price',\n            value: this.state.price,\n            onChange: this.handleChange\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          null,\n          this.state.tests.map(function (test, i) {\n            return _react2.default.createElement(\n              _reactBootstrap.Checkbox,\n              {\n                onChange: _this3.handleCheck,\n                inline: true,\n                key: i,\n                value: Number(test.id),\n                checked: _this3.isPreselectedTests(test.id) ? 'checked' : undefined\n              },\n              test.Name\n            );\n          })\n        )\n      );\n\n      if (this.state.submitted) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/findTutor' });\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'settings' },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Settings'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'div',\n          { className: 'image-settings' },\n          _react2.default.createElement('img', {\n            className: 'img-circle',\n            src: this.state.photo,\n            alt: this.state.name + '\\'s profile picture'\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsTextarea' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Name'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            maxLength: '255',\n            componentClass: 'textarea',\n            placeholder: 'Enter text (Max: 255 characters)',\n            name: 'name',\n            value: this.state.name,\n            onChange: this.handleChange\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsTextarea' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Bio'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            maxLength: '255',\n            componentClass: 'textarea',\n            placeholder: 'Enter text (Max: 255 characters)',\n            name: 'bio',\n            value: this.state.bio,\n            onChange: this.handleChange\n          })\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsFile', encType: 'multipart/form-data' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Update your profile picture :'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            type: 'file',\n            name: 'photo',\n            onChange: this.handleFileSelect\n          })\n        ),\n        _react2.default.createElement(\n          'h1',\n          null,\n          '_____________'\n        ),\n        conditionalDisplay,\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactBootstrap.Button,\n          { bsStyle: 'success', type: 'submit', onClick: this.handleSubmit },\n          'Submit'\n        )\n      );\n    }\n  }]);\n\n  return Settings;\n}(_react.Component);\n\nexports.default = Settings;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9TZXR0aW5ncy5qc3g/NzRlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7XG4gIEZvcm1Hcm91cCxcbiAgQ29udHJvbExhYmVsLFxuICBGb3JtQ29udHJvbCxcbiAgQ2hlY2tib3gsXG4gIEJ1dHRvblxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGVzdHM6IFtdLFxuICAgICAgdGVzdDogJycsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGJpbzogJycsXG4gICAgICB0dXRvckJpbzogJycsXG4gICAgICBzdWJtaXR0ZWQ6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRUZXN0czogW10sXG4gICAgICBwcmljZTogJycsXG4gICAgICBpc1R1dG9yOiBmYWxzZSxcbiAgICAgIHByZVNlbGVjdGVkOiBbXSxcbiAgICAgIHBob3RvOiAnJyxcbiAgICAgIHNlbGVjdGVkRmlsZTogbnVsbFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBpbmZvO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGAvdXNlcnMvaW5mby8ke2lkfWApXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgaW5mbyA9IGRhdGFbMF07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlkOiBpbmZvLmlkLFxuICAgICAgICAgIG5hbWU6IGluZm8uTmFtZSxcbiAgICAgICAgICBiaW86IGluZm8uQmlvXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5nZXRBbGxUZXN0cygpO1xuICAgICAgICBpZiAoaW5mby5UdXRvciA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNUdXRvcjogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF4aW9zLmdldChgL3R1dG9ycy8ke2lkfWApLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBpbmZvID0gZGF0YTtcbiAgICAgICAgICAgIHZhciBwcmVzZWxlY3RlZCA9IFtdO1xuICAgICAgICAgICAgaW5mby50ZXN0cy5mb3JFYWNoKHRlc3QgPT4ge1xuICAgICAgICAgICAgICBwcmVzZWxlY3RlZC5wdXNoKHRlc3QuaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgdHV0b3JCaW86IGluZm8uQmlvLFxuICAgICAgICAgICAgICBwcmljZTogaW5mby5QcmljZSxcbiAgICAgICAgICAgICAgc2VsZWN0ZWRUZXN0czogcHJlc2VsZWN0ZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcnMvcGhvdG8nLCB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICB1c2VyX2lkOiB0aGlzLnByb3BzLmlkXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcGhvdG86IGRhdGFbMF0ubG9jYXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZ2V0dGluZyB0aGUgdXNlcidzIHNldHRpbmdzOiBcIiwgZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0QWxsVGVzdHMgPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoJy90ZXN0cycpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdGVzdHM6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBnZXR0aW5nIGFsbCB0aGUgdGVzdHM6ICcsIGVycik7XG4gICAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVDaGVjayA9IGUgPT4ge1xuICAgIHZhciBhcnJheSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUZXN0cy5zbGljZSgpO1xuICAgIGlmIChhcnJheS5pbmRleE9mKE51bWJlcihlLnRhcmdldC52YWx1ZSkpID09PSAtMSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkVGVzdHM6IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkVGVzdHMsIGUudGFyZ2V0LnZhbHVlXVxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlbGVjdGVkVGVzdHMpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaWR4ID0gYXJyYXkuaW5kZXhPZihOdW1iZXIoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdpZHgnLCBpZHgpO1xuICAgICAgYXJyYXkuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRUZXN0czogYXJyYXlcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWxlY3RlZFRlc3RzKVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgaXNQcmVzZWxlY3RlZFRlc3RzID0gaWQgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVGVzdHMuaW5kZXhPZihpZCkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdGVzdHNBcnJheSA9IFtdO1xuICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRUZXN0cy5mb3JFYWNoKHRlc3RfaWQgPT4ge1xuICAgICAgdGVzdHNBcnJheS5wdXNoKHtcbiAgICAgICAgdHV0b3JfaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgIHRlc3RfaWRcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdmFyIGZvcm0gPSB7XG4gICAgICB0ZXN0czogdGVzdHNBcnJheSxcbiAgICAgIHR1dG9yQmlvOiB0aGlzLnN0YXRlLnR1dG9yQmlvLFxuICAgICAgcmF0ZTogTnVtYmVyKHRoaXMuc3RhdGUucHJpY2UpLFxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICB1c2VyQmlvOiB0aGlzLnN0YXRlLmJpbyxcbiAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgIGlzVHV0b3I6IHRoaXMuc3RhdGUuaXNUdXRvclxuICAgIH07XG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QoYC91c2Vycy8ke3RoaXMucHJvcHMuaWR9YCwgZm9ybSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWxlVXBsb2FkKHRoaXMucHJvcHMuaWQpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2VsZWN0ZWRGaWxlOiBudWxsLFxuICAgICAgICAgIHN1Ym1pdHRlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH07XG5cbiAgaGFuZGxlRmlsZVNlbGVjdCA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWRGaWxlOiBlLnRhcmdldC5maWxlc1xuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUZpbGVVcGxvYWQgPSB1c2VyX2lkID0+IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIHRoaXMuc3RhdGUuc2VsZWN0ZWRGaWxlWzBdKTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoXG4gICAgICAgICdodHRwOi8vZWMyLTM0LTIwNy02Ni0yMjQuY29tcHV0ZS0xLmFtYXpvbmF3cy5jb206NTAwMC9waG90by11cGxvYWQnLFxuICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGxldCB1c2VyUGhvdG8gPSB7XG4gICAgICAgICAgdXNlcl9pZCxcbiAgICAgICAgICBsb2NhdGlvbjogZGF0YS5Mb2NhdGlvblxuICAgICAgICB9O1xuICAgICAgICBheGlvcy5wb3N0KCcvdXNlcnMvcGhvdG8nLCB1c2VyUGhvdG8pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3Igd2l0aCB0aGUgUE9TVCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXI6ICcsXG4gICAgICAgICAgZXJyb3JcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbmRpdGlvbmFsRGlzcGxheSA9ICF0aGlzLnN0YXRlLmlzVHV0b3IgPyAoXG4gICAgICA8ZGl2IC8+XG4gICAgKSA6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5UdXRvciBzZXR0aW5ncyA8L2gyPlxuXG4gICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzVGV4dGFyZWFcIj5cbiAgICAgICAgICA8Q29udHJvbExhYmVsPlR1dG9yIEJpbzwvQ29udHJvbExhYmVsPlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMjU1XCJcbiAgICAgICAgICAgIGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0ZXh0IChNYXg6IDI1NSBjaGFyYWN0ZXJzKVwiXG4gICAgICAgICAgICBuYW1lPVwidHV0b3JCaW9cIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudHV0b3JCaW99XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgPEZvcm1Hcm91cCBjb250cm9sSWQ9XCJmb3JtQ29udHJvbHNUZXh0YXJlYVwiPlxuICAgICAgICAgIDxDb250cm9sTGFiZWw+UmF0ZTogKGhvdXJseSk8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMuc3RhdGUucHJpY2V9XG4gICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJpY2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoZWNrfVxuICAgICAgICAgICAgICAgIGlubGluZVxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17TnVtYmVyKHRlc3QuaWQpfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgdGhpcy5pc1ByZXNlbGVjdGVkVGVzdHModGVzdC5pZCkgPyAnY2hlY2tlZCcgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGVzdC5OYW1lfVxuICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc3VibWl0dGVkKSB7XG4gICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL2ZpbmRUdXRvclwiIC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzXCI+XG4gICAgICAgIDxoMT5TZXR0aW5nczwvaDE+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXNldHRpbmdzXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWNpcmNsZVwiXG4gICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUucGhvdG99XG4gICAgICAgICAgICBhbHQ9e2Ake3RoaXMuc3RhdGUubmFtZX0ncyBwcm9maWxlIHBpY3R1cmVgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzVGV4dGFyZWFcIj5cbiAgICAgICAgICA8Q29udHJvbExhYmVsPk5hbWU8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIG1heExlbmd0aD1cIjI1NVwiXG4gICAgICAgICAgICBjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGV4dCAoTWF4OiAyNTUgY2hhcmFjdGVycylcIlxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Db250cm9sc1RleHRhcmVhXCI+XG4gICAgICAgICAgPENvbnRyb2xMYWJlbD5CaW88L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIG1heExlbmd0aD1cIjI1NVwiXG4gICAgICAgICAgICBjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGV4dCAoTWF4OiAyNTUgY2hhcmFjdGVycylcIlxuICAgICAgICAgICAgbmFtZT1cImJpb1wiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iaW99XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzRmlsZVwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICAgICAgPENvbnRyb2xMYWJlbD5VcGRhdGUgeW91ciBwcm9maWxlIHBpY3R1cmUgOjwvQ29udHJvbExhYmVsPlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgbmFtZT1cInBob3RvXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbGVTZWxlY3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgPGgxPl9fX19fX19fX19fX188L2gxPlxuXG4gICAgICAgIHtjb25kaXRpb25hbERpc3BsYXl9XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8QnV0dG9uIGJzU3R5bGU9XCJzdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFNQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQXFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBaEZBO0FBa0ZBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBdEdBO0FBd0dBO0FBR0E7QUFDQTtBQTVHQTtBQThHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBIQTtBQXNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXRKQTtBQXdKQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBNUpBO0FBOEpBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUF2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUZBO0FBZ0JBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBOzs7QUF3SEE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBRkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFGQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFUQTtBQVlBO0FBZkE7QUExQkE7QUFDQTtBQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBRkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUZBO0FBWUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakRBO0FBc0RBOzs7O0FBeFNBO0FBQ0E7QUEwU0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Settings.jsx\n");

/***/ })

}]);