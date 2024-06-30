import './Form.css'
import { useState } from 'react'
import TextFieldForm from '../TextFieldForm'
import DropDownList from '../DropDownList'
import Button from '../Button'

const Form = () => {
  const squads = [
    'Programação',
    'Front-End',
    'Data Science',
    'DevOps',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const [name, setName] = useState('')
  const [ocupation, setOcupation] = useState('')
  const [image, setImage] = useState('')
  const [selectTeam, setSelectTeam] = useState('Escolha um time')

  const onSalve = event => {
    event.preventDefault()
  }
  return (
    <section className="section-form">
      <form onSubmit={onSalve}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextFieldForm
          mandatory={true}
          label="Nome"
          placeholder="Digite o nome"
          value={name}
          valueChanged={value => setName(value)}
        />
        <TextFieldForm
          mandatory={true}
          label="Cargo"
          placeholder="Digite o cargo"
          value={ocupation}
          valueChanged={value => setOcupation(value)}
        />
        <TextFieldForm
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          valueChanged={value => setImage(value)}
        />
        <DropDownList
          mandatory={true}
          label="Times"
          itens={squads}
          value={selectTeam}
          valueChanged={value => setSelectTeam(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  )
}

export default Form
