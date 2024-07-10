import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Engenharia de Software',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Infraestrutura',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#D86EBF'
    },
    {
      id: uuidv4(),
      name: 'Negócios',
      color: '#FEBA05'
    },
    {
      id: uuidv4(),
      name: 'Inovação',
      color: '#FF8A29'
    }
  ])

  const [employees, setEmployees] = useState([])

  const newCollaboratorAdded = employee => {
    setEmployees([...employees, { ...employee, id: uuidv4(), favorite: false }])
  }

  const deleteCard = id => {
    setEmployees(employees.filter(employee => employee.id !== id))
  }

  const chanceTeamColor = (color, id) => {
    setTeams(
      teams.map(team => {
        if (team.id === id) {
          team.color = color
        }
        return team
      })
    )
  }

  const registerNewTeam = newTeam => {
    setTeams([...teams, { ...newTeam, id: uuidv4() }])
  }

  const selectAsFavorite = id => {
    setEmployees(
      employees.map(employee => {
        if (employee.id === id) {
          employee.favorite = !employee.favorite
        }
        return employee
      })
    )
  }

  return (
    <div className="App">
      <Banner />
      <Form
        registerNewTeam={registerNewTeam}
        nameTeams={teams.map(team => team.name)}
        registeredEmployee={employee => newCollaboratorAdded(employee)}
      />
      {teams.map(team => (
        <Team
          selectAsFavorite={selectAsFavorite}
          changeColor={chanceTeamColor}
          key={team.id}
          id={team.id}
          name={team.name}
          color={team.color}
          employees={employees.filter(
            employee => employee.selectTeam === team.name
          )}
          whenDelete={deleteCard}
        />
      ))}
    </div>
  )
}

export default App
