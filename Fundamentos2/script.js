
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

const trybe = (event) => {
    event.preventDefault();
}
 hrefLink.addEventListener('click' ,trybe);

 inputText.addEventListener('keypress', (event) => {
  const character = event.key;
  if (character !== 'a') {
    event.preventDefault();
  }
});
