(function () {
    //// Initialize Firebase
    //var config = {
    //    apiKey: "AIzaSyDhWVJoXjsWKgt-S43apfRlfh4bV4OOHSI",
    //    authDomain: "bidmobile-5982c.firebaseapp.com",
    //    databaseURL: "https://bidmobile-5982c.firebaseio.com",
    //    projectId: "bidmobile-5982c",
    //    storageBucket: "bidmobile-5982c.appspot.com",
    //    messagingSenderId: "1024974385739"
    //};
    //firebase.initializeApp(config);


    //alert('pls log me out');


    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');
    var btnSignUp = document.getElementById('btnSignUp');
    var inEmail = document.getElementById('email2');
    var inPassword = document.getElementById('password2');
    var btnlogin = document.getElementById('btnlogin');
    //var logout = document.getElementById('logout');

    btnlogin.addEventListener('click', e => {
        //alert('work');
        const email = inEmail.value;
        const pass = inPassword.value;
        const auth = firebase.auth();
        //alert('meme');
        const promise = auth.signInWithEmailAndPassword(email,pass);
        
        promise.catch(e => console.log(e.message));
    });
    
    btnSignUp.addEventListener('click', e => {
        const email = inputEmail.value;
        const pass = inputPassword.value;
        const auth = firebase.auth();
        //alert('shit');
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
        
    });


    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            var user = firebase.auth().currentUser;
            console.log(firebaseUser);
            console.log('Logged in');
            window.localStorage.setItem("username", user.email);
            window.localStorage.setItem("user2", user);
            //alert('ko ye mi oo');
            return window.location = 'Userhome.html' + '?usr=' + user.email;
            
            //alert(user.email);

            //alert('i reach here na');
        }
        else {
            console.log('not logged in');
            alert('Please log in');
        };
    });
   

}());
