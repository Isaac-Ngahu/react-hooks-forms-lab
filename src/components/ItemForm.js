import React from "react";


function ItemForm({handleChange,handleSubmit,itemName}) {
  
 

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" id="name" value={itemName} onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">produce</option>  
          <option value="Dairy" >Dairy</option>
          <option value="Dessert" >Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
