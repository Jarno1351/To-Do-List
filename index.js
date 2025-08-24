const itemCont = document.getElementById(`items`);
const input = document.getElementById(`inputItems`)
let items = ["Delete Me!"];

function renderItems(){
    itemCont.innerHTML = null;

    for(const [idx, value] of Object.entries(items)){
        const container = document.createElement('div')
        container.classList.add("container")

        const text = document.createElement("p")
        text.textContent = `${Number(idx) + 1}. ${value}`
        text.classList.add("text")

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.classList.add("button")
        button.onclick = () => deleteItems(idx)


        
        container.appendChild(text)
        container.appendChild(button)
        itemCont.appendChild(container)
    }
}
function addItems(){
    const value = input.value;
    if(!value){
        alert("Please enter a value!")
    }
    else{
        items.push(value)
        saveItems()
        renderItems()
        input.value = ""
    }
    
}

function saveItems(){
    const values = JSON.stringify(items)
    localStorage.setItem("items", values)
}

function loadItems(){
    let itemsVal = localStorage.getItem("items")
    if (itemsVal){
        items = JSON.parse(itemsVal)
    }
    else{
        items = ["Delete Me!"]
    }
    renderItems()
}

function deleteItems(idx){
    items.splice(idx, 1)
    saveItems()
    renderItems()
}

addEventListener("DOMContentLoaded", loadItems())
