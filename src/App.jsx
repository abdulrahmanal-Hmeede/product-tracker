import { useState } from "react";
import ExpenceList from "./components/ExpenceList";
import ExpenceFilter from "./components/ExpenceFilter";

function App() {
  const [category, setCategory] = useState("");

  const [expences, setExpences] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Entertainment" },
  ]);

  const visibleExpenses = category
    ? expences.filter((e) => e.category === category)
    : expences;

  return (
    <>
      <ExpenceFilter onSelectCategory={(category) => setCategory(category)} />
      <ExpenceList
        expences={visibleExpenses}
        onDelete={(id) => setExpences(expences.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
