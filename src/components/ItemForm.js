import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, name, categoryName, onFormChange }) {

  // const newItem = {
  //   id: uuid(),
  //   name: newItemName,
  //   category: newItemCat
  // };

  const [newItemName, changeName] = useState('')
  const [newItemCat, changeCat] = useState('Produce')
  function handleSubmit(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: newItemName,
      category: newItemCat
    };
    console.log('new item', newItem)
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e) => changeName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={categoryName} onChange={(e) => changeCat(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
