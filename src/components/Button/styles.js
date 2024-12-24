import styled from 'styled-components'

export const Button = styled.button`
    border: ${(props) => props.theme === 'main' ? 'none' : 'none'};
    background: ${(props) => props.theme === 'main' ? 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)' : '#181F36'};
    font-size: 16px;
    color: white;
    padding: 16px 32px;
    width: fit - content;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
    background-color: ${(props) => props.theme === 'main' ? '#181F36' : '#18B9CD'};
    color: #181F36;
    font-weight: bold;
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
    }

    &:active {
    opacity: 0.1;
}`