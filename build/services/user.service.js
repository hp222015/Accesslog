"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newUser = exports.authenticate = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../models/user.model"));
var bcrypt = require('bcrypt');
var newUser = exports.newUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var hashedPassword, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return bcrypt.hash(body.password, 10);
        case 2:
          hashedPassword = _context.sent;
          // Replace plain text password with hashed password
          body.password = hashedPassword;

          // Create the user with the hashed password
          _context.next = 6;
          return _user["default"].create(body);
        case 6:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function newUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

// for login
var authenticate = exports.authenticate = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var data, isMatch;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _user["default"].findOne({
            email: body.email
          });
        case 3:
          data = _context2.sent;
          console.log(body.email);
          console.log(data);
          if (data) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", false);
        case 8:
          _context2.next = 10;
          return bcrypt.compare(body.password, data.password);
        case 10:
          isMatch = _context2.sent;
          return _context2.abrupt("return", isMatch);
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0); // Log errors for debugging
          return _context2.abrupt("return", false);
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return function authenticate(_x2) {
    return _ref2.apply(this, arguments);
  };
}();