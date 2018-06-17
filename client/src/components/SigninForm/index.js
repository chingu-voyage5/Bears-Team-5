// Higher Order Component
import React from 'react';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import * as FE from '../FormElements';

const formikEnhancer = withFormik({
  displayName: 'LoginForm',
  mapPropsToValues: props => ({ email: '', password: '', checkFetching: props.checkFetching }),
  // Validate form
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: Yup.string()
      .min(3, 'Passwords need to be longer than that!')
      .required('Password is required!'),
  }),
  // Submission handler
  handleSubmit: (values, { props, setSubmitting }) => {
    props.signin(values);
    setSubmitting(false);
  },
});


const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <FE.Form onSubmit={handleSubmit}>
    <FE.FormField>
      <FE.Input
        type="text" // not email -> breaks animations
        name="email"
        placeholder="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {touched.email && errors.email && <FE.Error>{errors.email}</FE.Error>}
    </FE.FormField>
    <FE.FormField>
      <FE.Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {touched.password && errors.password && <FE.Error>{errors.password}</FE.Error>}
    </FE.FormField>
    <FE.ButtonsContainer>
      <FE.Button type="submit" disabled={values.checkFetching()}>
        SUBMIT
      </FE.Button>
    </FE.ButtonsContainer>
  </FE.Form>
);


InnerForm.propTypes = {
  values: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({}).isRequired,
  touched: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};


export default formikEnhancer(InnerForm);

