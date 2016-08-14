angular
  .module('ngMortgageCalculator')
  .controller('mortgageCalculatorCtrl', '$log', function( $scope ){

    $scope.ddp = function(){
      $log.console( "I ma here");
      return $scope.downPaymentAmount / 2;
    };

    $scope.salesPrice = 100000;
    $scope.downPaymentPercentage = 20;
    $scope.downPaymentAmount = 20000;
    $scope.loanAmount = 80000;
    $scope.otherCosts = 0;
    $scope.interestRate = 3.625;

  });
