import './FieldForm.css'

const FieldForm = ({
  label,
  mandatory = false,
  placeholder,
  value,
  valueChanged,
  type = 'text'
}) => {
  const whenTyping = event => {
    valueChanged(event.target.value)
  }

  return (
    <div className={`field-form field-form-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        onChange={whenTyping}
        required={mandatory}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}

export default FieldForm
