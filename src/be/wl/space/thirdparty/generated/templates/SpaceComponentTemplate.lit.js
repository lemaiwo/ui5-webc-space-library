sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /* eslint no-unused-vars: 0 */

  function block0(context, tags, suffix) {
    return (0, _LitRenderer.html)`<div class="star-wars-intro"><!-- Blue Intro Text --><p class="intro-text">${(0, _LitRenderer.ifDefined)(this.intro)}</p><!-- Logo Image or Text goes in here --><h2 class="main-logo"><img src="${(0, _LitRenderer.ifDefined)(this.logo)}"/></h2><!-- All Scrolling Content Goes in here --><div class="main-content"><div class="title-content"><slot></slot></div></div></div>`;
  }
  var _default = _exports.default = block0;
});