var firebaseConfig = {
    apiKey: "AIzaSyD_nVcokkX4cAm8QpCR5vsVUA7AQIkh6cM",
    authDomain: "kwitter-bd2c2.firebaseapp.com",
    projectId: "kwitter-bd2c2",
    storageBucket: "kwitter-bd2c2.appspot.com",
    messagingSenderId: "942489041795",
    appId: "1:942489041795:web:6cb0b0657cb37bfb59d4b6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name")
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
});});}
getData();

 console.log("Room Name-"+Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML+=row;
 function addRoom()
 {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function redirectToRoomName(){
  console.log(name);
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
} 