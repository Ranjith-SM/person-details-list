let persons = [
  { id: 1, name: "ranjith", number: 6382935538 },
  { id: 2, name: "kaviya", number: 9361452737 },
  { id: 3, name: "keerthana", number: 9876543210 },
  { id: 4, name: "mohan", number: 7547783778 },


];

let editid = 0;

const name = document.getElementById("name");
const num = document.getElementById("num");
const list = document.getElementById("list");
const btnRef = document.getElementById("btn");

const editdetails = (id) => {
  editid = id;
  const clickedid = persons.find((person) => person.id === id);
  btnRef.innerText = "Edit";
  // console.log(clickedid);
  name.value = clickedid.name;
  num.value = clickedid.number;
};

const deletedetails = (id) => {
  persons = persons.filter((person) => {
    if (person.id !== id) {
      return person;
    }
  });
  render();
};

const render = () => {
  let person = "";

  for (let x of persons) {
    person += `<div class="d-flex align-items-center justify-content-between p-2 bg-info bg-opacity-10 border border-info  rounded-end"  >
                    <p class="fs-5 m-0 col-5 text-light" >${x.name}</p>
                    <p class="fs-5 m-0 col-5 text-light">${x.number}</p>
                    <div>
                

                      <button onclick="editdetails(${x.id})" class="btn  btn-info">Edit</button>
                      <button onclick="deletedetails(${x.id})" class="btn btn-danger ms-3">Delete</button>
                    </div>
                  </div>`;
  }
    list.innerHTML = person;
};

btnRef.addEventListener("click", () => {
  if (name.value !== "" && num.value !== "") {
    if (editid === 0) {
      persons.push({ name: name.value, number: num.value });
      name.value = "";
      num.value = "";
    } else {
      persons = persons.map((person) => {
        if (person.id == editid)
          return { ...person, name: name.value, number: num.value };
        else return person;
      });
    }
    editid = 0;
    name.value = "";
    num.value = "";
    btnRef.innerText = "Add";
    render();
  } else {
    name.classList.replace("border-primary", "is-invalid");
    num.classList.replace("border-primary", "is-invalid");
  }
});

name.addEventListener("keyup", () => {
  if (name.value !== "") {
    name.classList.replace("is-invalid", "border-primary");
  } else {
    name.classList.replace("border-primary", "is-invalid");
  }
});

num.addEventListener("keyup", () => {
  if (num.value !== "") {
    num.classList.replace("is-invalid", "border-primary");
  } else {
    num.classList.replace("border-primary", "is-invalid");
  }
});

render();
