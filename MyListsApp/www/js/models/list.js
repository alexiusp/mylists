"use strict";
var AlxList = function(name) {
	return {
		id					: 0,
		name				: !!name ? name : "",
		description	: "",
		options			: {},
		addOption		: function(type, params) {

		},
		order				: 0,
		properties	: [],
		addProperty	: function (type, params) {
			// TODO: implement properties functionality
		}
	};
}
