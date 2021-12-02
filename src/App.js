import React from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import {useState} from 'react'
import AddForm from './components/AddForm';
import Search from './components/Search';
import 'bulma/css/bulma.css';

function App() {
  const [foodsArray, setFoods] =  useState(foods)
  const [form, setForm] = useState(false)
  const [foodsArrayCopy, setFoodsCopy] = useState(foods)

  function handleToggle(){
    
    setForm(!form)
  }

  function handleSubmit(event){
    event.preventDefault()
    let newFood = {
      name: event.target.name.value, 
      calories: event.target.price.value,
      img: event.target.image.value
    }
    setFoods([newFood, ...foodsArray])
    setForm(false)
  }
  return (
   
    <div className="App">
      {form ? <AddForm onSubmit={handleSubmit}/> : <button onClick={handleToggle}>Show Button</button>}
     
     {
      foodsArray.map((elem,i) =>{
        return (
          
            <div key={i}>
            <FoodBox foodsArray={elem}/>
            </div>
          )
        })
      }
      
    </div>
  );
}

export default App;
