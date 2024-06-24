import "./TextFieldForm.css"

const TextFieldForm = (props) => {
  return (
    <div className="text-field-form">
      <label>
        {props.label}
      </label>
      <input placeholder={props.placeholder}/>
    </div>
  )
}

export default TextFieldForm
