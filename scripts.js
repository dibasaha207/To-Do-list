const inputt = document.getElementById("inputText");
const list = document.getElementById("listContent");

function addtask() {
    const value = inputt.value; // Corrected to get the value of the input field
    if (value === '') {
        alert("You must enter text");
    } else {
        let li = document.createElement("li");
        li.innerHTML = value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputt.value = ''; // Corrected to clear the input field
    savedata();
}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Corrected to use classList
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", list.innerHTML);
}

function show() {
    list.innerHTML = localStorage.getItem("data");
}

show();
