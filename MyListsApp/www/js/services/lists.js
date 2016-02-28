"use strict";
angular.module('mylists.services', [])
	.factory('Lists', function() {
		// private properties and Methods
		var _lists = [];
		var tutorial = AlxList("My first list");
		tutorial.description = "This is a simple description";
		_lists.push(tutorial);
		// public interface
		return {
			getAll	: function() {
				return _lists;
			},
			get	: function(id) {
				for (var i = 0; i < _lists.length; i++) {
					if (_lists[i].id === parseInt(id)) {
						return _lists[i];
					}
				}
				return null;
			},
			remove	: function(list) {
				_lists.splice(_lists.indexOf(list), 1);
			},
			getEmpty	: function() {
				return AlxList();
			}
		};
	});
