
//ADD YOUR FIREBASE LINKS HERE

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyARx8BZeo7msPxJP56GYKxqU1oDNhe8Lek",
    authDomain: "classtest-8f150.firebaseapp.com",
    projectId: "classtest-8f150",
    storageBucket: "classtest-8f150.appspot.com",
    messagingSenderId: "394415809139",
    appId: "1:394415809139:web:8b34325fe13639c1528006"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
