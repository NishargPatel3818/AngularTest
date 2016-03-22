
var app = angular.module('demoApp', []);

app.controller('mainCtrl', function($scope,$http) {
    $scope.name1="";
        $scope.users_Data=[];

        $http.get('http://www.iNorthwind.com/Service1.svc/getAllCustomers')
             .success(function(data){
                 $scope.listOfCustomers = data.GetAllCustomersResult;
                   console.log($scope.listOfCustomers);
         });

        $scope.submit = function() {
            $scope.$broadcast('submit');
        }
    })

    .directive('highlightOnError', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                scope.$on('submit', function() {
                    var border = '';
                    if (ngModel.$invalid)
                        border = 'red solid 2px';
                    element.css('border', border);
                });
            }
        };
    });
