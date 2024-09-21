
let input=document.querySelector(".cinput");
let showcolor=document.querySelector(".cshow");

input.addEventListener("input",()=>{
    showcolor.style.backgroundColor=input.value;
    showcolor.innerHTML=(input.value);
});

