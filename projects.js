let trex = document.querySelectorAll("li")[0];
let square = document.querySelectorAll("li")[1];
let cat = document.querySelectorAll("li")[2];

// trex.addEventListener("click", ()=>{
//     document.querySelectorAll("div")[3].classList.add("visible");
//     document.querySelectorAll("div")[4].classList.add("invisible");
//     document.querySelectorAll("div")[5].classList.add("invisible");
// });

// square.addEventListener("click", () => {
//     document.querySelectorAll("div")[4].classList.add("visible");
//     document.querySelectorAll("div")[3].classList.add("invisible");
//     document.querySelectorAll("div")[5].classList.add("invisible");

// });

// cat.addEventListener("click", () => {
//     document.querySelectorAll("div")[5].classList.add("visible");
//     document.querySelectorAll("div")[3].classList.add("invisible");
//     document.querySelectorAll("div")[4].classList.add("invisible");
// });

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