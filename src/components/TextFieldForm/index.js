import './TextFieldForm.css'

const TextFieldForm = props => {
  const whenTyping = event => {
    props.valueChanged(event.target.value)
  }

  return (
    <div className="text-field-form">
      <label>{props.label}</label>
      <input
        onChange={whenTyping}
        required={props.mandatory}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  )
}

export default TextFieldForm
