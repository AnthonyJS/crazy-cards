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

const StyledSelect = styled.select``

const StyledErrorMessage = styled.span``

const StyledLabel = styled.label``

export default DropDown
