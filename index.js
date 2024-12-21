const backdrop = document.querySelector(`.backdrop`);
const modal = document.querySelector(`.modal`);
const openModal = document.querySelector(`button[data-action="open-modal"]`);
const closeModal = document.querySelector(`button[data-action="close-modal"]`);

function toggleModal() {
  document.body.classList.toggle("show-modal");
}

openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);

///////////////////////////////////////////////////////////////

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop && event.target !== modal) {
    document.body.classList.toggle("show-modal");
  }
});

///////////////////////////////////////////////////////////////

const redRadio = document.querySelector(`[value="red"]`);
const whiteRadio = document.querySelector(`[value="white"]`);
const greenRadio = document.querySelector(`[value="green"]`);
const body = document.querySelector("body");
redRadio.addEventListener("focus", () => {
  body.style.backgroundColor = "red";
});
whiteRadio.addEventListener("focus", () => {
  body.style.backgroundColor = "white";
});
greenRadio.addEventListener("focus", () => {
  body.style.backgroundColor = "green";
});

///////////////////////////////////////////////////////////////

const input = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);

input.addEventListener("input", () => {
  if (input.value === "") {
    output.textContent = "незнайомець";
  } else {
    output.textContent = input.value;
  }
});

///////////////////////////////////////////////////////////////

const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", (event) => {
  if (inputElement.value.length === 6) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  } else {
    if (inputElement.value === "") {
      event.target.classList.remove("invalid");
      event.target.classList.remove("valid");
    } else {
      event.target.classList.remove("valid");
      event.target.classList.add("invalid");
    }
  }
});

///////////////////////////////////////////////////////////////

const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener("input", () => {
  text.style.fontSize = `${range.value}px`;
});
