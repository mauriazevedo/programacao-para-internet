let list = [];
let items = "";

const btn = document.getElementById("submit-btn");
const listHtml = document.getElementById("list");

btn.addEventListener("click", function(e){
    e.preventDefault();
    
    const task = document.getElementById("task");
    const taskValue = task.value;

    list.push(taskValue);

    task.value = "";

    update();
});

function buildList(){
    for(let i = 0; i < list.length; i++){
        items += `<li><div><p>${list[i]}</p><button>Remover</button></div></li>`;
    }
}

function update(){
    buildList();
    listHtml.innerHTML = items;
    items = "";
}