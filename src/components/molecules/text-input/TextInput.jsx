import { useField } from 'formik'

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <div>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <span className="error">{meta.error}</span>
        ) : null}
      </div>
    </div>
  )
}

export default MyTextInput
