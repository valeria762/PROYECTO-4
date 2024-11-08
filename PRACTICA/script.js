import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { auth } from "./firebase.js"

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const registroForm = document.getElementById("registroForm");
registroForm.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const email = document.getElementById("emailRegistro").value 
    const password = document.getElementById("passwordRegistro").value 
    console.log(email,password)
    try{
        const usuario = await createUserWithEmailAndPassword(auth, email, password)
        window.location.href="contenido.html"
        //console.log(usuario)
    }catch(error){
        console.log(error.code)
    }
})

const ingresoForm = document.getElementById("loginForm");
ingresoForm.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const email = document.getElementById("emailIngreso").value
    const password = document.getElementById("passwordIngreso").value
    try{
        const usuario = signInWithEmailAndPassword(auth, email, password)
        window.location.href="contenido.html"
    }catch(error){
        console.log(error.code)
    }
})
