# Aplicação de Organização de Equipes

## Descrição

A aplicação desenvolvida permite configurar equipes para fácil identificação dos respectivos colaboradores.
É possível adicionar novas equipes, registrar colaboradores nas equipes existentes e excluir registros, facilitando a organização.

Principal tecnologia utilizada: **Biblioteca React.**

## Funcionalidades

- **Adicionar Novas Equipes:** Criar e personalizar novas equipes com nomes e cores específicos.
- **Registrar Colaboradores:** Adicionar colaboradores às equipes com detalhes nome, cargo e foto.
- **Destacar Colaboradores:** Destaca o card do colaborador, para fácil identificação, através de um clique em um ícone.
- **Deletar Colaboradores:** Remover colaboradores da lista quando eles saem da organização ou são adicionados incorretamente.
- **Personalização de Cor da Equipe:** Alterar a cor de qualquer equipe.

## Status do Projeto

As funcionalidades acima já foram desenvolvidas, faltando a implementação e execução dos testes unitários.
Futuras melhorias incluem a criação de um contador de colaboradores por equipe e a adição de filtros para facilitar a busca de colaboradores.

## Instalação

**1.Clone o repositório:**

`git clone git@github.com:shirleyags/chart_of_organization.git`

**2.Navegue até o diretório do projeto:**

`cd chart_of_organization`

**3.Instale as dependências:**

`npm install`

## Uso

**1.Inicie o aplicativo:**

`npm start`

**2.Abra o navegador e acesse:**

`http://localhost:3000`

## Componentes Principais

### `App.js`

- Gerencia o estado das equipes e colaboradores.
- Inclui funções para adicionar, deletar e favoritar colaboradores, bem como para alterar cores das equipes.

### `Banner.js`

- Exibe o banner principal da página.

### `Form.js`

- Contém formulários para adicionar novos colaboradores e criar novas equipes.

### `Team.js`

- Exibe as equipes e os colaboradores atribuídos a cada equipe.
- Permite marcar colaboradores como favoritos e deletar cartões de colaboradores.

### `Card.js`

- Exibe os detalhes dos colaboradores, incluindo a opção de favoritar e deletar.

### `DropDownList.js`

- Componente de lista suspensa para seleção de equipes.

### `FieldForm.js`

- Campo de formulário reutilizável para entrada de dados.

## Estilos

Os arquivos de estilo (.css) são usados para estilizar os componentes da aplicação, garantindo uma interface visualmente agradável e funcional.

- **`Team.css`**: Estiliza o componente de equipe, incluindo a entrada de cor.
- **`Form.css`**: Estiliza o formulário de adição de colaboradores e equipes.
- **`Card.css`**: Estiliza os cartões de colaboradores.
- **`DropDownList.css`**: Estiliza o componente de lista suspensa.
- **`FieldForm.css`**: Estiliza os campos do formulário.
- **`Button.css`**: Estiliza o botão de ação.
- **`Banner.css`**: Estiliza o banner da aplicação.

## Dependências

- `react: ^18.3.1`
- `react-dom: ^18.3.1`
- `react-icons: ^5.2.1`
- `uuid: ^10.0.0`
- `hex-to-rgba: ^2.0.1`

## Scripts

- `start`: Inicia o aplicativo em modo de desenvolvimento.
- `build`: Compila o aplicativo para produção.
- `test`: Executa testes automatizados (em desenvolvimento).
- `format`: Formata o código usando Prettier.
- `lint`: Analisa o código em busca de problemas usando ESLint.
- `eject`: Ejetar a configuração do Create React App.
