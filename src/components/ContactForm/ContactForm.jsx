import { useId } from "react";
import { Formik, Field, Form } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
// import { selectContacts } from '../../redux/selectors';
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";
import { useToaster } from "react-hot-toast";


export default function ContactForm() {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const dispatch = useDispatch();
  const { success } = useToaster();
  // const contacts = useSelector(selectContacts);

  const ContactFormSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!")
      .max(50, "Too Long!").required("Required"),
    phonenumber: Yup.string().required("Required")
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact({
      name: values.username,
      phone: values.phonenumber
    })).then(() => {
      success('Contact added successfully')
    })
    actions.resetForm();
  }

  return (
    <Formik initialValues={{
      username: "",
      phonenumber: ""
    }}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div className={css.inputWrap}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={css.input} name="username" id={nameFieldId} />
          <ErrorMessage className={css.error} name="username" component="span" />
        </div>
        <div className={css.inputWrap}>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field className={css.input} name="phonenumber" id={phoneFieldId} />
          <ErrorMessage className={css.error} name="phonenumber" component="span" />
        </div>
        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}