export const LoginForm = {
  initialValues: {
    name: "",
    email: "",
    password: "",
  },
  builder: [
    {
      label: "Nombre",
      name: "name",
      type: "text",
      placeholder: "Nombre",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      label: "Contaseña",
      name: "password",
      type: "password",
      placeholder: "Contraseña",
    },
  ],
  validationSchema: "",
  onClick: (values: any) => {
    console.warn({ values });
  },
};
