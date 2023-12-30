const submitBtn = document.getElementById("submit");
const header  = document.getElementById("header");
function ready(){
    const name = new URL(window.location).searchParams.get("name");
    header.innerHTML = name;
}
ready();