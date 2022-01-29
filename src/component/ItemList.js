import { Component } from "react";
class ItemLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      itemList: []
    };
  }
  onChange = (event) => {
    this.setState(() => {
      return { item: event.target.value };
    });
  };
  onSubmit = () => {
    console.log(this.state.item);
    console.log(this.state.itemList);
    this.setState(() => {
      return { itemList: [...this.state.itemList, this.state.item] };
    });
  };

  removeElement = (index) => {
    const newList = this.state.itemList;
    newList.splice(index, 1);
    this.setState(() => {
      return {
        itemList: newList
      };
    });
    console.log(this.state.itemList);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.item}
          placeholder="Write here..."
          onChange={this.onChange}
        />
        <button className="submit-btn" onClick={this.onSubmit}>
          +
        </button>
        <div className="list-container">
          {this.state.itemList.map((element, index) => (
            <div className="list-item" key={index}>
              {element}
              <button
                className="item-remove"
                onClick={() => this.removeElement(index)}
              >
                -
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ItemLists;
