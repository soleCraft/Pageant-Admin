// Import the Firebase SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDrDkKtlnY9OE5dlo5WBH9rnFRcNAdqZBU",
  authDomain: "criteria-sys.firebaseapp.com",
  projectId: "criteria-sys",
  storageBucket: "criteria-sys.appspot.com",
  messagingSenderId: "874372720789",
  appId: "1:874372720789:web:1b276b8c06b005fda5139c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function(){
    const showPasswordCheckbox = document.getElementById("showPassword");
    const passwordInput = document.getElementById("password");

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const email = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                window.location.href = "dashboard.html";
            })
            .catch((error) => {
                alert("Invalid email or password. Please try again.");
                document.getElementById("username").value = ""; 
                document.getElementById("password").value = "";
            });
    });

    showPasswordCheckbox.addEventListener("change", () => {
        if (showPasswordCheckbox.checked) {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });
});