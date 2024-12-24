/**
 *  Importações de bibliotecas e componentes
 */
import api from "../../services/api"
// Importação para Captura e armaenamento de estados
import { useEffect, useState } from "react"
// Navegação entre páginas "React Router Dom"
import {useNavigate} from 'react-router-dom'
// Componentes
import Button from "../../components/Button"
import TopBackground from '../../components/TopBackground'
// Estilização do componente
import { Container, ContainerUsers, TrashIcon, CardUsers,
    AvatarUser, Title } from "./styles"
// Imagem do ícone de lixeira
import Trash from "../../assets/trash.svg"

/**
 *  Função responsável por listar os usuários cadastrados
 */
function ListUsers() {
    // Armazenamento de estados useState
    const [users, setUsers] = useState([])

    // Navegação
    const navigate = useNavigate()

    // UseEffect para carregar os dados dos usuários do backend
    // Assim que a tela carrega
    useEffect(() => {
        // Função assíncrona para carregar os usuários
        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        // Chama a função
        getUsers()
    }, [])
    // Função para deletar usuários
    async function deleteUsers(id) {
        // Requisição DELETE para deletar o usuário
        await api.delete(`/usuarios/${id}`)
        // Atualiza a lista de usuários com Filter que não contém o id deletado
        const updateUsers = users.filter(user => user.id !== id)
        // Atualiza o estado de usuários
        setUsers(updateUsers)
    }

    // Retorno do componente
    return (

        <Container>
            <TopBackground />
            <Title>
                <h1>Lista de usuários</h1>
            </Title>

            <ContainerUsers>
                {/* Função MAP para percorrer o array de usuários */}
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser
                            src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
                        <div>
                            <h3>
                                {user.name}
                            </h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>

                        </div>
                        <TrashIcon src={Trash}
                            onClick={() => deleteUsers(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>
            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}

// Exportação do componente
export default ListUsers