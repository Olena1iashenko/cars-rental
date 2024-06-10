import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contactsOps";

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // const form = event.target;
    dispatch(addContactThunk(values));
    actions.resetForm();
    // form.reset();
  };
  const initialValues = { name: "", number: "" };
  const validation = yup.object().shape({
    name: yup
      .string()
      .required("Required field")
      .min(3, "Too short")
      .max(50, "Too long")
      .trim(),
    number: yup
      .string()
      .required("Required field")
      .min(3, "Too short")
      .max(50, "Too long"),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validation}
    >
      <Form className={s.form}>
        <label className={s.label} name="name">
          Name
          <Field name="name" placeholder="Enter name here..." />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>
        <label className={s.label} name="number">
          Number
          <Field label="number" name="number" placeholder="123-45-67" />
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
