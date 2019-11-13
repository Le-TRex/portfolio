//Jobs //
let techsp = document.querySelectorAll("li")[13]; //Tech. Sup. Sanofi
let techbmx = document.querySelectorAll("li")[16]; //Tech. Biomérieux
let opbmxc2 = document.querySelectorAll("li")[19]; //Op. Biomérieux Craponne 2013
let sato = document.querySelectorAll("li")[22]; //Satoriz
let techm = document.querySelectorAll("li")[25] //Tech. Mérial
let opsp = document.querySelectorAll("li")[28] //Op. cond. Sanofi
let opbmxc1 = document.querySelectorAll("li")[31] //Op.Biomérieux Craponne 2010
let wood = document.querySelectorAll("li")[34] // Woodworker

//Make job description visible //
techsp.addEventListener("click", () => {
    document.querySelectorAll("li")[15].classList.toggle("visible");
});

techbmx.addEventListener("click", () => {
    document.querySelectorAll("li")[18].classList.toggle("visible");
});

opbmxc2.addEventListener("click", () => {
    document.querySelectorAll("li")[21].classList.toggle("visible");
});

sato.addEventListener("click", () => {
    document.querySelectorAll("li")[24].classList.toggle("visible");
});

techm.addEventListener("click", () => {
    document.querySelectorAll("li")[27].classList.toggle("visible");
});

opsp.addEventListener("click", () => {
    document.querySelectorAll("li")[30].classList.toggle("visible");
});

opbmxc1.addEventListener("click", () => {
    document.querySelectorAll("li")[33].classList.toggle("visible");
});

wood.addEventListener("click", () => {
    document.querySelectorAll("li")[36].classList.toggle("visible");
});

//Make cursor change when over clickable element//
techsp.addEventListener("mouseover", ()=> {
    techsp.classList.toggle("clickable");
});
techsp.addEventListener("mouseout", ()=> {
    techsp.classList.toggle("clickable");
});

techbmx.addEventListener("mouseover", ()=> {
    techbmx.classList.toggle("clickable");
});
techbmx.addEventListener("mouseout", ()=> {
    techbmx.classList.toggle("clickable");
});

opbmxc2.addEventListener("mouseover", ()=> {
    opbmxc2.classList.toggle("clickable");
});
opbmxc2.addEventListener("mouseout", ()=> {
    opbmxc2.classList.toggle("clickable");
});

sato.addEventListener("mouseover", ()=> {
    sato.classList.toggle("clickable");
});
sato.addEventListener("mouseout", ()=> {
    sato.classList.toggle("clickable");
});

techm.addEventListener("mouseover", ()=> {
    techm.classList.toggle("clickable");
});
techm.addEventListener("mouseout", ()=> {
    techm.classList.toggle("clickable");
});

opsp.addEventListener("mouseover", ()=> {
    opsp.classList.toggle("clickable");
});
opsp.addEventListener("mouseout", ()=> {
    opsp.classList.toggle("clickable");
});

opbmxc1.addEventListener("mouseover", ()=> {
    opbmxc1.classList.toggle("clickable");
});
opbmxc1.addEventListener("mouseout", ()=> {
    opbmxc1.classList.toggle("clickable");
});

wood.addEventListener("mouseover", ()=> {
    wood.classList.toggle("clickable");
});
wood.addEventListener("mouseout", ()=> {
    wood.classList.toggle("clickable");
});



