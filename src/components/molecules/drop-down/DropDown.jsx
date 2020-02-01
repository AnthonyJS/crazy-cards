import { useField } from 'formik'
import styled from '@emotion/styled'
import { Text, Box } from 'components/atoms'

const DropDown = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <Box pt={3} pb={1}>
      <label htmlFor={props.id || props.name}>
        <Text>{label}</Text>
      </label>

      {meta.touched && meta.error && (
        <Text variant="error">{` / ${meta.error}`}</Text>
      )}
      <div>
        <StyledSelect {...field} {...props} />
      </div>
    </Box>
  )
}

const StyledSelect = styled.select`
  border-radius: 25px;
  padding: 10px 15px 10px 15px;
  width: 100%;
  box-shadow: 10px 10px 13px -9px rgba(0, 0, 0, 0.47);
  background: 'white';
  -webkit-appearance: none;
`

export default DropDown
