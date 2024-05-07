import { Formik } from "formik";
import { registerSchema } from "../schema";
import { Form, ErrorMessage, Field } from "formik";

import React from "react";

const CustomInput: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: ""
        }}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <div className="name-field">
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name:
              </label>
              <Field type="text" id="name" className="rounded-md w-full bg-[#F5EEE6] focus:ring-[#F3D7CA] focus:outline-[#F3D7CA]" value={props.values.name} onChange={props.handleChange} />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                E-Mail:
              </label>
              <Field type="email" id="email" className="rounded-md w-full bg-[#F5EEE6] focus:ring-[#F3D7CA] focus:outline-[#F3D7CA]" value={props.values.email} onChange={props.handleChange} />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 font-semibold">
                Password:
              </label>
              <Field type="password" id="password" className="rounded-md w-full bg-[#F5EEE6] focus:ring-[#F3D7CA] focus:outline-[#F3D7CA]" value={props.values.password} onChange={props.handleChange} />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomInput;
