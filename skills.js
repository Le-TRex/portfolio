//Skills //
let dynamique = document.querySelectorAll("p")[0];
let rigoureuse = document.querySelectorAll("p")[2];
let impliquee = document.querySelectorAll("p")[4];
let curieuse = document.querySelectorAll("p")[6];
let bonRelationnel = document.querySelectorAll("p")[8];
let adaptabilite = document.querySelectorAll("p")[10];
let creativite = document.querySelectorAll("p")[12];
let apprentissage = document.querySelectorAll("p")[14];
let organisee = document.querySelectorAll("p")[16];
let proactive = document.querySelectorAll("p")[18];
let pedagogue = document.querySelectorAll("p")[20];

//Make skill description visible //
dynamique.addEventListener("click", () => {
    document.querySelectorAll("p")[1].classList.toggle("visible");
});

rigoureuse.addEventListener("click", () => {
    document.querySelectorAll("p")[3].classList.toggle("visible");
});

impliquee.addEventListener("click", () => {
    document.querySelectorAll("p")[5].classList.toggle("visible");
});

curieuse.addEventListener("click", () => {
    document.querySelectorAll("p")[7].classList.toggle("visible");
});

bonRelationnel.addEventListener("click", () => {
    document.querySelectorAll("p")[9].classList.toggle("visible");
});

adaptabilite.addEventListener("click", () => {
    document.querySelectorAll("p")[11].classList.toggle("visible");
});

creativite.addEventListener("click", () => {
    document.querySelectorAll("p")[13].classList.toggle("visible");
});

apprentissage.addEventListener("click", () => {
    document.querySelectorAll("p")[15].classList.toggle("visible");
});

organisee.addEventListener("click", () => {
    document.querySelectorAll("p")[17].classList.toggle("visible");
});

proactive.addEventListener("click", () => {
    document.querySelectorAll("p")[19].classList.toggle("visible");
});

pedagogue.addEventListener("click", () => {
    document.querySelectorAll("p")[21].classList.toggle("visible");
});

//Make cursor change when over clickable element//
dynamique.addEventListener("mouseover", ()=> {
    dynamique.classList.toggle("clickable");
});
dynamique.addEventListener("mouseout", ()=> {
    dynamique.classList.toggle("clickable");
});

rigoureuse.addEventListener("mouseover", ()=> {
    rigoureuse.classList.toggle("clickable");
});
rigoureuse.addEventListener("mouseout", ()=> {
    rigoureuse.classList.toggle("clickable");
});

impliquee.addEventListener("mouseover", ()=> {
    impliquee.classList.toggle("clickable");
});
impliquee.addEventListener("mouseout", ()=> {
    impliquee.classList.toggle("clickable");
});

curieuse.addEventListener("mouseover", ()=> {
    curieuse.classList.toggle("clickable");
});
curieuse.addEventListener("mouseout", ()=> {
    curieuse.classList.toggle("clickable");
});

bonRelationnel.addEventListener("mouseover", ()=> {
    bonRelationnel.classList.toggle("clickable");
});
bonRelationnel.addEventListener("mouseout", ()=> {
    bonRelationnel.classList.toggle("clickable");
});

adaptabilite.addEventListener("mouseover", ()=> {
    adaptabilite.classList.toggle("clickable");
});
adaptabilite.addEventListener("mouseout", ()=> {
    adaptabilite.classList.toggle("clickable");
});

creativite.addEventListener("mouseover", ()=> {
    creativite.classList.toggle("clickable");
});
creativite.addEventListener("mouseout", ()=> {
    creativite.classList.toggle("clickable");
});

apprentissage.addEventListener("mouseover", ()=> {
    apprentissage.classList.toggle("clickable");
});
apprentissage.addEventListener("mouseout", ()=> {
    apprentissage.classList.toggle("clickable");
});

organisee.addEventListener("mouseover", ()=> {
    organisee.classList.toggle("clickable");
});
organisee.addEventListener("mouseout", ()=> {
    organisee.classList.toggle("clickable");
});

proactive.addEventListener("mouseover", ()=> {
    proactive.classList.toggle("clickable");
});
proactive.addEventListener("mouseout", ()=> {
    proactive.classList.toggle("clickable");
});

pedagogue.addEventListener("mouseover", ()=> {
    pedagogue.classList.toggle("clickable");
});
pedagogue.addEventListener("mouseout", ()=> {
    pedagogue.classList.toggle("clickable");
});