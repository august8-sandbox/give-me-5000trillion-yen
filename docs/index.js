const sync = (input, id) => {
  const target = document.getElementById(id);
  target.setAttribute("data-text", input.value);
  target.innerText = input.value;
}
