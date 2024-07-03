import { useState } from "react";
import "./App.scss";
import Row from "./components/Row";

function App() {
  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };

  const handleRowClick = (id) => {
    setParts((prevParts) =>
      prevParts.map((part) =>
        part.id === id ? { ...part, selected: !part.selected } : part
      )
    );
  };

  const partsData = [
    {
      id: 1,
      number: "2CSS245202R0104",
      description: "Siemens Base Unit, 6ES7193",
      quantity: "1,000,940",
      selected: false,
    },
    {
      id: 2,
      number: "2CSS245202R0104",
      description: "Siemens Base Unit, 6ES7193",
      quantity: "1,000,940",
      selected: false,
    },
    {
      id: 3,
      number: "2CSS245202R0104",
      description: "Siemens Base Unit, 6ES7193",
      quantity: "1,000,940",
      selected: false,
    },
    {
      id: 4,
      number: "2CSS245202R0104",
      description: "Siemens Base Unit, 6ES7193",
      quantity: "1,000,940",
      selected: false,
    },
    {
      id: 5,
      number: "2CSS245202R0104",
      description: "Siemens Base Unit, 6ES7193",
      quantity: "1,000,940",
      selected: false,
    },
    {
      id: 6,
      number: "2CSS245202R0104",
      description: "Siemens Base Unit, 6ES7193",
      quantity: "1,000,940",
      selected: false,
    },
    {
      id: 7,
      number: "2CSS245202R0104",
      description: "Siemens Base Unit, 6ES7193",
      quantity: "1,000,940",
      selected: false,
    },
    {
      id: 8,
      number: "2CSS245202R0104",
      description: "Siemens Base Unit, 6ES7193",
      quantity: "1,000,940",
      selected: false,
    },
    {
      id: 9,
      number: "2CSS245202R0104",
      description: "Siemens Base Unit, 6ES7193",
      quantity: "1,000,940",
      selected: false,
    },
    {
      id: 10,
      number: "2CSS245202R0104",
      description: "Siemens Base Unit, 6ES7193",
      quantity: "1,000,940",
      selected: false,
    },
    {
      id: 11,
      number: "2CSS245202R0104",
      description: "Siemens Base Unit, 6ES7193",
      quantity: "1,000,940",
      selected: false,
    },
    {
      id: 12,
      number: "2CSS245202R0104",
      description: "Siemens Base Unit, 6ES7193",
      quantity: "1,000,940",
      selected: false,
    },
    {
      id: 13,
      number: "2CSS245202R0104",
      description: "Siemens Base Unit, 6ES7193",
      quantity: "1,000,940",
      selected: false,
    },
  ];

  const [parts, setParts] = useState(partsData);

  return (
    <div className="App">
      

      <header>
        <h1>Siemens</h1>
        <input></input>
      </header>

      <div className="table-heading">
        <span className="row-column">PART NUMBER</span>
        <span className="row-column">DESCRIPTION</span>
        <span className="row-column" onClick={() => handleRefresh()}>
          QUANTITY IN STOCK
        </span>
      </div>

      {parts.map((part) => (
        <Row
          key={part.id}
          part={part}
          refreshing={refreshing}
          selected={part.selected}
          onClick={() => handleRowClick(part.id)}
        />
      ))}
    </div>
  );
}

export default App;
