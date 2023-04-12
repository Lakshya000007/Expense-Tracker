const ul = document.getElementById("ul");
console.log(ul);

const button = document.getElementById("btn");
console.log(button);

const expenseName = document.getElementById("expenseName");
console.log(expenseName);

const expenseDescription = document.getElementById("expenseDescription");
console.log(expenseDescription);

const expenseType = document.getElementById("expenseType");
console.log(expenseType);

const clickFunction = (e) => {
  e.preventDefault();
  if (
    expenseName.value.trim() &&
    expenseDescription.value.trim() &&
    expenseType.value.trim() != ""
  ) {
    console.log("Button Clicked");
    const li = document.createElement("li");
    li.classList = "d-flex flex-row align-items-center justify-content-between";
    console.log(li);
    console.log(expenseType.value);
    let p = document.createElement("p");
    li.appendChild(p).innerHTML = `${expenseName.value}`;

    p = document.createElement("p");
    li.appendChild(p).innerHTML = `${expenseDescription.value}`;

    p = document.createElement("p");
    li.appendChild(p).innerHTML = `${expenseType.value}`;

    let editBtn = document.createElement("button");
    editBtn.id = "edit";
    editBtn.classList = "btn btn-secondary";
    editBtn.innerText = "EDIT";
    li.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.id = "delete";
    deleteBtn.classList = "btn btn-danger";
    deleteBtn.innerText = "DELETE";
    li.appendChild(deleteBtn);

    ul.appendChild(li);
    console.log(ul);

    setTimeout(() => {
      expenseName.value = "";
      expenseDescription.value = "";
    }, 500);

    const obj = {
      Cost: `${expenseName.value}`,
      Data: `${expenseDescription.value}`,
      Type: `${expenseType.value}`,
    };

    const id = Date.now();
    localStorage.setItem(id, JSON.stringify(obj));
    li.id = id;
  }
};

button.addEventListener("click", clickFunction);

console.log(ul);

const deleteItem = (e) => {
  if (e.target.id == "delete") {
    console.log(e.target.id);
    const parent = e.target.parentElement;
    console.log(parent);
    localStorage.removeItem(parent.id);
    ul.removeChild(parent);
  }
};

const EditItem = (e) => {
  if (e.target.id == "edit") {
    console.log(e.target.id);
    const parent = e.target.parentElement;
    expenseName.value = parent.children[0].innerText;
    expenseDescription.value = parent.children[1].innerText;
    expenseType.value = parent.children[2].innerText;
    ul.removeChild(parent);
    localStorage.removeItem(parent.id);
  }
};

ul.addEventListener("click", deleteItem);
ul.addEventListener("click", EditItem);
