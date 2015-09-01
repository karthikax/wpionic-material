angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

$scope.isExpanded = false;
$scope.loginData = {};

$scope.setExpanded = function(bool) {
    $scope.isExpanded = bool;
};

// Create the login modal that we will use later
$ionicModal.fromTemplateUrl('templates/login.html', {
	scope: $scope
}).then(function(modal) {
	$scope.modal = modal;
});

// Triggered in the login modal to close it
$scope.hideModal = function() {
	$scope.modal.hide();
};

// Open the login modal
$scope.showModal = function() {
	$scope.modal.show();
};

// Perform the login action when the user submits the login form
$scope.doLogin = function() {
	console.log('Doing login', $scope.loginData);

	// Simulate a login delay. Remove this and replace with your login
	// code if using a login system
	$timeout(function() {
		$scope.hideModal();
	}, 1000);
};
})

.controller('PostsCtrl', function(dataFactory, $scope, $timeout, ionicMaterialMotion, ionicMaterialInk) {

	dataFactory.httpRequest('wp-json/wp/v2/posts').then(function(data) {
		console.log(data);
		$scope.posts = data;

		$timeout(function() {
			ionicMaterialMotion.fadeSlideIn({
				selector: '.animate-fade-slide-in .item'
			});
		}, 200);
	});

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('PostCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
});
