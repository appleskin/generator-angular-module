'use strict';

angular.module('<%= githubName %>.<%= moduleName %>', []).directive('<%= githubName %><%= moduleName%>', [ function () {

	return {
		restrict: 'A',
		scope: {
		},

		// replace: true,
		template: function(element, attrs) {
			var defaultsAttrs ={
			};
			for(var xx in defaultsAttrs) {
				if(attrs[xx] ===undefined) {
					attrs[xx] =defaultsAttrs[xx];
				}
			}
			
			var html ="<div>";
			html+="</div>";
			return html;
		},
		
		link: function(scope, element, attrs) {
		},
		
		controller: function($scope, $element, $attrs) {
		}
	};
}]);