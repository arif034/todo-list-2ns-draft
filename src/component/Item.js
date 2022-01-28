function Item(props) {
  return (
    <div className="list-item">
      {props.item}
      <button className="item-remove" onClick={props.removeElement(props.item)}>
        -
      </button>
    </div>
  );
}

export default Item;
