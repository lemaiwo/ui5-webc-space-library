/*!
 * ${copyright}
 */

// Provides control be.wl.space.SpaceComponent.
sap.ui.define([
	"sap/ui/core/webc/WebComponent",
	"./library",
	"./thirdparty/SpaceComponent"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>SpaceComponent</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.core.webc.WebComponent
	 * @class
	 *
	 * <h3>Overview</h3>
	 *
	 * The <code>space-component</code> component is a demo component that displays some text.
	 *
	 * @author SAP SE
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0 This control is experimental and its API might change significantly.
	 * @alias be.wl.space.SpaceComponent
	 */
	var SpaceComponent = WebComponent.extend("be.wl.space.SpaceComponent", {
		metadata: {
			library: "be.wl.space",
			tag: "space-component",
			properties: {

				/**
				 * Defines the intro of the space component.
				 */
				intro: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Defines the logo of the space component.
				 */
				logo: {
					type: "string",
					defaultValue: ""
				}
			},
			defaultAggregation: "items",
			aggregations: {

				/**
				 * Defines the articles of the component.
				 */
				items: {
					type: "be.wl.space.SpaceItemComponent",
					multiple: true
				}
			}
		}
	});

	/* CUSTOM CODE START */
	/* CUSTOM CODE END */

	return SpaceComponent;
});
