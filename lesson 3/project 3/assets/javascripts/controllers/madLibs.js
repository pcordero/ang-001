angular.module('madLibs', [])
  .controller('keywordsCtrl',
    function($scope){
      $scope.ready = false;
      $scope.gender = "female";
      $scope.sheHe = "she";
      $scope.herHis = "her"
      var defaults = { 
        name: "",
        jobTitle: "",
        tediousTask: "",
        dirtyTask: "",
        celebrity: "",
        uselessSkill: "",
        obnoxiousCelebrity: "",
        hugeNumber: "",
        adjective: ""
      };
      $scope.keywords = angular.copy(defaults);
      $scope.updateCopy = function(gender) {
        if(gender === 'female'){
          $scope.sheHe = "she";
          $scope.herHis = "her";
        } else {
          $scope.sheHe = "he";
          $scope.herHis = "his";
        }
      }
      $scope.submit = function(){
        $scope.ready = $scope.madLibsForm.$valid;
      }
      $scope.reset = function(){
        $scope.ready = false;
        $scope.madLibsForm.$setPristine();
         $scope.keywords = angular.copy(defaults);
      }
    });