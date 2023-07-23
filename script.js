const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please in add your task.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}

listContainer.addEventListener(
  "click",
  function (e) {
    console.log("Event listener callback executed!");
    if (e.target.tagName === "li") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "span") {
      e.target.parentElement.remove();
    }
  },
  false
);
