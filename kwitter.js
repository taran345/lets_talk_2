var firebaseConfig = {
    apiKey: "AIzaSyCOh16NRd-lawbjRhAY78dMtjeSfXqD2AI",
    authDomain: "kwitter-53648.firebaseapp.com",
    databaseURL: "https://kwitter-53648-default-rtdb.firebaseio.com",
    projectId: "kwitter-53648",
    storageBucket: "kwitter-53648.appspot.com",
    messagingSenderId: "933273644079",
    appId: "1:933273644079:web:7901c12366a934c5d72ada"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


function adduser() {
    user_name = document.getElementById("user_name").value;
window.location="room.html"
    localStorage.setItem("Username",user_name);
}