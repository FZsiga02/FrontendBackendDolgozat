import './style.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

function kepURL(){
    document.getElementById('kep').src=document.getElementById('url').value
}

function kepMeret(){
    document.getElementById('kep').style.width=document.getElementById('meret').value + 'px'
}

function keretVastagsag(){
    document.getElementById('kep').style.borderWidth=document.getElementById('vastag').value + 'px'
}

function keretSzin(){
    document.getElementById('kep').style.borderColor=document.getElementById('szin').value
}

function darkMode(){
    document.body.classList.toggle("dark-mode")
}

function init(){
    document.getElementById('url').addEventListener('change', kepURL)
    document.getElementById('meret').addEventListener('change', kepMeret)
    document.getElementById('vastag').addEventListener('change', keretVastagsag)
    document.getElementById('szin').addEventListener('change', keretSzin)
    document.getElementById('dark').addEventListener('click', darkMode)
}

document.addEventListener('DOMContentLoaded', init)

