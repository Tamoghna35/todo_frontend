import React, { useState } from "react";
import "./SearchComponentStyle.css";

import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
        
const SearchComponent = (props) => {
  const {searchTodo,setSearchTodo} =props
  const [value, setValue] = useState("");

  return (
    <InputText
      value={searchTodo}
      onChange={(e) => setSearchTodo(e.target.value)}
      placeholder="Search item"
      className="searchComponent"
    />
  );
};

export default SearchComponent;
