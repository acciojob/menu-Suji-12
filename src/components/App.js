import React, { useState } from "react";
import "../styles/App.css";

const menuItems = [
  {
    id: 1,
    name: "Buttermilk Pancakes",
    category: "breakfast",
    price: "$15.99",
    testId: "menu-item-breakfast",
  },
  {
    id: 2,
    name: "Diner Double",
    category: "lunch",
    price: "$13.99",
    testId: "menu-item-lunch",
  },
  {
    id: 3,
    name: "Godzilla Milkshake",
    category: "shakes",
    price: "$6.99",
    testId: "menu-item-shakes",
  },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredItems =
    selectedCategory === ""
      ? menuItems
      : menuItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div id="main">
      {/* Do not remove the main div */}

      <h2>Our Menu</h2>

      {/* Filter Buttons */}
      <button id="filter-btn-1" onClick={() => setSelectedCategory("breakfast")}>
        Breakfast
      </button>

      <button id="filter-btn-2" onClick={() => setSelectedCategory("lunch")}>
        Lunch
      </button>

      <button id="filter-btn-3" onClick={() => setSelectedCategory("shakes")}>
        Shakes
      </button>

      {/* Menu Items */}
      <div>
        {filteredItems.map((item) => (
          <div key={item.id} data-test-id={item.testId}>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
