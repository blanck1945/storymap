import React from "react";
import { Form, Formik } from "formik";

interface FormikControllerPops {
  form: any;
}

const FormikController = ({ form }: FormikControllerPops) => {
  const { initialValues, builder, validationSchema, onClick } = form;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onClick}
      validationSchema={validationSchema}
    >
      <Form></Form>
    </Formik>
  );
};

export default FormikController;
