 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBwOWtYoOWKyZ5d81GkZJdfmiAyeR_nZvA",
    authDomain: "validation-inputs-cv.firebaseapp.com",
    projectId: "validation-inputs-cv",
    storageBucket: "validation-inputs-cv.appspot.com",
    messagingSenderId: "1087660348839",
    appId: "1:1087660348839:web:23bf18c918b70e71f6d282",
    measurementId: "G-ZE3VC83CG2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//  Reference messages collection
let messageRef = firebase.database().ref('messages');






const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageText = document.getElementById('textArea');
const buttonDisable = document.getElementById('submit');

let validInput = false;
let isValidationOn = false;
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
} 
 
const resetInput = (elem) =>{
    elem.nextElementSibling.classList.add('hidden');
    elem.classList.remove('invalid');
};

const invalidateElem = (elem) => {
    elem.nextElementSibling.classList.remove('hidden');
    elem.classList.add('invalid');
};
const validationInput = () => {
    if(!isValidationOn) return;
    validInput = true;
    resetInput(nameInput);
    resetInput(emailInput);
    resetInput(messageText);

 if(!nameInput.value){ 
     validInput = false;
    invalidateElem(nameInput);
 }

 if(!validateEmail(emailInput.value)){ 
    validInput = false;
   invalidateElem(emailInput);
}

if(!messageText.value){
    validInput = false;
    invalidateElem(messageText);
    messageText.nextElementSibling.classList.remove('hidden');
    messageText.classList.add('invalid');
}
};

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    isValidationOn = true;
    event.preventDefault();
    validationInput();
    // save message
    savedMessage(nameInput.value, emailInput.value, messageText.value);
    form.reset();

    const alert = document.querySelector('.alert');
    // Show alert
    alert.style.display = "block";
 
    buttonDisable.setAttribute('disabled', 'disabled');
    // Hide alert after 3 seconds
    setTimeout(() =>{
        alert.style.display = "none";
      
    },3000);
});

nameInput.addEventListener('input', () => {
    validationInput();
});

emailInput.addEventListener('input', () => {
    validationInput();
})
messageText.addEventListener('input', () => {
    validationInput();
})
// remove disabled
form.addEventListener('input', () => {
if(nameInput.value.length > 0 && 
    emailInput.value.length > 0 && 
    messageText.value.length > 0){
    buttonDisable.removeAttribute('disabled');
}  
})

// save message
const savedMessage = (name, email, message) => {
  const newMessageRef = messageRef.push();
    newMessageRef.set({
        name:name,
        email: email,
        message:message
    })
}