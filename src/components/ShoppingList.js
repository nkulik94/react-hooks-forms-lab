import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, onItemFormSubmit }) {
  //const [itemList, updateList] = useState(items)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, updateSearch] = useState('')
  const [newItemName, changeName] = useState('')
  const [newItemCat, changeCat] = useState('Produce')

  function handleNewItemDetails(e) {
    e.target.name === 'name' ? changeName(e.target.value) : changeCat(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(e) {
    updateSearch(e.target.value)
  }

  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === '') return true;

    if (search === '') return item.category === selectedCategory;

    return item.name.toUpperCase().match(search.toUpperCase()) !== null

  });

  return (
    <div className="ShoppingList">
      <ItemForm name={newItemName} categoryName={newItemCat} onFormChange={handleNewItemDetails} onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
