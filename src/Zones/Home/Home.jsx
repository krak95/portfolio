import { useState, useMemo, useEffect, useCallback } from "react";
import axios from "axios";
import "./Home.css";
import $ from "jquery";

function Home() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState([]);

  const handleShowList = async () => {
    const result = await axios.post("http://localhost:5500/getItems");
    console.log("SHOW", result.data);
    setItems(result.data);
  };


  const handleAddItem = async (e) => {
    const mongoObject = {
      todo: 0,
      item: item,
      price: price,
    };
    const result = await axios.post(
      "http://localhost:5500/addItem",
      mongoObject
    );
    console.log("item added", mongoObject, result);
    setItems((previous) => {
      return [...previous, mongoObject];
    });
  };

  const dropMongo = () => {
    console.log("drop");
    axios.post("http://localhost:5500/dropItems");
  };

  const checkTodo = async (e) => {
    e.stopPropagation();
    let el = e.target.getAttribute("a-key");
    console.log(el);
    $("[a-key=" + el + "]").addClass("done");
    $("[a-key=" + el + "]").removeClass("todo");
    const mongoObject = {
      item: el,
    };
    await axios.post("http://localhost:5500/updateItem", mongoObject);
  };

  const tmi = require("tmi.js");

  const client = new tmi.Client({
    channels: ["Cesarvsc"],
  });

  client.connect();

  client.on("message", (channel, tags, message, self) => {
    $(".t-chat").append('<li><p class="username">'+tags.username+':</p>'+ message+'</li>');
  });
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
            <li
              a-key={p.item}
              className={p.todo === 0 ? "item-name todo" : "item-name done"}
              key={p._id}
            >
              ITEM:<p> {p.item} </p> <p>PRICE:{p.price}</p>
              <button a-key={p.item} onClick={(e) => checkTodo(e)}>
                CHECK
              </button>
            </li>
          ))}
        </ol>

        <ol className="t-chat">
          <li><h1>TWITCH-CHAT</h1></li>
        </ol>
      </div>
    </>
  );
}

export default Home;
