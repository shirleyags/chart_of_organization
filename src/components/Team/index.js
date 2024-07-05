import './Team.css'
import Card from '../Card'

const Team = ({
  name,
  primaryColor,
  secondaryColor,
  employees,
  whenDelete
}) => {
  return (
    employees.length > 0 && (
      <section className="team" style={{ backgroundColor: secondaryColor }}>
        <h3 style={{ borderColor: primaryColor }}>{name}</h3>
        <div className="employees">
          {employees.map(employee => {
            return (
              <Card
                cardBackgroundColor={primaryColor}
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
