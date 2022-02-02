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

room_naem = localStorage.getItem("room name");
usernaem = localStorage.getItem("username");
console.log(room_naem);
console.log(usernaem);

function getData() { firebase.database().ref("/"+room_naem).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['likes'];
         row = "<h4> "+ name +"<img class='user_tick' src='tick.png'><h4 class='message_h4'>"+ message +"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLikes(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
         
        // name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
        // message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        // like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + likes + "onclick='updateLikes(this.id)'>";
        // span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + likes + "</span> </button> <hr>";
        // row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;

      } });  }); }
getData();

function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_naem).push({

            name: usernaem,
            message: msg,
            likes: 0

      });
      document.getElementById("msg").value = "";

}

function updateLikes(message_id){
      console.log("message id");

      console.log(message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      firebase.database().ref(room_naem).child(message_id).update({

            likes: update_likes

      });

      console.log(update_likes);

}