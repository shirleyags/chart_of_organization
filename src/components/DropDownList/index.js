import './DropDownList.css'

const DropDownList = props => {
  return (
    <div className="drop-down-list">
      <label>{props.label}</label>
      <select
        onChange={event => props.valueChanged(event.target.value)}
        required={props.mandatory}
        value={props.value}
      >
        <option value="">Escolha um time</option>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default DropDownList
