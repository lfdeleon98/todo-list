import React from "react";

import Todo from "./Todo";
//parent component
const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                        text={todo.text} 
                        key={todo.id}
                        setTodos={setTodos}
                        todo={todo}
                        todos={todos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;