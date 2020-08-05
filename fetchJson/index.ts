import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1'

//to get correct properties nit found error
interface Todo {
  id: number
  title: string
  completed: boolean
}
axios.get(url).then(response => {
  const todo = response.data as Todo

  //const { id, title, completed } = todo
  const id = todo.id
  const title = todo.title
  const completed = todo.completed
  logTodo (id, title, completed)

})

//to prevent parameter order mismatch
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    Ihe todo id= ${id} has title = ${title}
    and its status = ${completed}
  `)
}

