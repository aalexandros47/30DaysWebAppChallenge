const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        //adding cross 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //cross item
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); //it will save data in updated browser
}

// Add an event listener to inputBox for keypress event
inputBox.addEventListener("keypress", function(e) {
    if(e.key === "Enter") { // Check if the pressed key is 'Enter'
        addTask(); // Call addTask function
    }
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

//saving data in storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); // Call showTask to display tasks on load
