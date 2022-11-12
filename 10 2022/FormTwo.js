import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
const FormTwo = () => (
  <div>
    <Formik
      initialValues={{
        firstname: "",
        password: ""
      }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .required(console.log("Required!"))
          .max(5, alert("Too Long"))
      })}
      onSubmit={(values) => {
        alert(values);
      }}
    >
      {({
        values,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            onChange={handleChange}
            onBlur={handleBlur}
            name="firstname"
            value={values.firstname}
          />
          <br />
          <hr />
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            id="password"
            name="password"
            value={values.password}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>
);
export default FormTwo;
