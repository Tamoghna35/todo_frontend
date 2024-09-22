import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const CreateTodo = () => {
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoStatus, setTodoStatus] = useState("Yet to start");
  const navigateHook = useNavigate();
  const handleTodoName = (e) => {
    setTodoName(e.target.value);
  };
  const handleTodoDescription = (e) => {
    setTodoDescription(e.target.value);
  };
  const handleTodoStatus = (e) => {
    setTodoStatus(e.value);
  };
  const handleTodoCreation = async (e) => {
    e.preventDefault();
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");
    console.log("AccessToken in CreateTodo component===>", accessToken);
    console.log("RefreshToken in CreateTodo component===>", refreshToken);
    if (!accessToken) {
      console.log("User is not authenticated. Redirecting to login.");
      navigateHook("/signin");
      return;
    }
    const creteTodoObject = {
      title: todoName,
      description: todoDescription,
      status: todoStatus,
    };
    console.log(
      "Create tOdo Object ibn CreateTodo component===>",
      creteTodoObject
    );

    try {
      const createTodo = await axios.post(
        "http://localhost:8080/api/v1/todo/createTodo",
        creteTodoObject,
        { withCredentials: true }
      );
      console.log(
        "createTodo in createTodoComponent after hit the API==>",
        createTodo
      );
    } catch (error) {
      console.log("Error while creating todo==>", error.response.data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleTodoCreation}>
        <div className="formFields">
          <div className="fields">
            <label htmlFor="">Enter todo Name</label>
            <InputText
              id="todoName"
              placeholder="Enter TodoName"
              className="p-invalid mr-2"
              type="name"
              value={todoName}
              onChange={handleTodoName}
            />
          </div>

          <div className="fields">
            <label htmlFor="Name">Enter Todo Description</label>
            <InputText
              id="description"
              placeholder="Enter Description"
              type="name"
              className="p-invalid mr-2"
              value={todoDescription}
              onChange={handleTodoDescription}
            />
          </div>
        </div>

        <div className="button-class">
          <div className="statusButton">
            <div className="lable-style">
              <RadioButton
                inputId="ingredient1"
                name="status"
                value="Yet to start"
                onChange={handleTodoStatus}
                checked={todoStatus === "Yet to start"}
              />
              <label htmlFor="ingredient1" className="ml-2">
                Not yet Started
              </label>
            </div>
            <div className="lable-style">
              <RadioButton
                inputId="ingredient1"
                name="status"
                value="in progress"
                onChange={handleTodoStatus}
                checked={todoStatus === "in progress"}
              />
              <label htmlFor="ingredient1" className="ml-2">
                In progress
              </label>
            </div>
            <div className="lable-style">
              <RadioButton
                inputId="ingredient1"
                name="status"
                value="completed"
                onChange={handleTodoStatus}
                checked={todoStatus === "completed"}
              />
              <label htmlFor="ingredient1" className="ml-2">
                Completed
              </label>
            </div>
          </div>
        </div>

        <div className="button-class">
          <Button label="Create Todo" className="buttonStyle" />
          <Button
            label="Check todo"
            className="buttonStyle"
            type="submit"
            onClick={() => navigateHook("/todomain")}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
