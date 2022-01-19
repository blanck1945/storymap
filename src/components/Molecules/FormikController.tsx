import React from "react";
import { Field, Form, Formik } from "formik";
import ButtonComponent from "../Atoms/ButtonComponent/ButtonComponent";
import { ButtonVariants } from "../../models/Enums/ButtonEnums";
// Styles
import { useStyles } from "./styles";

interface FormikControllerPops {
  form: any;
  classes?: any;
  button?: any;
}

const FormikController = ({ form, classes, button }: FormikControllerPops) => {
  const muiClasses = useStyles();
  const { initialValues, builder, validationSchema, onClick } = form;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onClick}
      validationSchema={validationSchema}
    >
      <Form className={muiClasses.form}>
        {builder.map((el: any) => {
          if (el.label) {
            return (
              <div className={muiClasses.input}>
                <label>{el.label}</label>
                <Field {...el} />
              </div>
            );
          }

          return <Field {...el} />;
        })}
        <ButtonComponent type="submit" variant={ButtonVariants.primary}>
          Enviar
        </ButtonComponent>
      </Form>
    </Formik>
  );
};

export default FormikController;
