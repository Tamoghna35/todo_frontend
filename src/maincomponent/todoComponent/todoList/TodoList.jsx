import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import "./TodoListStyle.css";
import axios from "axios";
import Cookies from "js-cookie";

const TodoList = ({ searchTodo }) => {
  const [todoList, setTodoList] = useState([]);
  const[selectedTask, stSelectedTask] = useState({})

  useEffect(() => {
    const fetchTodo = async () => {
      const accessToken = Cookies.get("accessToken");
      const refreshToken = Cookies.get("refreshToken");
      if (!accessToken) return; // Check if the user is authenticated
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/todo/getAllTasksforUser",
          {
            withCredentials: true, // Include cookies (accessToken)
          }
        );

        console.log("todoList in TodoList before set ===>", todoList);

        setTodoList(response.data.data);
        // console.log("todoList in TodoList after set ===>", todoList);
      } catch (error) {
        console.error("Error Fetching the todos", error);
      }
    };
    fetchTodo();
  }, []);
  console.log("todoList in TodoList after set ===>", todoList);
  // Filter todos based on search term
  const filteredTodos = todoList.filter((todo) =>
    todo.title.toLowerCase().includes(searchTodo.toLowerCase())
  );
  return (
    <div>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <div className="main_todo">
            <div className="todoName_description">
              <div>{todo.title}</div>
              <div>{todo.description}</div>
            </div>
            <div className="statusButton">
              {/* Radio button for "Yet to start" */}
              <div className="lable-style">
                <RadioButton
                  inputId={`notStarted-${todo._id}`}
                  name={`status-${todo._id}`}
                  value="Yet to start"
                  checked={todo.status === "Yet to start"}
                />
                <label htmlFor={`notStarted-${todo._id}`} className="ml-2">
                  Yet to start
                </label>
              </div>

              {/* Radio button for "In progress" */}
              <div className="lable-style">
                <RadioButton
                  inputId={`inProgress-${todo._id}`}
                  name={`status-${todo._id}`}
                  value="in progress"
                  checked={todo.status === "in progress"}
                />
                <label htmlFor={`inProgress-${todo._id}`} className="ml-2">
                  In progress
                </label>
              </div>

              {/* Radio button for "Completed" */}
              <div className="lable-style">
                <RadioButton
                  inputId={`completed-${todo._id}`}
                  name={`status-${todo._id}`}
                  value="completed"
                  checked={todo.status === "completed"}
                />
                <label htmlFor={`completed-${todo._id}`} className="ml-2">
                  Completed
                </label>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No todo Found</div>
      )}
    </div>
  );
};

export default TodoList;
