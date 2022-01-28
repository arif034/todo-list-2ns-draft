import { useState } from "react";
import Item from "./Item.js";
function ItemList() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const onChange = (event) => {
    setItem(event.target.value);
  };
  const onSubmit = () => {
    setItemList([...itemList, item]);
  };

  function removeElement(item) {
    setItemList(
      itemList.filter(function (person) {
        return person !== item;
      })
    );
  }
  const listItem = itemList.map((item, index) => (
    <Item key={index} item={item} removeElement={removeElement} />
  ));
  return (
    <div>
      <input
        type="text"
        value={item}
        placeholder="Write here..."
        onChange={onChange}
      />
      <button className="submit-btn" onClick={onSubmit}>
        +
      </button>
      <div className="list-container">{listItem}</div>
    </div>
  );
}

export default ItemList;
