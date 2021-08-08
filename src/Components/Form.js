import React from "react";

/* to make a component use const or form */
const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (e) => {
        //the event tells information about what just happened on the input
        console.log(e.target.value);
        //sets setInputText to our e.target.value
        setInputText(e.target.value); 
    };

    const submitTodoHandler = (e) => {
        //everytime we would press the submit button, the page refreshes, so this will prevent the page from refreshing when we press submit
        e.preventDefault();
        setTodos([
            //spread syntax (...) allows an array expression or string to be expanded in places where 0 or more arguments or elements are expected
            //in the {} is if a new tast is entered, and its format
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000},
        ]);
        //resets the state back to 0 so that the text is no longer in the text form
        setInputText('');
    };
    
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            {/* everytime this input is changed, inputTextHandler will run */}
            <input 
                value={inputText}
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" 
                placeholder="Enter task"
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;