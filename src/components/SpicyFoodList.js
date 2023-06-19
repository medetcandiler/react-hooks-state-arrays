import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";
import Select from "./Select";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filter, setFilter ] = useState('All');


  const handleClick = (id) => {
    const newArr = foods.map(food => {
      if(food.id === id ){
        return {
          ...food,
          heatLevel: food.heatLevel + 1
        }
      } else {
        return food
      }
    })
    setFoods(newArr)

  }

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods(prev => [...prev, newFood])
  }

  console.log(foods)

  // const handleDelete = (id) => {
  //   const newFoodArr = foods.filter(food => food.id !== id)
  //   setFoods(newFoodArr)
  // }
    
  const onSelectHandler = (e) => {
    setFilter(e.target.value);
  }

  const toDisplay = foods.filter(food => {
    if( filter === 'All') { return true};

    return food.cuisine === filter
  })

  const foodList = toDisplay.map((food) => (
    <li onClick={() => handleClick(food.id)} key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <Select onSelectHandler={onSelectHandler}/>
    </div>
  );
}

export default SpicyFoodList;
