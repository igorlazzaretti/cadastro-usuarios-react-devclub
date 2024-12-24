// useRef para pegar o valor do input
import { useRef } from 'react'

import { Title, Container, Form,
  ContainerInputs, Input, InputLabel } from './styles'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
// Importando a api axios
import api from '../../services/api'

// Importando a Imagem
import { useNavigate } from 'react-router-dom'

const title = "Usuários Cadastrados"

function Home() {
  // Navegação
  const navigate = useNavigate()
  // Criando uma referência para pegar o valor do input
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  // Função que captura o evento de submit do formulário
  async function registerNewUser(){
    // Vamos acessar um serviço externo porisso await
    // Primeiramente usaremos o post
    await api.post('/usuarios',{
      name: inputName.current.value,         // String
      age: parseInt(inputAge.current.value), // Int
      email: inputEmail.current.value        // String
    })

  }

  return (
    <Container>
      <TopBackground />

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

          <Button type='button' onClick={registerNewUser} theme='main'>
            Cadastrar Usuário</Button>
      </ Form>
      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>
        Consultar Usuários</Button>
    </ Container>
  )
}

export default Home
