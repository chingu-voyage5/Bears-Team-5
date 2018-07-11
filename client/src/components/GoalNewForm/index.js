// Higher Order Component
import React from 'react';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import * as FE from '../FormElements';

const formikEnhancer = withFormik({
  displayName: 'GoalNewForm',
  mapPropsToValues: props => ({ description: '', checkFetching: props.checkFetching }),
  // Validate form
  validationSchema: Yup.object().shape({
    description: Yup.string()
      .required('Description required!'),
  }),
  // Submission handler
  handleSubmit: (values, { props, setSubmitting }) => {
    props.savegoal(values);
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
        name="description"
        placeholder="Description"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {touched.description && errors.description && <FE.Error>{errors.description}</FE.Error>}
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
  }).isRequired,
  errors: PropTypes.shape({}).isRequired,
  touched: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};


export default formikEnhancer(InnerForm);

