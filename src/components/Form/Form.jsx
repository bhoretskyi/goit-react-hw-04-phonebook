import { Formik,ErrorMessage } from 'formik';
import { StyledButton, StyledField, StyledForm } from './Form.styled';
import * as Yap from 'yup';

const FindSchema = Yap.object().shape({
  name: Yap.string()
    .min(2, 'too short name')
    .matches(/^[A-Za-z\s]+$/, 'Invalid name format')
    .required('required'),
  number: Yap.string()
    .min(7, 'too short')
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Invalid phone number. Please use format XXX-XX-XX'
    )
    .required('required'),
});

export const UserForm = ({ addName }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '', find: '' }}
        onSubmit={values => {

          addName({ name: values.name, number: values.number });
        }}
        validationSchema={FindSchema}
      >
        <StyledForm>
          <label>
            Name
            <StyledField name="name" type="text"></StyledField>
            <ErrorMessage name="name" />
          </label>
          <label>
            Number
            <StyledField name="number" type="tel"></StyledField>
            <ErrorMessage name="number" />
          </label>

          <StyledButton type="submit">Add contact</StyledButton>
         
        </StyledForm>
      </Formik>
    </div>
  );
};
