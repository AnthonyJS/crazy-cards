import styled from 'styled-components'

const DropDown = ({
  id,
  options,
  label,
  value,
  onChange,
  onBlur,
  errors,
  touched
}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <select
      name="employmentStatus"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    >
      <option value="nope" label="Select summat" selected />
      {options.map(option => (
        <option value={option} label={option} />
      ))}
    </select>
    <StyledError>{errors && touched && errors}</StyledError>
  </>
)

// TODO - make a component that text and drop down share for this
const StyledError = styled.span`
  color: red;
  font-size: 20px;
`

export default DropDown
