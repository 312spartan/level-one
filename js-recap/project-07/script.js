const primaryBtn = document.querySelector("button");
const secondaryBtn = document.getElementById("btnById");
const dangerBtn = document.getElementsByClassName("btnByClass")[0];

const message = document.getElementById("message");
const message2 = document.getElementById("message2");
const listItems = document.getElementsByTagName("li");
const allbButtonsN1 = document.querySelectorAll("button");

console.log({
    primaryBtn,
    secondaryBtn,
    dangerBtn,
    message,
    message2,
    listItems,
    allbButtonsN1,
});

function showPrimaryMessage() {
    message.innerText = "primary button click";
    message.classList.add("highlight");
    console.log("fired");
};

function showSecondaryMessage() {
    message2.innerText = "Secondary button clicked!";
    message2.classList.toggle("highlight");
    console.log("Show Secondary Button");
};

function dangerAlert() {
    alert("Danger Button!!!!");
    console.log("Danger button!!!!");
};

function countListItems() {
    console.log(`there are ${listItems.length} liElements Right now`);
};

primaryBtn.addEventListener("click", showPrimaryMessage);

secondaryBtn.addEventListener("click", showSecondaryMessage);

dangerBtn.addEventListener("click", dangerAlert);

allbButtonsN1.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.textContent.trim());

        countListItems();
    });
});


allbButtonsN1.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(`${button.textContent} - logged`);
    }),
    button.addEventListener("click", countListItems);
});