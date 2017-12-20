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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wulv/wulv_env/study/chrome-debugger/components/Todo.js';


var Footer = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
      _this.setState({ value: e.target.value });
    }, _this.handleCompleted = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          setCompleted = _this$props.setCompleted,
          todo = _this$props.todo;

      setCompleted(todo.id);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Footer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ value: this.props.todo.title });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      if (next.todo.title !== this.props.todo.title) {
        this.setState({ value: next.todo.title });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          setTitle = _props.setTitle,
          remove = _props.remove,
          _props$todo = _props.todo,
          completed = _props$todo.completed,
          title = _props$todo.title,
          id = _props$todo.id;

      return _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('input', { type: 'checkbox',
        checked: completed,
        onClick: this.handleCompleted, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement('input', { type: 'text', value: this.state.value, onChange: this.onChange, onBlur: function onBlur(e) {
          return setTitle(id, e.target.value);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement('button', { onClick: function onClick() {
          return remove(id);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }));
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9kby5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvb3RlciIsIm9uQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVDb21wbGV0ZWQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwic2V0Q29tcGxldGVkIiwidG9kbyIsImlkIiwidGl0bGUiLCJuZXh0Iiwic2V0VGl0bGUiLCJyZW1vdmUiLCJjb21wbGV0ZWQiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJQUVLLEE7Ozs7Ozs7Ozs7Ozs7OzRNLEFBV25CLFdBQVcsVUFBQSxBQUFDLEdBQU0sQUFDaEI7WUFBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLEVBQUEsQUFBRSxPQUF6QixBQUFjLEFBQWtCLEFBQ2pDO0EsYUFFRCxBLGtCQUFrQixVQUFBLEFBQUMsR0FBTSxBQUN2QjtRQUR1QixBQUN2QixBQUFFO3dCQUM2QixNQUZSLEFBRWE7VUFGYixBQUVmLDJCQUZlLEFBRWY7VUFGZSxBQUVELG1CQUZDLEFBRUQsQUFDdEI7O21CQUFhLEtBQWIsQUFBa0IsQUFDbkI7QTs7Ozs7eUNBbEJvQixBQUNuQjtXQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFqQyxBQUFjLEFBQXdCLEFBQ3ZDOzs7OzhDQUV5QixBLE1BQU0sQUFDOUI7VUFBSSxLQUFBLEFBQUssS0FBTCxBQUFVLFVBQVUsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFuQyxBQUF3QyxPQUFPLEFBQzdDO2FBQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxLQUFBLEFBQUssS0FBNUIsQUFBYyxBQUFtQixBQUNsQztBQUNGOzs7OzZCQVlRO21CQUNzRCxLQUR0RCxBQUMyRDtVQUQzRCxBQUNDLGtCQURELEFBQ0M7VUFERCxBQUNXLGdCQURYLEFBQ1c7K0JBRFgsQUFDbUI7VUFEbkIsQUFDMkIsd0JBRDNCLEFBQzJCO1VBRDNCLEFBQ3NDLG9CQUR0QyxBQUNzQztVQUR0QyxBQUM2QyxpQkFEN0MsQUFDNkMsQUFDcEQ7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsMkNBQ08sTUFBUCxBQUFZLEFBQ1Y7aUJBREYsQUFDVyxBQUNUO2lCQUFTLEtBRlgsQUFFZ0I7b0JBRmhCO3NCQURBLEFBQ0EsQUFHQTtBQUhBO21EQUdPLE1BQVAsQUFBWSxRQUFPLE9BQU8sS0FBQSxBQUFLLE1BQS9CLEFBQXFDLE9BQU8sVUFBVyxLQUF2RCxBQUE0RCxVQUFVLFFBQVEsZ0JBQUEsQUFBQyxHQUFEO2lCQUFPLFNBQUEsQUFBUyxJQUFJLEVBQUEsQUFBRSxPQUF0QixBQUFPLEFBQXNCO0FBQTNHO29CQUFBO3NCQUpBLEFBSUEsQUFDQTtBQURBO29EQUNRLFNBQVMsbUJBQUE7aUJBQU0sT0FBTixBQUFNLEFBQU87QUFBOUI7b0JBQUE7c0JBTkYsQUFDRSxBQUtBLEFBR0g7QUFIRzs7Ozs7O0FBN0I4QixBOztrQkFBZixBIiwiZmlsZSI6IlRvZG8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3d1bHYvd3Vsdl9lbnYvc3R1ZHkvY2hyb21lLWRlYnVnZ2VyIn0=