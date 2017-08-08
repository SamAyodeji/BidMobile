/// <reference path="angular.min.js" />
// Initialize Firebase
//var config = {
//    apiKey: "AIzaSyDhWVJoXjsWKgt-S43apfRlfh4bV4OOHSI",
//    authDomain: "bidmobile-5982c.firebaseapp.com",
//    databaseURL: "https://bidmobile-5982c.firebaseio.com",
//    projectId: "bidmobile-5982c",
//    storageBucket: "bidmobile-5982c.appspot.com",
//    messagingSenderId: "1024974385739"
//};
//firebase.initializeApp(config);


var app = angular.module("sampleApp", ["firebase"]);
app.controller("ChatCtrl", function ($scope, $firebaseArray) {

    var ref = firebase.database().ref();
    $scope.names = $firebaseArray(ref);
    $scope.add = function () {
        $scope.names.$add({
            from: $scope.users,
            chat: $scope.message,
        });
        $scope.message = "";
    };
})

//var app = angular.module("sampleApp", ["firebase"]);

//app.controller("ChatCtrl", function ($scope, $firebaseArray) {

//    var ref = firebase.database().ref();

//    $scope.names = $firebaseArray(ref);

//    $scope.add = function () {
//        $scope.names.$add({
//            chatmessage: $scope.message,
//        });
//        $scope.message = "";
//    };
//})