import TextFieldForm from "../TextFieldForm"
import "./Form.css"

const Form = () => {
  return (
    <section className="section-form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextFieldForm label="Nome" placeholder="Digite o nome"/>
        <TextFieldForm label="Cargo" placeholder="Digite o cargo"/>
        <TextFieldForm label="Imagem" placeholder="Digite o endereço da imagem"/>
      </form>
    </section>
    
  )
}

export default Form
