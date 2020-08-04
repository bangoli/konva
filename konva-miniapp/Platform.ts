
import { Util, Collection } from './Util';

let _canvas = { createImage: {} };
let _canvasId = 'myCanvas';
let _systemInfo = { pixelRatio: 1};
const _platForm = { isWx: !document };

const _document = document || {
  createElement: type => {
    if (type == 'img') {
      console.log('-createElement--', type);
      return _canvas.createImage()
    }
    if (type == 'canvas') {
      return _canvas
    }
  },
  documentElement: {
    addEventListener: function() {}
  }
}

const _window = window || {
  Image: _canvas.createImage,
  devicePixelRatio: 1
}

Util.createDummyContext = () => {
  return wx.createCanvasContext(_canvasId); // _canvas.getContext('2d');
}

export const init = ({ canvas, systemInfo }) => {
  console.log('--init data-33--:')
  _canvas = canvas;
  _systemInfo = systemInfo;
}

export const getCanvas = () => {
  return _canvas;
}

export const platForm = _platForm;
export const k_systemInfo = _systemInfo;
export const k_document = _document;
export const k_window = _window;
