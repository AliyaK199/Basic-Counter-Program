const decreasebtn = document.getElementById("decrement");
const increasebtn = document.getElementById("increment");
const resetbtn = document.getElementById("reset");
const counter = document.getElementById("counter");

let count = 0;

decreasebtn.onclick = function() {
    count--;
    counter.textContent = count;
}

increasebtn.onclick = function() {
    count++;
    counter.textContent = count;
}

resetbtn.onclick = function () {
    count=0;
    counter.textContent = count;
}
