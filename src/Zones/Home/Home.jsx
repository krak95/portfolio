import { useState, useMemo, useEffect, useCallback } from "react";
import axios from "axios";
import "./Home.css";
import $ from 'jquery'

function Home() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState([]);

  const handleShowList = async () => {
    const result = await axios.post("http://localhost:5500/getItems");
    console.log("SHOW", result.data);
    setItems(result.data);
  };

  useEffect(() => {
    handleShowList();
  }, []);

  const handleAddItem = async (e) => {
    const mongoObject = {
      item: item,
      price: price,
    };
    const result = await axios.post(
      "http://localhost:5500/addItem",
      mongoObject
    );
    console.log("item added", mongoObject, result);
    setItems(previous  => {return [...previous,mongoObject]})
  };

  const dropMongo = () =>{
    console.log('drop')
axios.post(
        "http://localhost:5500/dropItems");
  }

const checkTodo = async (e) =>{
    e.stopPropagation()
    let el = e.target.getAttribute('a-key')
    console.log(el)
    let el2 = e.target
    $(el2).addClass('done')
    $(el2).removeClass('todo')
    const mongoObject = {
        item: el,
    };
    await axios.post(
        "http://localhost:5500/updateItem", mongoObject);
  }

return (
    <>
      <h1>TODO</h1>
      <div className="mongoadditem">
        <input onChange={(e) => setItem(e.target.value)} type="text" />
        <input onChange={(e) => setPrice(e.target.value)} type="text" />
        <button onClick={handleAddItem}>ADD MONGO</button>
        <button onClick={dropMongo}>DROP</button>
      </div>
      <div className="listofitems">
        <ol>
          {items.map((p) => (
            <li key={p._id}>
                <div onClick={e=>checkTodo(e)} a-key={p.item} key={p._id}>
                ITEM:<p onClick={e=>checkTodo(e)} a-key={p.item} key={p._id} className={p.todo === 0 ? 'item-name todo' : 'item-name done'} > {p.item} </p> <p>PRICE:{p.price}</p>
                </div>
            </li>
          ))}
        </ol>
      </div> 
    </>
  );
}

export default Home;
