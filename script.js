console.log("Arquivo externo!");

let btnToggleTheme = document.querySelector(".toggleTheme");
// console.log(btnToggleTheme);
let body = document.querySelector("body");

// btnToggleTheme.onclick = function(event) {
// Arrow function: sintaxe sofisticada de function
btnToggleTheme.onclick = (event) => {
    body.classList.toggle("dark-theme");
    iframe.style.cssText = "filter: invert(90%)";

    // let cafeDaManha = false;

    // if (cafeDaManha) {
    //     console.log("Tô de bom humor!");
    // } else {
    //     console.log("Sem tempo, irmão!");
    // }
    
    // if ternário: (condição) ? true : false;
    // console.log((cafeDaManha) ? 'Tô de bom humor' : 'Sem tempo, irmão!');
}