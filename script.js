async function caricaDati(){

const r = await fetch("dati.json?"+Date.now());
const dati = await r.json();

document.getElementById("giorno").innerText=dati.giorno;

document.getElementById("mattina").innerText=dati.mattina;
document.getElementById("pomeriggio").innerText=dati.pomeriggio;

document.getElementById("holterCardiaco").innerText=dati.holterCardiaco;
document.getElementById("holterPressorio").innerText=dati.holterPressorio;

document.getElementById("soloEcgMattina").innerText=dati.soloEcgMattina;
document.getElementById("soloEcgPomeriggio").innerText=dati.soloEcgPomeriggio;

document.getElementById("spirometria").innerText=dati.spirometria;
document.getElementById("polisonnografia").innerText=dati.polisonnografia;

let html="";

dati.orari.forEach(o=>{
html+="<div class='cell'>"+o+"</div><div class='cell'>100</div>";
});

document.getElementById("footerGrid").innerHTML=html;

}

setInterval(caricaDati,30000);

caricaDati();
