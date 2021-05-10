var firebaseConfig = {
    apiKey: "AIzaSyBunF2ExW9PhbYN7HguvEQPOhUWhBwut9Y",
    authDomain: "let-s-chat-92ffb.firebaseapp.com",
    projectId: "let-s-chat-92ffb",
    storageBucket: "let-s-chat-92ffb.appspot.com",
    messagingSenderId: "199954932492",
    appId: "1:199954932492:web:62435017b31d6af25ddf29",
    measurementId: "G-NY410ZGJQ2"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
  
  
  
  
  