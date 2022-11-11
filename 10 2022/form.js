import react from "react";
import { Formik } from "formik";

const Form = () => (
  <div>
    <Formik
      initialValues={{
        firstname: "arham",
        password: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
          <button>Submit</button>
        </form>
      )}
    </Formik>
  </div>
);
export default Form;
