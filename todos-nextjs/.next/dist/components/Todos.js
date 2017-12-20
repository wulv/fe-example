'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Todo = require('./Todo');

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wulv/wulv_env/study/chrome-debugger/components/Todos.js';


var Footer = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.remove = function (id) {
      var _this$props = _this.props,
          todos = _this$props.todos,
          setTodos = _this$props.setTodos;

      setTodos(todos.filter(function (todo) {
        return todo.id === id;
      }));
    }, _this.setCompleted = function (id) {
      var _this$props2 = _this.props,
          todos = _this$props2.todos,
          setTodos = _this$props2.setTodos;

      setTodos(todos.map(function (todo) {
        if (todo.id === id) {
          return (0, _extends3.default)({}, todo, { completed: !todo.completed });
        }
        return todo;
      }));
    }, _this.setTitle = function (id, title) {
      var _this$props3 = _this.props,
          todos = _this$props3.todos,
          setTodos = _this$props3.setTodos;

      setTodos(todos.map(function (todo) {
        if (todo.id === id) {
          return (0, _extends3.default)({}, todo, { title: title });
        }
        return todo;
      }));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Footer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          todos = _props.todos,
          selectedFilter = _props.selectedFilter;

      return _react2.default.createElement('ul', { className: 'todos', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, todos.filter(function (todo) {
        if (selectedFilter === 'active') {
          return todo.completed === false;
        } else if (selectedFilter === 'completed') {
          return todo.completed === true;
        } else {
          return true;
        }
      }).map(function (todo) {
        return _react2.default.createElement(_Todo2.default, { key: todo.id,
          todo: todo,
          setCompleted: _this2.setCompleted,
          setTitle: _this2.setTitle,
          remove: _this2.remove,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        });
      }));
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9kb3MuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUb2RvIiwiRm9vdGVyIiwicmVtb3ZlIiwiaWQiLCJwcm9wcyIsInRvZG9zIiwic2V0VG9kb3MiLCJmaWx0ZXIiLCJ0b2RvIiwic2V0Q29tcGxldGVkIiwibWFwIiwiY29tcGxldGVkIiwic2V0VGl0bGUiLCJ0aXRsZSIsInNlbGVjdGVkRmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFFSSxBOzs7Ozs7Ozs7Ozs7Ozs0TSxBQUNuQixTQUFTLFVBQUEsQUFBQyxJQUFPO3dCQUNhLE1BRGIsQUFDa0I7VUFEbEIsQUFDUCxvQkFETyxBQUNQO1VBRE8sQUFDQSx1QkFEQSxBQUNBLEFBQ2Y7O3FCQUFTLEFBQU0sT0FBTyxnQkFBQTtlQUFRLEtBQUEsQUFBSyxPQUFiLEFBQW9CO0FBQTFDLEFBQVMsQUFDVixPQURVO0EsYUFHWCxBLGVBQWUsVUFBQSxBQUFDLElBQU87eUJBQ08sTUFEUCxBQUNZO1VBRFosQUFDYixxQkFEYSxBQUNiO1VBRGEsQUFDTix3QkFETSxBQUNOLEFBQ2Y7O3FCQUFTLEFBQU0sSUFBSSxnQkFBUSxBQUN6QjtZQUFJLEtBQUEsQUFBSyxPQUFULEFBQWdCLElBQUksQUFDbEI7NENBQUEsQUFBWSxRQUFNLFdBQVcsQ0FBQyxLQUE5QixBQUFtQyxBQUNwQztBQUNEO2VBQUEsQUFBTyxBQUNSO0FBTEQsQUFBUyxBQU1WLE9BTlU7QSxhQVFYLEEsV0FBVyxVQUFBLEFBQUMsSUFBRCxBQUFLLE9BQVU7eUJBQ0ksTUFESixBQUNTO1VBRFQsQUFDaEIscUJBRGdCLEFBQ2hCO1VBRGdCLEFBQ1Qsd0JBRFMsQUFDVCxBQUNmOztxQkFBUyxBQUFNLElBQUksZ0JBQVEsQUFDekI7WUFBSSxLQUFBLEFBQUssT0FBVCxBQUFnQixJQUFJLEFBQ2xCOzRDQUFBLEFBQVksUUFBTSxPQUFsQixBQUNEO0FBQ0Q7ZUFBQSxBQUFPLEFBQ1I7QUFMRCxBQUFTLEFBTVYsT0FOVTtBOzs7Ozs2QkFRRjttQkFBQTs7bUJBQzJCLEtBRDNCLEFBQ2dDO1VBRGhDLEFBQ0MsZUFERCxBQUNDO1VBREQsQUFDUSx3QkFEUixBQUNRLEFBQ2Y7OzZCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRztBQURIO09BQUEsUUFDRyxBQUFNLE9BQU8sZ0JBQVEsQUFDcEI7WUFBSSxtQkFBSixBQUF1QixVQUFVLEFBQy9CO2lCQUFPLEtBQUEsQUFBSyxjQUFaLEFBQTBCLEFBQzNCO0FBRkQsbUJBRVcsbUJBQUosQUFBdUIsYUFBYSxBQUN6QztpQkFBTyxLQUFBLEFBQUssY0FBWixBQUEwQixBQUMzQjtBQUZNLFNBQUEsTUFFQSxBQUNMO2lCQUFBLEFBQU8sQUFDUjtBQUNGO0FBUkEsU0FBQSxBQVFFLElBQUksZ0JBQUE7K0JBQVEsQUFBQyxnQ0FBSyxLQUFLLEtBQVgsQUFBZ0IsQUFDN0I7Z0JBRGEsQUFDUCxBQUNOO3dCQUFjLE9BRkQsQUFFTSxBQUNuQjtvQkFBVSxPQUhHLEFBR0UsQUFDZjtrQkFBUSxPQUpLLEFBSUE7O3NCQUpBO3dCQUFSLEFBQVE7QUFBQTtTQUFBO0FBVm5CLEFBQ0UsQUFDRyxBQWdCTjs7Ozs7QUE5Q2lDLEE7O2tCQUFmLEEiLCJmaWxlIjoiVG9kb3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3d1bHYvd3Vsdl9lbnYvc3R1ZHkvY2hyb21lLWRlYnVnZ2VyIn0=