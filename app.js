// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAoE2u9woqdCn61PS09pLjAUk_3ypmuZ5Y",
    authDomain: "test-form-d4c4b.firebaseapp.com",
    projectId: "test-form-d4c4b",
    storageBucket: "test-form-d4c4b.appspot.com",
    messagingSenderId: "477542165259",
    appId: "1:477542165259:web:40f975c7d7a33aade9100e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
