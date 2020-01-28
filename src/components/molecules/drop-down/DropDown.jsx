import { useField } from 'formik'
import styled from '@emotion/styled'
import Text from 'components/atoms/text'
import Box from 'components/atoms/box'

const DropDown = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <Box pt={3} pb={1}>
      <label htmlFor={props.id || props.name}>
        <Text>{label}</Text>
      </label>
      <div>
        <StyledSelect {...field} {...props} />
        {meta.touched && meta.error ? (
          <StyledErrorMessage>{meta.error}</StyledErrorMessage>
        ) : null}
      </div>
    </Box>
  )
}

const StyledSelect = styled.select`
  border-radius: 25px;
  padding: 10px 15px 10px 15px;
  width: 100%;
  box-shadow: 10px 10px 13px -9px rgba(0, 0, 0, 0.47);
`

const StyledErrorMessage = styled.span``

const StyledLabel = styled.label``

export default DropDown
