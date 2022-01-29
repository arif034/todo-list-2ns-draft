import { useState, useEffect } from "react";
function ItemList() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [listItem, setListItem] = useState([]);
  const onChange = (event) => {
    setItem(event.target.value);
  };
  const onSubmit = () => {
    setItemList([...itemList, item]);
    console.log(itemList);
  };
  useEffect(() => {
    const removeElement = (index) => {
      const newList = itemList;
      console.log(newList.splice(index, 1));
      console.log(newList);
      setItemList(newList);
      console.log(itemList);
    };
    const lis = itemList.map((element, index) => (
      <div className="list-item" key={index}>
        {element}
        <button className="item-remove" onClick={() => removeElement(index)}>
          -
        </button>
      </div>
    ));
    setListItem(lis);
  }, [itemList]);
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
