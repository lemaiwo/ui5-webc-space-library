/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library be.wl.space
 */
sap.ui.define([
		"sap/ui/webc/common/library",
		"sap/ui/core/Lib",
		"./thirdparty/Assets",
		"./library.config"
	], // library dependency
	function(commonLibrary, Library) {

		"use strict";

		/**
		 * SAPUI5 library with controls based on UI5 Web Components
		 *
		 * @namespace
		 * @alias be.wl.space
		 * @author SAP SE
		 * @version ${version}
		 * @public
		 * @since 1.92.0
		 * @experimental Since 1.92.0 This API is experimental and might change significantly.
		 */
		var thisLib = Library.init({
			name: "be.wl.space",
			version: "${version}",
			dependencies: ["sap.ui.core", "sap.ui.webc.common"],
			noLibraryCSS: true,
			designtime: "be/wl/space/designtime/library.designtime",
			interfaces: [

			],
			types: [

			],
			controls: [
				"be.wl.space.SpaceComponent",
				"be.wl.space.SpaceItemComponent"
			],
			elements: [],
			extensions: {}
		});
		return thisLib;

	});