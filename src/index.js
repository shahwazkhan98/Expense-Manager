import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const body = document.querySelector("body"),
toggle = document.querySelector(".toggle");

toggle.addEventListener("click",()=>{
body.classList.toggle("dark");

if(!body.classList.contains("dark")){
    return localStorage.setItem("mode","light");
}
return localStorage.setItem("mode","dark");
});

toggle.addEventListener("click",()=> toggle.classList.toggle("active"));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


