let AddBtn = document.querySelector(".addToDoList");
let input = document.querySelector(".sub-container input");
let ul = document.querySelector("#list-container");

function addTask(){
    if(input.value === ''){
        alert("You must write something")
    }else{
        let  li = document.createElement("li");
        li.innerText = input.value;
        ul.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = 'x';
        li.appendChild(span)
    } 
    input.value = '';
    saveData();
}

AddBtn.addEventListener("click", addTask)

ul.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.parentElement.setAttribute("class", "selected")
        e.target.classList.toggle("selected")
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData();
    }
 })
       
function saveData(){
    localStorage.setItem("data", ul.innerHTML);
}

function show(){
    ul.innerHTML = localStorage.getItem("data");
}

show();