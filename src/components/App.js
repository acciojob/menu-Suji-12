import React, { useState } from "react";

const items = [
  { id: 1, name: "Pancakes", category: "breakfast", testId: "menu-item-breakfast" },
  { id: 2, name: "Burger", category: "lunch", testId: "menu-item-lunch" },
  { id: 3, name: "Milkshake", category: "shakes", testId: "menu-item-shakes" },
];

const App = () => {
  const [category, setCategory] = useState("");

  const filteredItems =
    category === "" ? items : items.filter(i => i.category === category);

  return (
    <div id="main">
      {/* Do not remove the main div */}

      <button id="filter-btn-1" onClick={() => setCategory("breakfast")}>
        Breakfast
      </button>

      <button id="filter-btn-2" onClick={() => setCategory("lunch")}>
        Lunch
      </button>

      <button id="filter-btn-3" onClick={() => setCategory("shakes")}>
        Shakes
      </button>

      {filteredItems.map(item => (
        <div key={item.id} data-test-id={item.testId}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default App;
