import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const FormThree = () => {
  const formik = useFormik({
    initialValues: { firstname: "" },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .required(console.log("Required!"))
        .max(5, console.log("Too Long"))
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <br />
        <label htmlFor="firstname">Firstname: </label>
        <input
          type="text"
          name="firstname"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.firstname}
        />
        {formik.errors.firstname && formik.touched.firstname ? (
          <span>{formik.errors.firstname}</span>
        ) : null}
        <hr />
        <button type="submit">Click me</button>
      </form>
    </div>
  );
};
export default FormThree;
