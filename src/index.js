document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
    form.reset();
  })
});

function buildToDo(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  let priorityValue = document.querySelector('select').value;
  let userName = document.querySelector('#user_name').value;
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'X';
  p.textContent = `${userName}: ${todo} `;
  p.style.color = getColorFromValue(priorityValue);
  p.appendChild(btn);
  console.log(priorityValue);
  document.getElementById(priorityValue).appendChild(p).contentEditable = "true";
};

function handleDelete(e) {
  e.target.parentNode.remove();
}

function getColorFromValue(priorityValue) {
  let color = "";
  switch (priorityValue) {
    case "1":
      color = "red";
      break;
    case "2":
      color = "yellow";
      break;
    case "3":
      color = "green";
      break;
  }
  return color;
}