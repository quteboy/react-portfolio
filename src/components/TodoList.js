import React, { Component } from "react";
import TodoItems from "./TodoItems";

export default class extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">To-Do Item</h3>
        {items.map((item) => {
          return (
            <TodoItems
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

        <button
          type="submit"
          className="btn btn-block btn-danger text-capitalize mb-5"
          onClick={clearList}
        >
          Clear List
        </button>
      </ul>
    );
  }
}
