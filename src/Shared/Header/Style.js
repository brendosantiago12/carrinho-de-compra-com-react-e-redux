import styled from 'styled-components'

export const Wrapper = styled.header`
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #1263BE;
    position: fixed;
    z-index: 100;
    box-shadow: 2px 1px 8px ;
`;
export const Container = styled.div`
    width: 100%;
    height:100%;
    max-width: 900px;

    display: flex;
    align-items: center;
    justify-content:space-between;
`;
export const Text = styled.p`
    font-size:24px;
    font-weight: 600;
    color: white;
    cursor: pointer;
`;