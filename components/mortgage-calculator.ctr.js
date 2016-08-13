angular
  .module('ngMortgageCalculator')
  .controller('mortgageCalculator', function($scope){
    $scope.salesPrice = 100000;
    $scope.downPaymentPercentage = 20;
    $scope.downPaymentAmount = 20000;
    $scope.loanAmount = 80000;
    $scope.otherCosts = 0;
    $scope.interestRate = 3.625;

  });
