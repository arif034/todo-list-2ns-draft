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
    console.log(itemList);
  };

  const removeElement = (index) => {
    console.log(index);
    //listItem.forEach((item) => console.log(item.key));
    console.log(itemList[0]);
  };
  // const listItem = itemList.map((element, index) => (
  //   <Item key={index} item={element} removeEle={() => removeElement(index)} />
  // ));
  const listItem = itemList.map((element, index) => (
    <div className="list-item" key={index}>
      {element}
      <button className="item-remove" onClick={() => removeElement(index)}>
        -
      </button>
    </div>
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
