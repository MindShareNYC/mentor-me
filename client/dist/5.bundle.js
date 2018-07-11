(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./client/src/components/protected/Settings.jsx":
/*!******************************************************!*\
  !*** ./client/src/components/protected/Settings.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Settings = function (_Component) {\n  _inherits(Settings, _Component);\n\n  function Settings(props) {\n    _classCallCheck(this, Settings);\n\n    var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this, props));\n\n    _this.getAllTests = function () {\n      _axios2.default.get('/tests').then(function (_ref) {\n        var data = _ref.data;\n\n        _this.setState({\n          tests: data\n        });\n      }).catch(function (err) {\n        console.error('There was an error getting all the tests: ', err);\n      });\n    };\n\n    _this.handleCheck = function (e) {\n      var array = _this.state.selectedTests.slice();\n      if (array.indexOf(Number(e.target.value)) === -1) {\n        _this.setState({\n          selectedTests: [].concat(_toConsumableArray(_this.state.selectedTests), [e.target.value])\n        }, function () {\n          return console.log(_this.state.selectedTests);\n        });\n      } else {\n        var idx = array.indexOf(Number(e.target.value));\n        console.log('idx', idx);\n        array.splice(idx, 1);\n        _this.setState({\n          selectedTests: array\n        }, function () {\n          return console.log(_this.state.selectedTests);\n        });\n      }\n    };\n\n    _this.handleChange = function (event) {\n      _this.setState(_defineProperty({}, event.target.name, event.target.value));\n    };\n\n    _this.isPreselectedTests = function (id) {\n      if (_this.state.selectedTests.indexOf(id) !== -1) {\n        return true;\n      } else {\n        return false;\n      }\n    };\n\n    _this.handleSubmit = function (event) {\n      event.preventDefault();\n      var testsArray = [];\n      _this.state.selectedTests.forEach(function (test_id) {\n        testsArray.push({\n          tutor_id: _this.props.id,\n          test_id: test_id\n        });\n      });\n\n      var form = {\n        tests: testsArray,\n        tutorBio: _this.state.tutorBio,\n        rate: Number(_this.state.price),\n        id: _this.props.id,\n        userBio: _this.state.bio,\n        name: _this.state.name,\n        isTutor: _this.state.isTutor\n      };\n\n      _axios2.default.post('/users/' + _this.props.id, form).then(function () {\n        _this.handleFileUpload(_this.props.id);\n      }).then(function () {\n        _this.setState({\n          selectedFile: null,\n          submitted: true\n        });\n      }).catch(function (err) {\n        return console.error(err);\n      });\n    };\n\n    _this.handleFileSelect = function (e) {\n      _this.setState({\n        selectedFile: e.target.files\n      });\n    };\n\n    _this.handleFileUpload = function (user_id) {\n      var formData = new FormData();\n      formData.append('file', _this.state.selectedFile[0]);\n      _axios2.default.post('http://ec2-34-207-66-224.compute-1.amazonaws.com:5000/photo-upload', formData, {\n        headers: {\n          'Content-Type': 'multipart/form-data',\n          crossDomain: true\n        }\n      }).then(function (_ref2) {\n        var data = _ref2.data;\n\n        var userPhoto = {\n          user_id: user_id,\n          location: data.Location\n        };\n        _axios2.default.post('/users/photo', userPhoto);\n      }).catch(function (error) {\n        return console.error('There was an error with the POST request to the server: ', error);\n      });\n    };\n\n    _this.state = {\n      tests: [],\n      test: '',\n      name: '',\n      bio: '',\n      tutorBio: '',\n      submitted: false,\n      selectedTests: [],\n      price: '',\n      isTutor: false,\n      preSelected: [],\n      photo: '',\n      selectedFile: null\n    };\n    return _this;\n  }\n\n  _createClass(Settings, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var id = this.props.id;\n\n      var info = void 0;\n      _axios2.default.get('/users/info/' + id).then(function (_ref3) {\n        var data = _ref3.data;\n\n        info = data[0];\n        _this2.setState({\n          id: info.id,\n          name: info.Name,\n          bio: info.Bio\n        });\n      }).then(function () {\n        _this2.getAllTests();\n        if (info.Tutor === 1) {\n          _this2.setState({\n            isTutor: true\n          });\n          _axios2.default.get('/tutors/' + id).then(function (_ref4) {\n            var data = _ref4.data;\n\n            info = data;\n            var preselected = [];\n            info.tests.forEach(function (test) {\n              preselected.push(test.id);\n            });\n            _this2.setState({\n              tutorBio: info.Bio,\n              price: info.Price,\n              selectedTests: preselected\n            });\n          });\n        }\n      }).then(function () {\n        return _axios2.default.get('/users/photo', {\n          params: {\n            user_id: _this2.props.id\n          }\n        });\n      }).then(function (_ref5) {\n        var data = _ref5.data;\n\n        _this2.setState({\n          photo: data[0].location\n        });\n      }).catch(function (err) {\n        console.error(\"There was an error getting the user's settings: \", err);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var conditionalDisplay = !this.state.isTutor ? _react2.default.createElement('div', null) : _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Tutor settings '\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsTextarea' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Tutor Bio'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            maxLength: '255',\n            componentClass: 'textarea',\n            placeholder: 'Enter text (Max: 255 characters)',\n            name: 'tutorBio',\n            value: this.state.tutorBio,\n            onChange: this.handleChange\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsTextarea' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Rate: (hourly)'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            type: 'number',\n            placeholder: this.state.price,\n            name: 'price',\n            value: this.state.price,\n            onChange: this.handleChange\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          null,\n          this.state.tests.map(function (test, i) {\n            return _react2.default.createElement(\n              _reactBootstrap.Checkbox,\n              {\n                onChange: _this3.handleCheck,\n                inline: true,\n                key: i,\n                value: Number(test.id),\n                checked: _this3.isPreselectedTests(test.id) ? 'checked' : undefined\n              },\n              test.Name\n            );\n          })\n        )\n      );\n\n      if (this.state.submitted) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/findTutor' });\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'settings' },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Settings'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'div',\n          { className: 'image-settings' },\n          _react2.default.createElement('img', {\n            className: 'img-circle',\n            src: this.state.photo,\n            alt: this.state.name + '\\'s profile picture'\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsTextarea' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Name'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            maxLength: '255',\n            componentClass: 'textarea',\n            placeholder: 'Enter text (Max: 255 characters)',\n            name: 'name',\n            value: this.state.name,\n            onChange: this.handleChange\n          })\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsTextarea' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Bio'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            maxLength: '255',\n            componentClass: 'textarea',\n            placeholder: 'Enter text (Max: 255 characters)',\n            name: 'bio',\n            value: this.state.bio,\n            onChange: this.handleChange\n          })\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactBootstrap.FormGroup,\n          { controlId: 'formControlsFile', encType: 'multipart/form-data' },\n          _react2.default.createElement(\n            _reactBootstrap.ControlLabel,\n            null,\n            'Update your profile picture :'\n          ),\n          _react2.default.createElement(_reactBootstrap.FormControl, {\n            type: 'file',\n            name: 'photo',\n            onChange: this.handleFileSelect\n          })\n        ),\n        _react2.default.createElement(\n          'h1',\n          null,\n          '_____________'\n        ),\n        conditionalDisplay,\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactBootstrap.Button,\n          { bsStyle: 'success', type: 'submit', onClick: this.handleSubmit },\n          'Submit'\n        )\n      );\n    }\n  }]);\n\n  return Settings;\n}(_react.Component);\n\nexports.default = Settings;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvdGVjdGVkL1NldHRpbmdzLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvdGVjdGVkL1NldHRpbmdzLmpzeD84NjhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtcbiAgRm9ybUdyb3VwLFxuICBDb250cm9sTGFiZWwsXG4gIEZvcm1Db250cm9sLFxuICBDaGVja2JveCxcbiAgQnV0dG9uXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXN0czogW10sXG4gICAgICB0ZXN0OiAnJyxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgYmlvOiAnJyxcbiAgICAgIHR1dG9yQmlvOiAnJyxcbiAgICAgIHN1Ym1pdHRlZDogZmFsc2UsXG4gICAgICBzZWxlY3RlZFRlc3RzOiBbXSxcbiAgICAgIHByaWNlOiAnJyxcbiAgICAgIGlzVHV0b3I6IGZhbHNlLFxuICAgICAgcHJlU2VsZWN0ZWQ6IFtdLFxuICAgICAgcGhvdG86ICcnLFxuICAgICAgc2VsZWN0ZWRGaWxlOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGluZm87XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYC91c2Vycy9pbmZvLyR7aWR9YClcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBpbmZvID0gZGF0YVswXTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaWQ6IGluZm8uaWQsXG4gICAgICAgICAgbmFtZTogaW5mby5OYW1lLFxuICAgICAgICAgIGJpbzogaW5mby5CaW9cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmdldEFsbFRlc3RzKCk7XG4gICAgICAgIGlmIChpbmZvLlR1dG9yID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1R1dG9yOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXhpb3MuZ2V0KGAvdHV0b3JzLyR7aWR9YCkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGluZm8gPSBkYXRhO1xuICAgICAgICAgICAgdmFyIHByZXNlbGVjdGVkID0gW107XG4gICAgICAgICAgICBpbmZvLnRlc3RzLmZvckVhY2godGVzdCA9PiB7XG4gICAgICAgICAgICAgIHByZXNlbGVjdGVkLnB1c2godGVzdC5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB0dXRvckJpbzogaW5mby5CaW8sXG4gICAgICAgICAgICAgIHByaWNlOiBpbmZvLlByaWNlLFxuICAgICAgICAgICAgICBzZWxlY3RlZFRlc3RzOiBwcmVzZWxlY3RlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoJy91c2Vycy9waG90bycsIHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHVzZXJfaWQ6IHRoaXMucHJvcHMuaWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwaG90bzogZGF0YVswXS5sb2NhdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciBnZXR0aW5nIHRoZSB1c2VyJ3Mgc2V0dGluZ3M6IFwiLCBlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRBbGxUZXN0cyA9ICgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldCgnL3Rlc3RzJylcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0ZXN0czogZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIGdldHRpbmcgYWxsIHRoZSB0ZXN0czogJywgZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNoZWNrID0gZSA9PiB7XG4gICAgdmFyIGFycmF5ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRlc3RzLnNsaWNlKCk7XG4gICAgaWYgKGFycmF5LmluZGV4T2YoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSkgPT09IC0xKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRUZXN0czogWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRUZXN0cywgZS50YXJnZXQudmFsdWVdXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2VsZWN0ZWRUZXN0cylcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpZHggPSBhcnJheS5pbmRleE9mKE51bWJlcihlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgY29uc29sZS5sb2coJ2lkeCcsIGlkeCk7XG4gICAgICBhcnJheS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZFRlc3RzOiBhcnJheVxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlbGVjdGVkVGVzdHMpXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICBpc1ByZXNlbGVjdGVkVGVzdHMgPSBpZCA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRUZXN0cy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB0ZXN0c0FycmF5ID0gW107XG4gICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFRlc3RzLmZvckVhY2godGVzdF9pZCA9PiB7XG4gICAgICB0ZXN0c0FycmF5LnB1c2goe1xuICAgICAgICB0dXRvcl9pZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgICAgdGVzdF9pZFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB2YXIgZm9ybSA9IHtcbiAgICAgIHRlc3RzOiB0ZXN0c0FycmF5LFxuICAgICAgdHV0b3JCaW86IHRoaXMuc3RhdGUudHV0b3JCaW8sXG4gICAgICByYXRlOiBOdW1iZXIodGhpcy5zdGF0ZS5wcmljZSksXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIHVzZXJCaW86IHRoaXMuc3RhdGUuYmlvLFxuICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgaXNUdXRvcjogdGhpcy5zdGF0ZS5pc1R1dG9yXG4gICAgfTtcblxuICAgIGF4aW9zXG4gICAgICAucG9zdChgL3VzZXJzLyR7dGhpcy5wcm9wcy5pZH1gLCBmb3JtKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbGVVcGxvYWQodGhpcy5wcm9wcy5pZCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZWxlY3RlZEZpbGU6IG51bGwsXG4gICAgICAgICAgc3VibWl0dGVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfTtcblxuICBoYW5kbGVGaWxlU2VsZWN0ID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZEZpbGU6IGUudGFyZ2V0LmZpbGVzXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlRmlsZVVwbG9hZCA9IHVzZXJfaWQgPT4ge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgdGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGVbMF0pO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgJ2h0dHA6Ly9lYzItMzQtMjA3LTY2LTIyNC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo1MDAwL3Bob3RvLXVwbG9hZCcsXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgIGNyb3NzRG9tYWluOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgbGV0IHVzZXJQaG90byA9IHtcbiAgICAgICAgICB1c2VyX2lkLFxuICAgICAgICAgIGxvY2F0aW9uOiBkYXRhLkxvY2F0aW9uXG4gICAgICAgIH07XG4gICAgICAgIGF4aW9zLnBvc3QoJy91c2Vycy9waG90bycsIHVzZXJQaG90byk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ1RoZXJlIHdhcyBhbiBlcnJvciB3aXRoIHRoZSBQT1NUIHJlcXVlc3QgdG8gdGhlIHNlcnZlcjogJyxcbiAgICAgICAgICBlcnJvclxuICAgICAgICApXG4gICAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29uZGl0aW9uYWxEaXNwbGF5ID0gIXRoaXMuc3RhdGUuaXNUdXRvciA/IChcbiAgICAgIDxkaXYgLz5cbiAgICApIDogKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlR1dG9yIHNldHRpbmdzIDwvaDI+XG5cbiAgICAgICAgPEZvcm1Hcm91cCBjb250cm9sSWQ9XCJmb3JtQ29udHJvbHNUZXh0YXJlYVwiPlxuICAgICAgICAgIDxDb250cm9sTGFiZWw+VHV0b3IgQmlvPC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICBtYXhMZW5ndGg9XCIyNTVcIlxuICAgICAgICAgICAgY29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRleHQgKE1heDogMjU1IGNoYXJhY3RlcnMpXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0dXRvckJpb1wiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50dXRvckJpb31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Db250cm9sc1RleHRhcmVhXCI+XG4gICAgICAgICAgPENvbnRyb2xMYWJlbD5SYXRlOiAoaG91cmx5KTwvQ29udHJvbExhYmVsPlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5zdGF0ZS5wcmljZX1cbiAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcmljZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnRlc3RzLm1hcCgodGVzdCwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hlY2t9XG4gICAgICAgICAgICAgICAgaW5saW5lXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtOdW1iZXIodGVzdC5pZCl9XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICB0aGlzLmlzUHJlc2VsZWN0ZWRUZXN0cyh0ZXN0LmlkKSA/ICdjaGVja2VkJyA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXN0Lk5hbWV9XG4gICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zdWJtaXR0ZWQpIHtcbiAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvZmluZFR1dG9yXCIgLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NcIj5cbiAgICAgICAgPGgxPlNldHRpbmdzPC9oMT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utc2V0dGluZ3NcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctY2lyY2xlXCJcbiAgICAgICAgICAgIHNyYz17dGhpcy5zdGF0ZS5waG90b31cbiAgICAgICAgICAgIGFsdD17YCR7dGhpcy5zdGF0ZS5uYW1lfSdzIHByb2ZpbGUgcGljdHVyZWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEZvcm1Hcm91cCBjb250cm9sSWQ9XCJmb3JtQ29udHJvbHNUZXh0YXJlYVwiPlxuICAgICAgICAgIDxDb250cm9sTGFiZWw+TmFtZTwvQ29udHJvbExhYmVsPlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMjU1XCJcbiAgICAgICAgICAgIGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0ZXh0IChNYXg6IDI1NSBjaGFyYWN0ZXJzKVwiXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUNvbnRyb2xzVGV4dGFyZWFcIj5cbiAgICAgICAgICA8Q29udHJvbExhYmVsPkJpbzwvQ29udHJvbExhYmVsPlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMjU1XCJcbiAgICAgICAgICAgIGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0ZXh0IChNYXg6IDI1NSBjaGFyYWN0ZXJzKVwiXG4gICAgICAgICAgICBuYW1lPVwiYmlvXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJpb31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPEZvcm1Hcm91cCBjb250cm9sSWQ9XCJmb3JtQ29udHJvbHNGaWxlXCIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cbiAgICAgICAgICA8Q29udHJvbExhYmVsPlVwZGF0ZSB5b3VyIHByb2ZpbGUgcGljdHVyZSA6PC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBuYW1lPVwicGhvdG9cIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsZVNlbGVjdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICA8aDE+X19fX19fX19fX19fXzwvaDE+XG5cbiAgICAgICAge2NvbmRpdGlvbmFsRGlzcGxheX1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBcUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFoRkE7QUFrRkE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUF0R0E7QUF3R0E7QUFHQTtBQUNBO0FBNUdBO0FBOEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEhBO0FBc0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBdEpBO0FBd0pBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUE1SkE7QUE4SkE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQXZMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBRkE7QUFnQkE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7OztBQXdIQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFGQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQVRBO0FBWUE7QUFmQTtBQTFCQTtBQUNBO0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFGQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBRkE7QUFZQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqREE7QUFzREE7Ozs7QUF4U0E7QUFDQTtBQTBTQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/protected/Settings.jsx\n");

/***/ })

}]);