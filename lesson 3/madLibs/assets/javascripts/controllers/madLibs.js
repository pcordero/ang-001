angular.module('madLibs', [])
  .controller('keywordsCtrl',
    function($scope){
      $scope.gender = "female";
      $scope.sheHe = "she";
      $scope.herHis = "her"
      $scope.keywords = { 
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
      $scope.updateCopy = function(gender) {
        if(gender === 'female'){
          $scope.sheHe = "she";
          $scope.herHis = "her";
        } else {
          $scope.sheHe = "he";
          $scope.herHis = "his";
        }

      }
    });