let but=document.querySelector('#but');
let Name=document.querySelector('#Name');
let cont=document.querySelector('#cont');
let ul = document.querySelector("ul");

cli = [
    Name.value+":"+cont.value
];

function show(UlElement, ajout) {
    let i = 0;
    UlElement.innerHTML += `<li>${cli[i]}</li>`;
    i++;}


    but.addEventListener('click', function() {
        show(ul,cli);});