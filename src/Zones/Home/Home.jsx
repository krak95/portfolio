import { useState, useMemo, useEffect, useCallback } from "react";
import axios from "axios";
import "./Home.css";

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

  return (
    <>
      <h1>Home</h1>
      <div className="mongoadditem">
        <input onChange={(e) => setItem(e.target.value)} type="text" />
        <input onChange={(e) => setPrice(e.target.value)} type="text" />
        <button onClick={handleAddItem}>ADD MONGO</button>
      </div>
      <div className="listofitems">
        <ol>
          {items.map((p) => (
            <li key={p._id}>
                <div>
                <p>ITEM:{p.item}</p> <p>PRICE:{p.price}</p>
                </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Home;
