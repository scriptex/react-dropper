"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropper = void 0;
var React = require("react");
var Dropper = (function (_super) {
    __extends(Dropper, _super);
    function Dropper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = React.createRef();
        _this.state = {
            oldColor: ''
        };
        _this.drawImage = function () {
            var imageElement = new Image();
            var _a = _this.props, width = _a.width, height = _a.height, image = _a.image;
            imageElement.onload = function () {
                var canvas = _this.canvas.current;
                if (canvas && canvas.getContext('2d')) {
                    canvas.getContext('2d').drawImage(imageElement, 0, 0, width, height);
                }
            };
            imageElement.src = image;
            imageElement.crossOrigin = 'Anonymous';
        };
        _this.getImageData = function (e) {
            var canvas = _this.canvas.current;
            if (canvas && canvas.getContext('2d')) {
                var offset = canvas.getBoundingClientRect();
                var canvasX = Math.floor(e.pageX - offset.left);
                var canvasY = Math.floor(e.pageY - offset.top);
                var imageData = canvas.getContext('2d').getImageData(canvasX, canvasY, 1, 1);
                return imageData.data;
            }
            return [];
        };
        _this.setColor = function (e) {
            e.preventDefault();
            var data = _this.getImageData(e);
            if (!data.length) {
                _this.props.onChange(_this.state.oldColor, false);
                return;
            }
            var _a = __read(_this.getImageData(e), 3), r = _a[0], g = _a[1], b = _a[2];
            var newColor = "#" + (b + 256 * g + 65536 * r).toString(16);
            if (e.type === 'mousemove') {
                _this.props.onChange(newColor, false);
            }
            if (e.type === 'mouseleave') {
                _this.props.onChange(_this.state.oldColor, true);
            }
            if (e.type === 'click') {
                _this.props.onChange(newColor, true);
            }
        };
        return _this;
    }
    Dropper.prototype.componentWillMount = function () {
        this.setState({
            oldColor: this.props.color
        });
    };
    Dropper.prototype.render = function () {
        this.drawImage();
        return (React.createElement("canvas", { className: this.props.className, width: this.props.width, height: this.props.height, ref: this.canvas, onClick: this.setColor, onMouseMove: this.setColor, onMouseLeave: this.setColor }));
    };
    Dropper.defaultProps = {
        width: 300,
        height: 150,
        color: '#ffffff',
        image: '',
        className: 'react-dropper',
        onChange: function (color, sync) { return undefined; }
    };
    return Dropper;
}(React.Component));
exports.Dropper = Dropper;
