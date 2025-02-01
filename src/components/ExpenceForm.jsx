import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const schema = z.object({
  description: z
    .string({ message: "مطلوب" })
    .min(3, { message: "بجب أن لا يقل الوصف عن ثلاثة حروف" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "يجب أختيار رقم" })
    .min(0.01)
    .max(100_000),
  category: z.enum([...categories], {
    errorMap: () => ({ message: "مطلوب" }),
  }),
});

const ExpenceForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  return (
    <form
      className="mb-5"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className=" b-3 text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="text"
          className="form-control"
        />
        {errors.amount && (
          <p className=" b-3 text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          category
        </label>
        <select {...register("category")} id="category" className="form-select">
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className=" b-3 text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-info">Add</button>
    </form>
  );
};

export default ExpenceForm;
