"use strict";
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
var Dropper = function (_a) {
    var width = _a.width, height = _a.height, color = _a.color, image = _a.image, className = _a.className, onChange = _a.onChange;
    var canvas = React.createRef();
    var _b = __read(React.useState(color), 2), oldColor = _b[0], setOldColor = _b[1];
    var drawImage = React.useCallback(function () {
        var imageElement = new Image();
        imageElement.onload = function () {
            var _a;
            if (canvas.current && canvas.current.getContext('2d')) {
                (_a = canvas.current.getContext('2d')) === null || _a === void 0 ? void 0 : _a.drawImage(imageElement, 0, 0, width, height);
            }
        };
        imageElement.src = image;
        imageElement.crossOrigin = 'Anonymous';
    }, []);
    var getImageData = React.useCallback(function (e) {
        var _a;
        if (canvas.current && canvas.current.getContext('2d')) {
            var offset = canvas.current.getBoundingClientRect();
            var canvasX = Math.floor(e.pageX - offset.left);
            var canvasY = Math.floor(e.pageY - offset.top);
            var imageData = (_a = canvas.current.getContext('2d')) === null || _a === void 0 ? void 0 : _a.getImageData(canvasX, canvasY, 1, 1);
            return imageData === null || imageData === void 0 ? void 0 : imageData.data;
        }
        return;
    }, []);
    var setColor = React.useCallback(function (e) {
        e.preventDefault();
        var data = getImageData(e);
        if (!(data === null || data === void 0 ? void 0 : data.length)) {
            onChange(oldColor, false);
            return;
        }
        var _a = __read(data, 3), r = _a[0], g = _a[1], b = _a[2];
        var newColor = "#".concat((b + 256 * g + 65536 * r).toString(16));
        if (e.type === 'mousemove') {
            onChange(newColor, false);
        }
        if (e.type === 'click') {
            onChange(newColor, true);
        }
    }, []);
    React.useEffect(function () {
        drawImage();
    }, []);
    return (React.createElement("canvas", { ref: canvas, width: width, height: height, className: className, onClick: setColor, onMouseMove: setColor }));
};
exports.Dropper = Dropper;
exports.Dropper.defaultProps = {
    width: 300,
    height: 150,
    color: '#ffffff',
    image: '',
    className: 'react-dropper',
    onChange: function (color, sync) { return undefined; }
};
exports.default = exports.Dropper;
