import { useField } from 'formik'
import styled from 'styled-components'
import Text from 'components/atoms/text'
import Box from 'components/atoms/box'

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <Box pt={3} pb={1}>
      <label htmlFor={props.id || props.name}>
        <Text>{label}</Text>
      </label>

      {meta.touched && meta.error ? (
        <Text variant="error" className="error">
          {' / '}
          {meta.error}
        </Text>
      ) : null}
      <div>
        <StyledInput className="text-input" {...field} {...props} />{' '}
      </div>
    </Box>
  )
}

const StyledInput = styled.input`
  border-radius: 25px;
  padding: 10px 15px 10px 15px;
  width: 100%;
  box-shadow: 10px 10px 13px -9px rgba(0, 0, 0, 0.47);
`

export default MyTextInput
