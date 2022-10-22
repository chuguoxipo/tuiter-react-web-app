import TodoItem from "./todo-item";
import todos from "./todos.json";
import Nav from "../../../nav";
const TodoList = () => {

  return(
      <>
        <Nav/>
        <h3>Todo List</h3>
        <ul>
          {
            todos.map(todo => {
              return(<TodoItem todo={todo}/>);
            })
          }
        </ul>
      </>
  );
}
export default TodoList;