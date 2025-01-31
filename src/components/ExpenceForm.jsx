import React from "react";
import { categories } from "../App";

const ExpenceForm = () => {
  return (
    <form className="mb-5">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <select className="form-select">
          {categories.map((c) => (
            <option key={c} value="c">
              {c}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-info">Add</button>
    </form>
  );
};

export default ExpenceForm;
