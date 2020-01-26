import styled from 'styled-components'

const TextInput = ({
  id,
  label,
  type,
  value,
  onChange,
  onBlur,
  errors,
  touched
}) => (
  <div>
    <label for={id}>{label}</label>
    <StyledInput
      type={type}
      id={id}
      name={id}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    ></StyledInput>
    <StyledError>{errors && touched && errors}</StyledError>
  </div>
)

const StyledError = styled.span`
  color: red;
  font-size: 20px;
`

const StyledInput = styled.input`
  font-family: 'arial';
  border-radius: 20px;
  padding: 8px;
  border: 1px solid #aaa;
`

export default TextInput
