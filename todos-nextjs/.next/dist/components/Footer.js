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

var _jsxFileName = '/Users/wulv/wulv_env/study/chrome-debugger/components/Footer.js';


var Footer = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.clearCompleted = function () {
      var _this$props = _this.props,
          todos = _this$props.todos,
          setTodos = _this$props.setTodos;

      setTodos(todos.filter(function (todo) {
        return todo.completed === false;
      }));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Footer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          selectedFilter = _props.selectedFilter,
          todos = _props.todos,
          setFilter = _props.setFilter;

      var actives = todos.filter(function (todo) {
        return todo.completed === false;
      }).length;
      return _react2.default.createElement('footer', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, actives === 0 ? 'no items ' : null, actives === 1 ? '1 item ' : null, actives > 1 ? actives + ' items ' : null, 'left'), _react2.default.createElement('ul', { className: 'filters', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, ['all', 'active', 'completed'].map(function (filter) {
        return _react2.default.createElement('li', { key: filter,
          className: selectedFilter === filter ? 'selected' : undefined,
          onClick: function onClick() {
            return setFilter(filter);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }, filter);
      })), _react2.default.createElement('a', { href: '#', onClick: this.clearCompleted, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Clear completed'));
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9vdGVyIiwiY2xlYXJDb21wbGV0ZWQiLCJwcm9wcyIsInRvZG9zIiwic2V0VG9kb3MiLCJmaWx0ZXIiLCJ0b2RvIiwiY29tcGxldGVkIiwic2VsZWN0ZWRGaWx0ZXIiLCJzZXRGaWx0ZXIiLCJhY3RpdmVzIiwibGVuZ3RoIiwibWFwIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBRUssQTs7Ozs7Ozs7Ozs7Ozs7NE1BQ25CLEEsaUJBQWlCLFlBQU07d0JBQ08sTUFEUCxBQUNZO1VBRFosQUFDYixvQkFEYSxBQUNiO1VBRGEsQUFDTix1QkFETSxBQUNOLEFBQ2Y7O3FCQUFTLEFBQU0sT0FBTyxnQkFBQTtlQUFRLEtBQUEsQUFBSyxjQUFiLEFBQTJCO0FBQWpELEFBQVMsQUFDVixPQURVO0E7Ozs7OzZCQUdGO21CQUNzQyxLQUR0QyxBQUMyQztVQUQzQyxBQUNDLHdCQURELEFBQ0M7VUFERCxBQUNpQixlQURqQixBQUNpQjtVQURqQixBQUN3QixtQkFEeEIsQUFDd0IsQUFDL0I7O1VBQU0sZ0JBQVUsQUFBTSxPQUFPLGdCQUFBO2VBQVEsS0FBQSxBQUFLLGNBQWIsQUFBMkI7QUFBeEMsT0FBQSxFQUFoQixBQUErRCxBQUMvRDs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLHFCQUNHLEFBQVksSUFBWixBQUFnQixjQURuQixBQUNpQyxBQUM5QixrQkFBQSxBQUFZLElBQVosQUFBZ0IsWUFGbkIsQUFFK0IsQUFDNUIsZ0JBQUEsQUFBVSxJQUFJLFVBQWQsQUFBd0IsWUFIM0IsQUFHdUMsTUFKekMsQUFDRSxBQU1BLHlCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRztBQURIO1VBQ0csQUFBQyxPQUFELEFBQVEsVUFBUixBQUFrQixhQUFsQixBQUErQixJQUFJLGtCQUFBOytCQUNsQyxjQUFBLFFBQUksS0FBSixBQUFTLEFBQ1A7cUJBQVcsbUJBQUEsQUFBbUIsU0FBbkIsQUFBNEIsYUFEekMsQUFDc0QsQUFDcEQ7bUJBQVMsbUJBQUE7bUJBQU0sVUFBTixBQUFNLEFBQVU7QUFGM0I7c0JBQUE7d0JBQUEsQUFHRztBQUhIO1NBQUEsRUFEa0MsQUFDbEM7QUFUTixBQU9FLEFBQ0csQUFRSCwyQkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksU0FBUyxLQUFyQixBQUEwQjtvQkFBMUI7c0JBQUE7QUFBQTtTQWpCSixBQUNFLEFBZ0JFLEFBR0w7Ozs7O0FBN0JpQyxBOztrQkFBZixBIiwiZmlsZSI6IkZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd3Vsdi93dWx2X2Vudi9zdHVkeS9jaHJvbWUtZGVidWdnZXIifQ==