sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/asset-registries/Themes", "sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css", "./sap_fiori_3/parameters-bundle.css"], function (_exports, _Themes, _parametersBundle, _parametersBundle2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _parametersBundle = _interopRequireDefault(_parametersBundle);
  _parametersBundle2 = _interopRequireDefault(_parametersBundle2);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-theming", "sap_fiori_3", async () => _parametersBundle.default);
  (0, _Themes.registerThemePropertiesLoader)("space-package", "sap_fiori_3", async () => _parametersBundle2.default);
  const styleData = {
    packageName: "space-package",
    fileName: "themes\SpaceItemComponent.css",
    content: "/* .space-article {\r\n    position: absolute;\r\n    top: 100%;\r\n    animation: scroll 120s linear 4s forwards;\r\n} */\r\n\r\n.space-article>h2 {\r\n    text-align: center;\r\n}"
  };
  var _default = _exports.default = styleData;
});