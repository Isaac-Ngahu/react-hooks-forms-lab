import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
   const [newItem, setNewItem] = useState({
    name:"default",
    category:"Produce"
});
  
   const [searchName,setSearchName]=useState("")
  function handleChange(e,){
    const value=e.target.value
    const key=e.target.id
setNewItem({...newItem,id:uuid(),[key]:value,category:value})
// console.log(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
   
  }
  const newObj=[{id:uuid(),
    ...newItem,
    category:newItem
  }]

const [category,setCategory]=useState({
  All:"All",
  Produce:"Produce",
  Dairy:"Dairy",
  Dessert:"Dessert"
})
const [state,setState]=useState(false)
  function handleCategoryChange(event) {
    const value=event.target.value
     const name=event.target.name
    // console.log(`${value} ${name}`)
    setCategory({...category,[name]:value});
    setState(!state)
  }
function handleSearchChange(e){
  const lowerCase=e.target.value  
 setSearchName(lowerCase)
setState(state) 
}

// console.log(newItem)
// const newArray=[...newItem]

// console.log(e.target)
  const itemsToDisplay = items.filter((item) => {
    if (category.All === "All") return true;

    return item.category === category;
  });
  const searchItems=items.filter((item)=>{
    if(searchName==="")return true;

    return item.name.toLowerCase().includes(searchName)
  });

  return (
    <div className="ShoppingList">
      <ItemForm newItem={newItem}  handleChange={handleChange} handleSubmit={handleSubmit} />
      <Filter onCategoryChange={handleCategoryChange} search={searchName} category={category} onSearchChange={handleSearchChange} />
      <ul className="Items">
        { state ? searchItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        )): itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
<ul>{newObj.map((item) => (<Item key={item.id} value={item.name} category={item.category}/>))}</ul>
    </div>
  );
}

export default ShoppingList;
