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

// get element

var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');


 fileButton.addEventListener('change', function(e) {
     // get file
     var file = e.target.files[0];

     // Get current username
     var user = firebase.auth().currentUser;
     //create a storage ref
     var storageRef = firebase.storage().ref();
     //listen 
     var dpRef = storageRef.child(user.email + 'profile_pix/dp.jpg');
     
    //upload file
    var task = dpRef.put(file);

     //update
    task.on('state_changed', function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = percentage;
    },
     function error(err) {

     },
     function complete() {
         //var user = firebase.auth().currentUser;
         var tangRef = storageRef.child(user.email + 'profile_pix/dp.jpg');
         
         //alert('na me');
         
       tangRef.getDownloadURL().then(function(url) {
             //alert(url);
             var img = document.getElementById('dp');
             var pix = document.getElementById('dp2');
             var pix1 = document.getElementById('dp3');
             img.src = url;
             pix.src = url;
             pix1.src = url;
             //window.localStorage.setItem("pix", getBase64Image(img));
                 //document.querySelector('img').src = url;
                 //alert('u reach');
                 alert('successful Submit');

             }).catch(function (error) {
                 // If anything goes wrong while getting the download URL, log the error
                 console.error(error);
             });

     });
    
     
     }
    );
//
 

