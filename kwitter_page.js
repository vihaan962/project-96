//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDrq4FrT6dfMXXtToqK9cuaB3lXPtyCGq0",
      authDomain: "project-41-fdab2.firebaseapp.com",
      databaseURL: "https://project-41-fdab2-default-rtdb.firebaseio.com",
      projectId: "project-41-fdab2",
      storageBucket: "project-41-fdab2.appspot.com",
      messagingSenderId: "712503839209",
      appId: "1:712503839209:web:46493d72c0fc0bf71ea378",
      measurementId: "G-65C382B6YC"
      
    };    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";

    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      
//End code
      } });  }); }
getData();
