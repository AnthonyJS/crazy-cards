import { useField } from 'formik'
import styled from 'styled-components'

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <div>
        <StyledInput className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <span className="error">{meta.error}</span>
        ) : null}
      </div>
    </div>
  )
}

const StyledInput = styled.input`
  border-radius: 25px;
  padding: 10px 15px 10px 15px;
  border: none;
  box-shadow: 10px 10px 13px -9px rgba(0, 0, 0, 0.47);
`

export default MyTextInput
