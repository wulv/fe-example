'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Todos = require('../components/Todos');

var _Todos2 = _interopRequireDefault(_Todos);

var _AddTodoForm = require('../components/AddTodoForm');

var _AddTodoForm2 = _interopRequireDefault(_AddTodoForm);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wulv/wulv_env/study/chrome-debugger/pages/index.js?entry';


var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      todos: [],
      selectedFilter: 'all'
    }, _this.setTodos = function (todos) {
      _this.setState({
        todos: todos
      });
    }, _this.setFilter = function (selectedFilter) {
      _this.setState({
        selectedFilter: selectedFilter
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          todos = _state.todos,
          selectedFilter = _state.selectedFilter;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('section', { className: 'todoapp', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'Todos'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/styles.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'todos'), _react2.default.createElement(_AddTodoForm2.default, { todos: todos, setTodos: this.setTodos, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement(_Todos2.default, { todos: todos, selectedFilter: selectedFilter, setTodos: this.setTodos, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement(_Footer2.default, { todos: todos, selectedFilter: selectedFilter, setTodos: this.setTodos, setFilter: this.setFilter, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsIlRvZG9zIiwiQWRkVG9kb0Zvcm0iLCJGb290ZXIiLCJBcHAiLCJzdGF0ZSIsInRvZG9zIiwic2VsZWN0ZWRGaWx0ZXIiLCJzZXRUb2RvcyIsInNldFN0YXRlIiwic2V0RmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs7OztzTSxBQUNKO2FBQVEsQUFDQyxBQUNQO3NCQUZNLEEsQUFFVTtBQUZWLEFBQ04sYUFJRixBLFdBQVcsVUFBQSxBQUFDLE9BQVUsQUFDcEI7WUFBQSxBQUFLO2VBQUwsQUFBYyxBQUdmO0FBSGUsQUFDWjtBLGFBSUosQSxZQUFZLFVBQUEsQUFBQyxnQkFBbUIsQUFDOUI7WUFBQSxBQUFLO3dCQUFMLEFBQWMsQUFHZjtBQUhlLEFBQ1o7QTs7Ozs7NkJBSUs7bUJBQzJCLEtBRDNCLEFBQ2dDO1VBRGhDLEFBQ0MsZUFERCxBQUNDO1VBREQsQUFDUSx3QkFEUixBQUNRLEFBQ2Y7OzZCQUFPLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0w7QUFESztBQUFBLE9BQUEsa0JBQ0wsY0FBQSxhQUFTLFdBQVQsQUFBbUI7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0RBQU0sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7b0JBQTlCO3NCQUZGLEFBRUUsQUFDQTtBQURBO2tEQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO29CQUE1QjtzQkFKSixBQUNFLEFBR0UsQUFFRjtBQUZFOzJCQUVGLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQU5GLEFBTUUsQUFDQSwwQkFBQSxBQUFDLHVDQUFZLE9BQWIsQUFBb0IsT0FBTyxVQUFVLEtBQXJDLEFBQTBDO29CQUExQztzQkFQRixBQU9FLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGlDQUFNLE9BQVAsQUFBYyxPQUFPLGdCQUFyQixBQUFxQyxnQkFBZ0IsVUFBVSxLQUEvRCxBQUFvRTtvQkFBcEU7c0JBUkYsQUFRRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyxrQ0FBTyxPQUFSLEFBQWUsT0FBTyxnQkFBdEIsQUFBc0MsZ0JBQWdCLFVBQVUsS0FBaEUsQUFBcUUsVUFBVSxXQUFXLEtBQTFGLEFBQStGO29CQUEvRjtzQkFWSixBQUFPLEFBQ0wsQUFTRSxBQUdMO0FBSEs7Ozs7OztBQTlCVSxBLEFBb0NsQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd3Vsdi93dWx2X2Vudi9zdHVkeS9jaHJvbWUtZGVidWdnZXIifQ==