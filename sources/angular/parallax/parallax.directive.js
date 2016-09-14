'use strict';

angular
  .module('rawfit')
  .directive('parallax', ParallaxDirective);

function ParallaxDirective() {
  return {
    restrict: 'C',
    link,
  };

  function link() {
    let parallax = document.querySelector('.parallax');
    let layers = Array.from(document.querySelectorAll('.parallax .layer.background'));
    setZIndexLayer();

    function getOffsetTop(layer) {
      return layer.offsetTop;
    }

    function closestNumber(prev, curr) {
      return Math.abs(curr - parallax.scrollTop) < Math.abs(prev - parallax.scrollTop)
        ? curr
        : prev;
    }

    function setZIndexLayer() {
      let layersOffsetTop = layers.map(getOffsetTop);
      let layerVisible = layers[layersOffsetTop.indexOf(layersOffsetTop.reduce(closestNumber))];

      layers.map(setZIndex);

      function setZIndex(layer) {
        let isLayerVisible = layer === layerVisible;
        layer.style.zIndex = isLayerVisible
          ? 5
          : 0;
      }
      requestAnimationFrame(setZIndexLayer);
    }
  }
}

