var sim = document.getElementById("sim");

sim.addEventListener("click", ()=>{
    let h2 = document.getElementById("title");
   let btnSIM = document.getElementById("sim")
   let btnNAO = document.getElementById("nao")
    let img = document.getElementById("img");

 h2.innerText="OI AMOR"
    btnSIM.style.display="none"
    btnNAO.style.display="none"
    img.style.display="block"
})