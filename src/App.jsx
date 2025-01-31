import { useState } from "react";
import ExpenceList from "./components/ExpenceList";

function App() {
  const [expences, setExpences] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Entertainment" },
  ]);

  return (
    <>
      <ExpenceList
        expences={expences}
        onDelete={(id) => setExpences(expences.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
