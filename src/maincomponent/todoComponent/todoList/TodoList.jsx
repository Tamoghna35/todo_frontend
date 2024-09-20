import React from "react";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import "./TodoListStyle.css";
const TodoList = () => {
  return (
    <div>
      <div className="main_todo">
        <div className="todoName_description">
          <div>TodoName</div>
          <div>Todo Description</div>
        </div>
        <div className="statusButton">
          <div className="lable-style">
            <RadioButton inputId="ingredient1" name="pizza" />
            <label htmlFor="ingredient1" className="ml-2">
              Not yet Started
            </label>
          </div>
          <div className="lable-style">
            <RadioButton inputId="ingredient1" name="pizza" />
            <label htmlFor="ingredient1" className="ml-2">
              In progress
            </label>
          </div>
          <div className="lable-style">
            <RadioButton inputId="ingredient1" name="pizza" />
            <label htmlFor="ingredient1" className="ml-2">
              Completed
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
