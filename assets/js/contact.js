// Initialize Firebase
var config = {
    apiKey: "AIzaSyCmCtyx16Gzl_sU4Ea9cGaKw7j7fF5QfFI",
    authDomain: "portfolio-ed630.firebaseapp.com",
    databaseURL: "https://portfolio-ed630.firebaseio.com",
    projectId: "portfolio-ed630",
    storageBucket: "portfolio-ed630.appspot.com",
    messagingSenderId: "329393026840"
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get Values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // save message
    saveMessage(name, email, message);

    // show alert
    document.querySelector('.alert').style.display = 'block';

    //hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // clear form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name : name,
        email : email,
        message : message
    });
}