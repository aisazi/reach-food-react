import React, { useState } from "react";
import "./App.css";
import { data } from "./data";
import List from "./List";

function App() {
  const [specificFoods, setSpecificFoods] = useState([]);
  const [inputVal, setInputVal] = useState("");

  let foodTypes = {};
  data.forEach((obj) => {
    foodTypes[obj.category] = obj.category;
  });
  foodTypes = Object.values(foodTypes);
  foodTypes.unshift("all");
  const selectCatefory = (foodName) => {
    if (foodName == "all") {
      setSpecificFoods(data);
      return;
    }
    const selectedFood = data.filter((obj) => {
      if (obj.category == foodName) {
        return obj;
      }
    });
    setSpecificFoods(selectedFood);
  };

  const searchFood = (val) => {
    const filteredData = data.filter((item) => {
      const foodName = item.category.toLocaleLowerCase().trim();
      val = val.toLocaleLowerCase().trim();
      if (foodName == val) {
        return item;
      }
    });
    setSpecificFoods(filteredData);
    setInputVal(val);
  };

  return (
    <div>
      <header>
        <img id="logo" src="./images/rLogo.png" />
        <div id="title">Restaurant Menu</div>
      </header>
      <div className="menu-buttons">
        {foodTypes.map((categoryName) => {
          return (
            <button
              key={categoryName}
              onClick={() => selectCatefory(categoryName)}
              className="menu-btn"
            >
              {categoryName}
            </button>
          );
        })}
      </div>
      <div id="search">
        <input
          value={inputVal}
          onChange={(e) => searchFood(e.target.value)}
          type="text"
          id="search-input"
          placeholder="Search..."
        />
      </div>
      <main>
        {specificFoods.map((item) => {
          return <List food={item} />;
        })}
      </main>
    </div>
  );
}

export default App;
