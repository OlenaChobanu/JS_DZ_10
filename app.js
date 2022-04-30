// У нас есть инпут и конпка
// Вводим текст в инпут, нажимаем на кнопку - появляется новая задачка в контейнере
// Задача в контейнере имеет текст введенный в инпуте, имеет крестик в вархнем правом углу, так же появляется с желтым фоном (задача не выполнена)
// Нажимаем на задачу один раз, бекграунд меняется на зеленый - задача выполнена, нажимаем второй раз - меняет цвет ообратно на желтый.
// Нажимаем на крест - задача удаляется из контейнера.


// Обязательно используем делегирование, и по возможности разбиваем все на функции


const inpE = document.getElementById('input');
const btnE =  document.getElementById('btn');
const errorE =  document.querySelector('.error-cont');
const ulContainerE = document.getElementById('list');

inpE.addEventListener('keyup', validateTodo);
btnE.addEventListener('click', onAddListItem);
ulContainerE.addEventListener('click', onTodoClick);

inpE.focus();
btnE.disabled = true;

function validateTodo (e) {
    if (!e.target.value.trim()) {
        errorE.innerText = 'Type something';
        btnE.disabled = true;
        inpE.focus();
        return;
    }
    if (e.target.value.trim().length <= 3) {
        errorE.innerText = 'Error, length should be > 3';
        btnE.disabled = true;
        inpE.focus();
        return;
    }
    errorE.innerText = '';
    btnE.disabled = false;
    inpE.focus();
}

function onAddListItem() {
    renderElement(createElement('li'), ulContainerE);
    clearValue(inpE);
    inpE.focus();
    btnE.disabled = true;
}

function createElement(tag) {
    const element = `<${tag} class="item" name="todo"
        <div>${inpE.value}</div>
        <button type="button" class="delete" name="delete">x</button>
        </${tag}>`;
    return element;
}

function renderElement(element, container) {
    container.innerHTML += element;
}

function clearVвапlue(e) {
    e.value = '';
}

function onTodoClick(e) {
    [...e.target.attributes].forEach(el => {
        if (el.value === 'todo') {
            completeTodoItem(e.target);
        }
        if (el.value === 'delete') {
            deleteTodoItem(e.target);
        }
    });
}

function completeTodoItem (elem) {
    elem.classList.toggle('list-item-done');
}

function deleteTodoItem (elem) {
    elem.closest('.item').remove();
}