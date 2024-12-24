import { Background } from './styles'
import Img from '../../assets/users.png'

function TopBackground() {

    return (
        <Background>
            <img src={Img} alt="users-img" />
        </Background>
    )
}

export default TopBackground