import {Button} from './styles'
import PropTypes from 'prop-types'

// Componente de botão padrão
// Parámetros: children => conteúdo do botão,
//                theme => tema do botão,
//             ...props => outras propriedades
function DefaultButton({children, theme, ...props}) {

    return (
        <Button {...props} theme={theme}>{children}</Button>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaultButton