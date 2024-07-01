import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'

function App() {
  const teams = [
    {
      name: 'Engenharia de Software',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Infraestrutura',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5'
    },
    {
      name: 'Negócios',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [employees, setEmployees] = useState([])

  const newCollaboratorAdded = employee => {
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        nameTeams={teams.map(team => team.name)}
        registeredEmployee={employee => newCollaboratorAdded(employee)}
      />
      {teams.map(team => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          employees={employees.filter(
            employee => employee.selectTeam === team.name
          )}
        />
      ))}
    </div>
  )
}

export default App
