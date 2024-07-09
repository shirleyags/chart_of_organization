import './Form.css'
import { useState } from 'react'
import FieldForm from '../FieldForm'
import DropDownList from '../DropDownList'
import Button from '../Button'

const Form = ({ registerNewTeam, registeredEmployee, nameTeams }) => {
  const [name, setName] = useState('')
  const [ocupation, setOcupation] = useState('')
  const [image, setImage] = useState('')
  const [selectTeam, setSelectTeam] = useState('Escolha um time')
  const [teamName, setTeamName] = useState('')
  const [teamColor, setTeamColor] = useState()

  const onSave = event => {
    event.preventDefault()
    registeredEmployee({
      name,
      ocupation,
      image,
      selectTeam
    })
    setName('')
    setOcupation('')
    setImage('')
    setSelectTeam(selectTeam[0])
  }

  const onSaveNewTeam = event => {
    event.preventDefault()
    registerNewTeam({ name: teamName, color: teamColor })
  }

  return (
    <section className="section-form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <FieldForm
          mandatory
          label="Nome"
          placeholder="Digite o nome"
          value={name}
          valueChanged={value => setName(value)}
        />
        <FieldForm
          mandatory
          label="Cargo"
          placeholder="Digite o cargo"
          value={ocupation}
          valueChanged={value => setOcupation(value)}
        />
        <FieldForm
          mandatory={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          valueChanged={value => setImage(value)}
        />
        <DropDownList
          mandatory
          label="Times"
          itens={nameTeams}
          value={selectTeam}
          valueChanged={value => setSelectTeam(value)}
        />
        <Button>Criar card</Button>
      </form>
      <form onSubmit={onSaveNewTeam}>
        <h2>Preencha os dados para criar um novo time</h2>
        <FieldForm
          mandatory
          label="Nome"
          placeholder="Digite o nome do time"
          value={teamName}
          valueChanged={value => setTeamName(value)}
        />
        <FieldForm
          mandatory
          type="color"
          label="Cor"
          placeholder="Digite a cor do time em hexadecimal"
          value={teamColor}
          valueChanged={value => setTeamColor(value)}
        />
        <Button>Criar um novo time</Button>
      </form>
    </section>
  )
}

export default Form
