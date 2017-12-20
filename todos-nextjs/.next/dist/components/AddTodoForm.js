'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wulv/wulv_env/study/chrome-debugger/components/AddTodoForm.js';


var randomId = function randomId() {
  return Math.random().toString(36).substring(2);
};

var Footer = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (_ref2) {
      var title = _ref2.target.title;

      _this.addTodo(title.value);
      title.value = '';
    }, _this.handleClick = function (e) {
      var _this$props = _this.props,
          todos = _this$props.todos,
          setTodos = _this$props.setTodos;

      var val = e.target.value;
      setTodos(todos.map(function (item) {
        return item.completed = val;
      }));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Footer, [{
    key: 'addTodo',
    value: function addTodo(todo) {
      var _props = this.props,
          todos = _props.todos,
          setTodos = _props.setTodos;

      setTodos([{
        id: randomId(),
        title: todo,
        completed: false
      }].concat((0, _toConsumableArray3.default)(todos)));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('form', { action: 'javascript:', onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('input', { type: 'checkbox', onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('input', { type: 'text', name: 'title', placeholder: 'What needs to be done?', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkVG9kb0Zvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJyYW5kb21JZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIkZvb3RlciIsImhhbmRsZVN1Ym1pdCIsInRpdGxlIiwidGFyZ2V0IiwiYWRkVG9kbyIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJvcHMiLCJ0b2RvcyIsInNldFRvZG9zIiwidmFsIiwibWFwIiwiaXRlbSIsImNvbXBsZXRlZCIsInRvZG8iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7QUFFaEIsSUFBTSxXQUFXLFNBQVgsQUFBVyxXQUFBO1NBQU0sS0FBQSxBQUFLLFNBQUwsQUFBYyxTQUFkLEFBQXVCLElBQXZCLEFBQTJCLFVBQWpDLEFBQU0sQUFBcUM7QUFBNUQ7O0lBRXFCLEE7Ozs7Ozs7Ozs7Ozs7OzRNQVVuQixBLGVBQWUsaUJBQTJCO1VBQWQsQUFBYyxjQUF4QixBQUF3QixPQUFkLEFBQWMsQUFDeEM7O1lBQUEsQUFBSyxRQUFRLE1BQWIsQUFBbUIsQUFDbkI7WUFBQSxBQUFNLFFBQU4sQUFBYyxBQUNmO0EsYUFFRCxBLGNBQWMsVUFBQSxBQUFDLEdBQU07d0JBQ1MsTUFEVCxBQUNjO1VBRGQsQUFDWCxvQkFEVyxBQUNYO1VBRFcsQUFDSix1QkFESSxBQUNKLEFBQ2Y7O1VBQU0sTUFBTSxFQUFBLEFBQUUsT0FBZCxBQUFxQixBQUNyQjtxQkFBUyxBQUFNLElBQUksZ0JBQUE7ZUFBUSxLQUFBLEFBQUssWUFBYixBQUF5QjtBQUE1QyxBQUFTLEFBQ1YsT0FEVTtBOzs7Ozs0QkFqQkgsQSxNQUFNO21CQUNnQixLQURoQixBQUNxQjtVQURyQixBQUNKLGVBREksQUFDSjtVQURJLEFBQ0csa0JBREgsQUFDRyxBQUNmOzs7WUFBVSxBQUNKLEFBQ0o7ZUFGUSxBQUVELEFBQ1A7bUJBSEYsQUFBVSxBQUdHO0FBSEgsQUFDUixpREFERixBQUlNLEFBQ1A7Ozs7NkJBYVEsQUFDUDs2QkFDRSxjQUFBLFVBQU0sUUFBTixBQUFhLGVBQWMsVUFBVSxLQUFyQyxBQUEwQztvQkFBMUM7c0JBQUEsQUFDRTtBQURGO09BQUEsMkNBQ1MsTUFBUCxBQUFZLFlBQVcsU0FBUyxLQUFoQyxBQUFxQztvQkFBckM7c0JBREYsQUFDRSxBQUNBO0FBREE7bURBQ08sTUFBUCxBQUFZLFFBQU8sTUFBbkIsQUFBd0IsU0FBUSxhQUFoQyxBQUE0QztvQkFBNUM7c0JBSEosQUFDRSxBQUVFLEFBR0w7QUFISzs7Ozs7O0FBekI0QixBOztrQkFBZixBIiwiZmlsZSI6IkFkZFRvZG9Gb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93dWx2L3d1bHZfZW52L3N0dWR5L2Nocm9tZS1kZWJ1Z2dlciJ9