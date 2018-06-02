// Higher Order Component
import React from 'react';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import * as SC from './StyledComponents';

const formikEnhancer = withFormik({
  displayName: 'LoginForm',
  mapPropsToValues: props => ({ email: props.user.email, password: props.user.password }),
  // Add a custom validation function (this can be async too!)
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: Yup.string()
      .min(3, 'Passwords need to be longer than that!')
      .required('Password is required!'),
  }),
  // Submission handler
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
});


const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <SC.Form onSubmit={handleSubmit}>
    <SC.FormField>
      <SC.Input
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {touched.email && errors.email && <SC.Error>{errors.email}</SC.Error>}
    </SC.FormField>
    <SC.FormField>
      <SC.Input
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {touched.password && errors.password && <SC.Error>{errors.password}</SC.Error>}
    </SC.FormField>
    <SC.Button type="submit" disabled={isSubmitting}>
      Submit
    </SC.Button>
  </SC.Form>
);


InnerForm.propTypes = {
  values: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  errors: PropTypes.shape({}),
  touched: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
};

InnerForm.propTypes = {
  values: {
    email: '',
    password: '',
  },
  errors: {},
  touched: false,
  handleChange: () => {},
  handleBlur: () => {},
  handleSubmit: () => {},
  isSubmitting: false,
};


export default formikEnhancer(InnerForm);

