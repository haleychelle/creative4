var app = window.angular.module('app',[])

var happyCnt = 0;
var numItems = 0;
var isHappy = true;
var phrase = "";

app.factory('addHappiness', addHappiness)
app.controller('mainCtrl', mainCtrl)

function addHappiness ($http) {
  var API_ROOT = 'happyThings'
  return {
    get: function() {
      return $http
      .get(API_ROOT)
      .then(function (resp) {
        return resp.data
      })
    }
  }
}

function mainCtrl ($scope, addHappiness, $http) {
  $scope.happyThings = []

  addHappiness.get()
    .then(function (data) {
      $scope.happyThings = data
    })
  
  $scope.addHappiness = function() {
    happyCnt += $scope.pointVal;
    numItems++;
    var formData = {name:$scope.name, pointVal:$scope.pointVal};
    console.log(formData);
    var happyURL = 'happyThings';
    $http({
      url: happyURL,
      method: "POST",
      data: formData
    }).success(function(data, status, headers, config) {
      console.log("Post worked");
    }).error(function(data, status, headers, config) {
      console.log("Post failed");
    });
  }

  $scope.felicidad = function() {
    if((numItems/happyCnt) < .5)
    {
      phrase = "Things don't make you happy. Reevaluate your priorities.";
    }
    else {
      phrase = "";
    }
    return ((numItems/happyCnt)*100);
  }

  $scope.getAdvice = function() {
    return phrase;
  }


}
