import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 320px;
    height: 400px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    background-color: #fff;
    box-shadow: 1px 1px 17px 0px #ADADAD;
    border-radius: 8px;
    margin: 24px 16px;

`;
export const Img = styled.img`
    width: 320px;
    height: 240px;

    object-fit: cover;
    object-position: center;
`;
export const Content = styled.div`
    width: 320px;
    height: 160px;

    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
`;
export const TitleProduct = styled.h3`
    font-size: 16px;
    text-align: left;
    font-weight: 600;
    margin-bottom: 16px;
`;
export const ListPrice = styled.p`
    font-size: 12px;
    text-align: left;
    margin-bottom: 2px;
    opacity: 0.6;
`;
export const SellingPrice = styled.p`
    font-size: 16px;
    text-align: left;
    font-weight: 600;
    margin-bottom: 8px;
`;
export const Btn = styled.button`
    width:70%;
    height: 48px;

    border: 0;
    border-radius: 8px;
    background-color: #1263BE;
    color: white;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        box-shadow: 1px 1px 17px 0px #ADADAD;
        transition: 0.4s;
    }
`;