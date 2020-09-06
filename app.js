let arrayPerson = [{ id: "1", name: 'yehuda1', score: 0, first: "false" },
{ id: "2", name: 'yehuda2', score: 0, first: "false" },
{ id: "3", name: 'yehuda3', score: 0, first: "false" },
{ id: "4", name: 'yehuda4', score: 0, first: "false" },
{ id: "5", name: 'yehuda5', score: 0, first: "false" }]
let listContainer = document.querySelector("#list");
let data;
data = localStorage.getItem("LEADER");
if(data){
    arrayPerson = JSON.parse(data);
}else{
    arrayPerson = [{ id: "1", name: 'yehuda1', score: 0, first: "false" },
    { id: "2", name: 'yehuda2', score: 0, first: "false" },
    { id: "3", name: 'yehuda3', score: 0, first: "false" },
    { id: "4", name: 'yehuda4', score: 0, first: "false" },
    { id: "5", name: 'yehuda5', score: 0, first: "false" }]
}



function render() {

    listContainer.innerHTML = "";
    arrayPerson.forEach((person) => {
        listContainer.innerHTML += `
                 <li class="item">
                 <p class="text ${person.first}">${person.name}   : ${person.score} <i id=${person.id} onclick="addScore(event.target.id)"  class="fa fa-thumbs-up pluss"></i><i id=${person.id} onclick="subScore(event.target.id)" class="fa fa-thumbs-down"></i>  </p>
                 </li>
`});
    
    localStorage.setItem("LEADER", JSON.stringify(arrayPerson));

}
render();
var plusButton = document.querySelectorAll(".plus");
function addScore(id) {
    arrayPerson.forEach((person) => {
        person.first = "false";
        if (person.id == id) {
            person.score = person.score + 100;
            arrayPerson.sort((a, b) => b.score - a.score);
            arrayPerson[0].first = "first";
            render();
            return;
        }
    })
}
function subScore(id) {
    arrayPerson.forEach((person) => {
        if (person.id == id) {
            person.score = person.score - 100;
        }
    })
    arrayPerson.sort((a, b) => b.score - a.score)
    render();
}

const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
const dateElement = document.getElementById("date");
const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
dateElement.innerHTML = today.toLocaleDateString("en-US", options);