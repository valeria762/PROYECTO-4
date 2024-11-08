
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  import { getAuth} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBZdbuGWYMw8CYfuLp0oLeVyObCYPwkqUg",
    authDomain: "red-social-c7abf.firebaseapp.com",
    projectId: "red-social-c7abf",
    storageBucket: "red-social-c7abf.appspot.com",
    messagingSenderId: "658502018321",
    appId: "1:658502018321:web:619f8efeb8fc47053518b0",
    measurementId: "G-K29XRRLLZT"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth = getAuth(app);

 