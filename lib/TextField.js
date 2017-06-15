'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _createComponent = require('./createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _mapError = require('./mapError');

var _mapError2 = _interopRequireDefault(_mapError);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var transProps = ["errorText", "floatingLabelText", "hintText"];

var translate = function translate(props, translator) {

	transProps.forEach(function (tp) {

		var prop = props[tp] && props[tp].toJS && typeof props[tp].toJS === 'function' ? props[tp].toJS() : props[tp];
		if (props[tp]) props[tp] = translator.apply(undefined, _toConsumableArray((0, _lodash.castArray)(prop)));
	});

	return props;
};

exports.default = (0, _createComponent2.default)(_TextField2.default, function (_ref) {
	var defaultValue = _ref.defaultValue,
	    translator = _ref.translator,
	    props = _objectWithoutProperties(_ref, ['defaultValue', 'translator']);

	var p = (0, _mapError2.default)(props);

	if (!translator || typeof translator !== 'function') return p;

	return translate(p, translator);
});