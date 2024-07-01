import './Team.css'
import Card from '../Card'

const Team = props => {
  return (
    props.employees.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="employees">
          {props.employees.map(employee => (
            <Card
              cardBackgroundColor={props.primaryColor}
              key={employee.name}
              name={employee.name}
              ocupation={employee.ocupation}
              image={employee.image}
            />
          ))}
        </div>
      </section>
    )
  )
}

export default Team
