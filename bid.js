/// <reference path="angular.min.js" />

// Initialize Firebase
//var config2 = {
//    apiKey: "AIzaSyB240UmQkBq_9L0BZKu_0VqXtiW_I3jEiY",
//    authDomain: "bidmobile2.firebaseapp.com",
//    databaseURL: "https://bidmobile2.firebaseio.com",
//    projectId: "bidmobile2",
//    storageBucket: "bidmobile2.appspot.com",
//    messagingSenderId: "710311391248"
//};
firebase.initializeApp(config);

//var app = angular.module("sampleApp1", ["firebase"]);

//app.controller("ChatCtrl2", function ($scope, $firebaseArray) {

//    var ref = firebase.database().ref();

//    $scope.name = $firebaseArray(ref);

//    $scope.add = function () {

//        $scope.name.$add({
//            FullName: $scope.FullName,
//            Email: $scope.Email,
//            Number: $scope.Number,
//            Amount: $scope.Amount,
//            Bidnumber: $scope.BidNumber
//        });

//        $scope.FullName = "";
//        $scope.Email = "";
//        $scope.Number = "";
//        $scope.Amount = "";
//        $scope.BidNumber = "";

//        window.alert("Thank You, Your Bid as bin placed");

//    };


//});