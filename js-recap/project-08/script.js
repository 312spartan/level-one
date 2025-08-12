console.log("Hello World!!");


let guestlist = [];

const guestInput = document.getElementById("guestInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const guestList = document.getElementById("guestList");
const totalCount = document.getElementById("totalCount");
const clearBtn = document.getElementById("clearBtn");

let guests = ["Cody", "Bryan", "Zach"];


function renderList() {

    clearBtn.addEventListener ('click', function clearContent() {

    const contentElement = document.getElementById("guestList");

    if (contentElement) {
        contentElement.innerHTML = "";
    }
})

    guests.forEach (guests => {
        const liElement = document.createElement('li');

        HTMLDataListElement.innerText = guests;

        ulElement.appendChild(liElement);
    }) 


}

for (let i = 0; i < guests.length; i++) {
    console.log(guests[i]);
}

addBtn.addEventListener ('click', function handleAdd() {
    const enterGuest = document.getElementById("guestInput");
    document.getElementById("totalCount").innerText = `Total guests: ${totalCount}`;

    if (guestInput === '') {
        alert('Please enter a name into the field.'); 
    } else {
        console.log(totalCount);
    }
})


