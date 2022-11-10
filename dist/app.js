"use strict";

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var CheckData = /*#__PURE__*/function () {
  function CheckData() {
    var el1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Error";
    var el2 = arguments.length > 1 ? arguments[1] : undefined;
    var el3 = arguments.length > 2 ? arguments[2] : undefined;
    _classCallCheck(this, CheckData);
    for (var _len = arguments.length, elements = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      elements[_key - 3] = arguments[_key];
    }
    this.data = [el1, el2, el3].concat(elements);
  }
  _createClass(CheckData, [{
    key: "checkDataLength",
    value: function checkDataLength() {
      this.data.length < 5 ? console.log('Error') : '';
    }
  }, {
    key: "showFirstElements",
    value: function showFirstElements() {
      console.log("First 3 elements:", this.data.slice(0, 3).join("-"));
    }
  }, {
    key: "showOtherElements",
    value: function showOtherElements() {
      var otherElements = new Map();
      this.data.slice(3).forEach(function (dataEl, index) {
        otherElements.set(index, dataEl);
      });
      console.log("Other Elements:", otherElements);
    }
  }]);
  return CheckData;
}();
var data = [undefined, 2, 3, 4, 5, 'sd'];
var checkData = _construct(CheckData, data);
checkData.checkDataLength();
checkData.showFirstElements();
checkData.showOtherElements();