var mainHeader = document.querySelector(".main-header");
var body = document.querySelector("body");
var sidebar = document.querySelector(".sidebar");
var maincontent = document.querySelector(".maincontent");

var select = document.querySelector("#select");
select.addEventListener("change", runEvent);

function runEvent(e) {
    document.querySelector('input[type="text"]').innerHTML = e.target.value;
}

// var them = document
//     .getElementById("them")
//     .addEventListener("click", changeThem);

// function changeThem() {
//     mainHeader.style.backgroundColor = "blue";
//     body.style.backgroundColor = "black";
//     sidebar.style.backgroundColor = "red";
//     maincontent.style.backgroundColor = "green";
//     item.style.backgroundColor = "blue";
// }

// var accountName = document.getElementsByClassName("acount-name");
// accountName.textContent = "Abdul saboor Hemat";