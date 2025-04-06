document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Add item functionality
    function addTodoItem() {
        const text = todoInput.value.trim();
        
        if (text === '') return;
        
        const li = document.createElement('li');
        li.textContent = text;
        todoList.appendChild(li);
        
        todoInput.value = '';
        todoInput.focus();
    }

    // Button click handler
    addBtn.addEventListener('click', addTodoItem);

    // Enter key handler
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodoItem();
        }
    });
});
