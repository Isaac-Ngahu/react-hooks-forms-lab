import React from "react";

function Filter({ onCategoryChange,onSearchChange,search, category }) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search by name..." value={search} onChange={onSearchChange}/>
      <button type="submit">search</button>
      <select name="filter" onChange={onCategoryChange}>
        <option name="All" value={category.All}>Filter by category</option>
        <option name="Produce" value={category.Produce}>Produce</option>
        <option name="Dairy" value={category.Dairy}>Dairy</option>
        <option name="Dessert" value={category.Dessert}>Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
