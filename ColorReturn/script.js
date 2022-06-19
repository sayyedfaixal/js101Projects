const red  = document.querySelector(".red"); 
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);
const getBGColor = (selectedElement) =>{
    return window.getComputedStyle(selectedElement).backgroundColor;
};

var c1 = getBGColor(red);
red.addEventListener("mouseenter", () =>{
    center.style.background = c1;
});
var c2 = getBGColor(cyan);
cyan.addEventListener("mouseenter", () =>{
    center.style.background = c2;
});
var c3 = getBGColor(orange);
orange.addEventListener("mouseenter", () =>{
    center.style.background = c3;
});
var c4 = getBGColor(violet);
violet.addEventListener("mouseenter", () =>{
    center.style.background = c4;
});
var c5 = getBGColor(pink);
pink.addEventListener("mouseenter", () =>{
    center.style.background = c5;
});
var c6 = getBGColor(orange);
orange.addEventListener("mouseenter", () =>{
    center.style.background = c6;
});