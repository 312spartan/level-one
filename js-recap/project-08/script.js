console.log("Hello World!!");


let guestlist = [];

const guestInput = document.getElementById("guestInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const guestList = document.getElementById("guestList");
const totalCount = document.getElementById("totalCount");
const clearBtn = document.getElementById("clearBtn");

let guests = ["Cody", "Bryan", "Zach"];

// ---------- STEP 3: Create a function called renderList() ----------
// Inside the function:
// 3.1 – Clear the existing <ul> content using innerHTML
// 3.2 – Use a for loop to go through guestList
// 3.3 – For each name:
//       - create a new <li> element
//       - set its innerText to the guest name
//       - append it to the <ul>
// 3.4 – Update the totalCount paragraph with guestList.length


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


