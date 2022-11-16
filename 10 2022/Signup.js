import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { string } from "yup/lib/locale";
import "./Signup.css";
const Signup = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      toggled: false
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required(console.log("This is required!"))
        .min(5, console.log("Not enough characters"))
    }),
    username: Yup.string()
      .required(console.log("This is required for username!"))
      .min(5, console.log("Not enough characters in username"))
  });
  return (
    <div>
      <h2> LOGIN FORM</h2>
      <form onSubmit={formik.handleSubmit}>
        <label className="label-1" htmlFor="username">
          UserName:
        </label>
        <input
          id="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.username}
          type="text"
          name="username"
        />
        <br />
        <label className="label-2" htmlFor="password">
          Password:
        </label>
        <input
          id="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          name="password"
        />
        <br />
        <Button type="submit" className="buttons" variant="contained">
          Submit
        </Button>
        <Button type="submit" className="buttons" variant="contained">
          SignUp
        </Button>
      </form>
    </div>
  );
};
export default Signup;
