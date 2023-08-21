import React from "react";

interface Item {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface Props {
  items: Item[];
  onDeleteItem: (id: number) => void;
}

const ShoppingList = ({ items, onDeleteItem }: Props) => {
  {
    if (!items.length) return <p> No items to display</p>;
  }
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteItem(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            £{items.reduce((acc, item) => item.price + acc, 0).toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ShoppingList;
