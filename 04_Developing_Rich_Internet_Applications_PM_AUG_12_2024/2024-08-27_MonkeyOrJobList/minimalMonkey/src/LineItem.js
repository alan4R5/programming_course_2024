import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  console.log({ item })
  return (

    <div className="line">
      <li className="item">

        <input
          type="checkbox"
          onChange={() => handleCheck(item.id)}
          checked={item.checked}
        />

        <div className="image"> <img src={item.image} /></div>

        <div className="title">
          <label
            onDoubleClick={() => handleCheck(item.id)}
            style={item.checked ? { textDecoration: "line-through" } : null}
          >
            {item.item}
            <div className="details">
              <p>{item.details}</p>
            </div>
          </label>
        </div>

        <FaTrashAlt
          onClick={() => handleDelete(item.id)}
          role="button"
          tabIndex="0"
        />
      </li>
    </div>


  );
};

export default LineItem;
