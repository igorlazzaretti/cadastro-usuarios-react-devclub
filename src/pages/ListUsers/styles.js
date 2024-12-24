import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`

export const AvatarUser = styled.img`
    width: 80px;
`

export const Title = styled.h2`
    color: white;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
`
export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 40px 0;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`
export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 380px;

    h3 {
        color: white;
        font-size: 24px;
        margin-bottom: 3px;
        // Transforma a primeira letra em maiúscula	
        text-transform: capitalize;
    }

    p {
        color: white;
        font-size: 14px;
        font-weight: 200;
    }
`
export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`