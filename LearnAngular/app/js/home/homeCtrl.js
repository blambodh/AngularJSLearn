/**
 * Created by bhupal.lambodhar on 4/4/15.
 */
angular.module('home').controller('homeCtrl', function($scope){
    $scope.company = {
        name: "Learn Fast",
        description: "Let's make learning fun.",
        product: {
            title: 'Share Learning',
            description: 'Sharing is amazing'
        }
    };
});