import React from "react";

const ExpenceList = ({ expences, onDelete }) => {
  //   if (expences.length == 0) return null;
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expences.map((expence) => (
            <tr key={expence.id}>
              <td>{expence.description}</td>
              <td>${expence.amount}</td>
              <td>{expence.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expence.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Title</td>
            <td>
              $
              {expences
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenceList;
