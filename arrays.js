// //-------------Task1 Start
 let shoppingList = [];

// function addItem(item) {
//   shoppingList.push(item);
// }

// function removeLastItem() {
//   shoppingList.pop();
// }

// function displayList() {
//   console.log(shoppingList);
// }

// addItem("Apple");
// addItem("Mango");
// displayList(); // ["Apple", "Mango"]

// removeLastItem();
// displayList(); // ["Apple"]
// //----Task 1 End

// //Task 2 start


// function addItem(item) {
//   const alreadyExists = shoppingList.some(
//     (existingItem) => existingItem.toLowerCase() === item.toLowerCase()
//   );

//   if (!alreadyExists) {
//     shoppingList.push(item);
//   }
// }

// function filterItems(searchTerm) {
//   return shoppingList.filter((item) =>
//     item.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// }

// addItem("Mango");
// addItem("Apple");
// addItem("mango"); // Not added because "Mango" is already in the list

// console.log(shoppingList);          // ["Mango", "Apple"]
// console.log(filterItems("app"));    // ["Apple"]
// //Task 2 End

///Task 3 start


const itemInput = document.getElementById("itemInput");
const listDisplay = document.getElementById("shoppingListDisplay");

function displayList() {
  listDisplay.replaceChildren();

  shoppingList.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listDisplay.appendChild(listItem);
  });
}

function addItem() {
  const item = itemInput.value.trim();

  if (item === "") {
    return;
  }

  const alreadyExists = shoppingList.some(
    (existingItem) => existingItem.toLowerCase() === item.toLowerCase()
  );

  if (!alreadyExists) {
    shoppingList.push(item);
    displayList();
  }

  itemInput.value = "";
  itemInput.focus();
}

function removeLastItem() {
  shoppingList.pop();
  displayList();
}

document.getElementById("addButton").addEventListener("click", addItem);
document.getElementById("removeButton").addEventListener("click", removeLastItem);

///Task 3 End