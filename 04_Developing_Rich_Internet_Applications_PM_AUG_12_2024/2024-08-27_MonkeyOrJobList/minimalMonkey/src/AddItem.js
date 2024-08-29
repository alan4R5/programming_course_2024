import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmission, setObject }) => {
  const [monkeys, setMonkeys] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setMonkeys(data);
      })
      .catch((error) =>
        console.error("Error fetching JSON data", error)
      );
  }, []);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.Name); // Update local state
    setNewItem(option.Name); // Pass the selected option to the parent component via setNewItem
    setIsOpen(false);
    setObject(option)
  };

  return (
    <div className="dropdown">
      <div >
        <button className="menu" onClick={handleDropdownClick}>
          {selectedOption || "Select an option"} ▼
        </button>
        {isOpen && (
          <ul className="dropdown-list">
            {monkeys.map((option) => (
              <li
                key={option.Name}
                onClick={() => handleOptionClick(option)}
              >
                {option.Name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="plus" aria-label="Add Item" onClick={handleSubmission}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AddItem;
