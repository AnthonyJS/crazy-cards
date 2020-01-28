import { useField } from 'formik'
import styled from '@emotion/styled'

const DropDown = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <div>
        <StyledSelect {...field} {...props} />
        {meta.touched && meta.error ? (
          <StyledErrorMessage>{meta.error}</StyledErrorMessage>
        ) : null}
      </div>
    </>
  )
}

const StyledSelect = styled.select`
  border-radius: 25px;
  padding: 10px 15px 10px 15px;
  border: none;
  box-shadow: 10px 10px 13px -9px rgba(0, 0, 0, 0.47);
`

const StyledErrorMessage = styled.span``

const StyledLabel = styled.label``

export default DropDown
