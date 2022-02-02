var firebaseConfig = {
      apiKey: "AIzaSyD_YA2-Uyod9QJbGkMcunXTYIH98_NHvKg",
      authDomain: "kwitter-91fd1.firebaseapp.com",
      databaseURL: "https://kwitter-91fd1-default-rtdb.firebaseio.com",
      projectId: "kwitter-91fd1",
      storageBucket: "kwitter-91fd1.appspot.com",
      messagingSenderId: "494135168609",
      appId: "1:494135168609:web:4f9739b9a29214b768e420"
    };
    
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("username");
console.log(user_name);
document.getElementById("welcome_label").innerHTML = "Welcome " + user_name;

function add_room(){

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

            purpose: "adding aa rroooomm name"

      });

      localStorage.setItem("room name" , room_name);
      window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("lobby_list").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;

      console.log(Room_names);

      row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("lobby_list").innerHTML += row;

      });});}
getData();

function logout(){

      localStorage.removeItem("username");
      localStorage.removeItem("room name")
      window.location = "index.html";

}

