import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: ''
  };

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log('login success');
        resetForm();
      })
      .catch(() => {
        console.log('login error');
        setSubmitting(false);
      });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className={css.form}>
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
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Logging In...' : 'Log In'}
          </button>
        </Form>
      )}
    </Formik>
  );
}
