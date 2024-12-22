// useRef para pegar o valor do input
import { useRef } from 'react'

import { Title, Container, TopBackground, Form,
  ContainerInputs, Input, InputLabel, Button } from './styles'

// Importando a Imagem
import UsersImage from '../../assets/users.png'
const title = "Usuários Cadastrados"

function Home() {
  // Criando uma referência para pegar o valor do input
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  // Função que captura o evento de submit do formulário
  function registerNewUser(){
    //TODO: Implementar a lógica de cadastro de usuário
    console.log(inputName.current.value)
  }

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="Imagem de Usuários" />
      </TopBackground>

      <Form>
        <Title>{title}</Title>
        <ContainerInputs>
          <div>
            <div>
              <InputLabel>Nome<span>*</span></InputLabel>
              <Input type="text" placeholder='Nome do usuário' ref={inputName}/>
            </div>
            <div>
              <InputLabel>Idade<span>*</span></InputLabel>
              <Input type="text" placeholder='Idade do usuário' ref={inputAge}/>
            </div>
          </div>
          <div>
            <InputLabel>E-mail<span>*</span></InputLabel>
            <Input type="text" placeholder='E-mail do usuário' ref={inputEmail}/>
          </div>
          </ContainerInputs>

          <Button type='button' onClick={registerNewUser}>Cadastrar Usuário</Button>
      </ Form>
    </ Container>
  )
}

export default Home
