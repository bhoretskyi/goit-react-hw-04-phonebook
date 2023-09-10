import { Form, Field } from "formik";
import { styled } from "styled-components";
export const StyledForm = styled(Form)`
margin: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

`
export const StyledButton = styled.button`
width: 150px;
    background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`
export const StyledField = styled(Field)`
margin-left:10px;
margin-right:10px;
padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 30%;
  box-sizing: border-box;
  &:focus {
    border-color: #0056b3;}
    
`