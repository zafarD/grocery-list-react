import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import Form from "./Form";
import Items from "./Items";

const setLocalItems = (localItems) => {
  localStorage.setItem("groceryList",JSON.stringify(localItems))
}
const getLocalItems = () => {
  let localItems = localStorage.getItem("groceryList")
  if(localItems) {
    localItems = JSON.parse(localStorage.getItem("groceryList"))
  }
  else {
    localItems = []
  }
  return localItems
}

const App = () => {
  const [items, setItems] = useState(getLocalItems())
  // Add item
  const addItem = (newName) => {
    const newItem = {
      name: newName,
      completed: false,
      id: nanoid()
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalItems(newItems)
    toast.success('Item added to the list')
  }
  //Remove item
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    setLocalItems(newItems)
    toast.success('Item removed from list')
  }
  //Edit Item
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if(item.id === itemId) {
        const newItem = {...item, completed: !item.completed}
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalItems(newItems)
  }

  return (
    <section className="section-center ">
      <ToastContainer position="top-center"/>
      <Form addItem={addItem} />
      <Items items={items}
        removeItem={removeItem}
        editItem={editItem} />
    </section>
  )
};

export default App;
