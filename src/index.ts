// typescript doesnt know id btn1 exist or not therefore btn1 could return null
// you can add ! at the end to tell that it is guaranteed not null
// assertion in input make ts know the data inside it by asserting type such as HTMLInputElement
//  because we dont access the btn1 value we dont need to add assertion but its better to add it
const btn1 = document.querySelector("#btn1") as HTMLButtonElement;
const input = document.querySelector("#todosInput")! as HTMLInputElement;
const form = document.querySelector("#formtodos")!;
const list = document.querySelector("#list")!;
// we can also do this kind assertion
// (<HTMLInputElement>input
// ).value;



interface TodoItem {
  name: string;
  checked: boolean;
}

const todos: TodoItem[] = getLocal();
todos.forEach(createTodoElement)

function getLocal(): TodoItem[] {
//   const localTodo = JSON.parse(localStorage.getItem("todos"));
const localTodo = localStorage.getItem("todos");
  if(localTodo === null) {
    return []
  }
  return JSON.parse(localTodo)
}

function saveToDos() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function submitHandler(ev: Event) {
  ev.preventDefault();
  const newToDo: TodoItem = {
    name: input.value,
    checked: false,
  };

  createTodoElement(newToDo);
  todos.push(newToDo);
  saveToDos()
}

function createTodoElement(todo: TodoItem) {
  const li = document.createElement("li");
  const check = document.createElement("input");
  check.type = "checkbox";
  check.checked = todo.checked
  check.addEventListener('change', function(){
    todo.checked = check.checked 
    saveToDos()
})
  li.append(todo.name);
  li.append(check);
  list.append(li);
}

console.dir(btn1);
form.addEventListener("submit", submitHandler);
// ? mark after variable is to stop execution of a function that return null
// btn1?.addEventListener("click", () => {
//   console.log(input.value);
//   input.value = "";
// });
// es2021
// 'hello'.replaceAll('l', 'i')

// this is type assertion (as) to make sure the types
// let mystery: unknown = "Hi there";
// const leng = (mystery as string).length;
