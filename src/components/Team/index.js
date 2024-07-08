import './Team.css'
import Card from '../Card'
import hexToRgba from 'hex-to-rgba'

const Team = ({ name, color, employees, whenDelete, changeColor, id }) => {
  return (
    employees.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: hexToRgba(color, '0.10') }}
      >
        <input
          value={color}
          type="color"
          onChange={e => changeColor(e.target.value, id)}
          className="input-color"
        />
        <h3 style={{ borderColor: color }}>{name}</h3>
        <div className="employees">
          {employees.map(employee => {
            return (
              <Card
                cardBackgroundColor={color}
                key={employee.name}
                name={employee.name}
                ocupation={employee.ocupation}
                image={employee.image}
                whenDelete={whenDelete}
                id={employee.id}
              />
            )
          })}
        </div>
      </section>
    )
  )
}

export default Team
