import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 108px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 24px;
`;

export const Btn = styled.button`
    width: 80%;
    height: 64%;

    border: 0;
    border-radius: 8px;
    background-color: #1263BE;
    color: white;
    font-size: 24px;
    font-weight: 800;
    cursor: pointer;

    &:hover {
        box-shadow: 1px 1px 17px 0px #ADADAD;
        transition: 0.4s;
    }
`;