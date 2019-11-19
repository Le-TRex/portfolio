let trex = document.querySelectorAll("li")[0];
let square = document.querySelectorAll("li")[1];
let cat = document.querySelectorAll("li")[2];

let trexproj = document.querySelectorAll("div")[4];
let squareproj = document.querySelectorAll("div")[5];
let catproj = document.querySelectorAll("div")[6];

trex.addEventListener("click", ()=>{
    trexproj.classList.add("visible");
    squareproj.classList.remove("visible");
    catproj.classList.remove("visible");
});

square.addEventListener("click", () => {
    squareproj.classList.add("visible");
    trexproj.classList.remove("visible");
    catproj.classList.remove("visible");

});

cat.addEventListener("click", () => {
    catproj.classList.add("visible");
    trexproj.classList.remove("visible");
    squareproj.classList.remove("visible");
});

trex.addEventListener("mouseover", ()=> {
    trex.classList.toggle("clickable");
});
trex.addEventListener("mouseout", ()=> {
    trex.classList.toggle("clickable");
});

square.addEventListener("mouseover", ()=> {
    square.classList.toggle("clickable");
});
square.addEventListener("mouseout", ()=> {
    square.classList.toggle("clickable");
});

cat.addEventListener("mouseover", ()=> {
    cat.classList.toggle("clickable");
});
cat.addEventListener("mouseout", ()=> {
    cat.classList.toggle("clickable");
});