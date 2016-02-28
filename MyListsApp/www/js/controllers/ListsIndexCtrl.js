angular.module('mylists.controllers', [])

.controller('ListsIndexCtrl', function($scope, Lists, $ionicPopup) {
	$scope.listCanSwipe = true;
	$scope.lists = Lists.getAll();
	$scope.remove = function(list) {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Delete list',
			template: 'Are you sure you want to delete this list?',
			okText: 'Delete',
			okType: 'button-assertive'
		});
		confirmPopup.then(function(res) {
     if(res) {
       console.log('Deleting list ', list);
			 Lists.remove(list);
     }
   });

  };
});
