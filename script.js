document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('todo-input');
  const addButton = document.getElementById('add-btn');
  const todoList = document.getElementById('todo-list');

  addButton.addEventListener('click', addTodo);

  function addTodo() {
    const todoText = input.value.trim();
    if (todoText === '') {
      alert('Please enter a task.');
      return;
    }

    const li = document.createElement('li');
    li.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
      li.remove();
    });

    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);

    input.value = '';
  }
});