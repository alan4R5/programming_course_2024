import React, { useState, useEffect } from "react";

const MonkeysList = () => {
  const [monkeys, setMonkeys] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setMonkeys(data);
      })
      .catch((error) =>
        console.error("Error fetching JSON data, please check your path", error)
      );
  }, []);

  return (
    <div id="demo">
      {monkeys.map((monkey, index) => (
        <div className="card mb-3" key={index}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={monkey.Image} className="img-fluid rounded-start" alt={monkey.Name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{monkey.Name}</h5>
                <p className="card-text">{monkey.Details}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MonkeysList;

