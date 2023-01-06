const inpt = document.getElementById("inpt");
const btn = document.getElementById("btn");
const form = document.querySelector(".form")
const todoli = document.querySelector(".todoli")
const main = document.querySelector("main");
let drager = null ;


btn.addEventListener("click", eo => {
    eo.preventDefault();

    if (inpt.value.trim() == "") {
        return false
    }
    let task = `

    <div class="blocker" draggable ="true">
    <div class="item">
        <p>${inpt.value}</p>
    </div>
    <div class="date">
        <span id="dateit">${new Date().toLocaleTimeString([], {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    })}</span>
        <span class="material-symbols-outlined trash">delete</span>
    </div>
</div>

`
    todoli.innerHTML += task;
    inpt.value = "";
    drageitems();
})

main.addEventListener("click", eoo => {
    if (eoo.target.className == "material-symbols-outlined trash") {
        eoo.target.parentElement.parentElement.remove();
    }
})

function drageitems() {
    let blockeer = document.querySelectorAll(".blocker");
    blockeer.forEach(element => {
    
        element.addEventListener("dragstart",function(){
            drager = element ; 
        });
        element.addEventListener("dragend",function(){
            drager = null ; 
        });

 let boxes = document.querySelectorAll(".boxes")

 boxes.forEach(items => {
    
    items.addEventListener("dragover",function(e){
        e.preventDefault();
    });
    items.addEventListener("drop",function(){
        this.append(drager);
        this.style = `
        backgroundcolor
        `
    });





});


});



    
}
