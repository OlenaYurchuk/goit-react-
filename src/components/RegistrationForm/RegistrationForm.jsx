import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.label}>
          <label htmlFor="name">Username</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.label}>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className={css.error} />
        </div>
        <div className={css.label}>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" className={css.error} />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
