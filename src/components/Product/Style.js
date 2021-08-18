import styled from 'styled-components'

export const Wrapper = styled.div`
    width: calc(100% - 24px);
    height: 128px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 8px;
`;

export const Img = styled.img`
    width: 128px;
    height:128px;
    object-fit: cover;
    object-position: center;
    border: 2px solid #E8EBF1;
`;
export const Content =  styled.div`
    width: calc(100% - 128px);
    height: 128px;

    display: flex;
    flex-direction:column;
    justify-content: center;

    margin-left: 24px;
`;
export const TitleProduct = styled.h3`
    font-size: 16px;
    text-align: left;
    font-weight: 600;
    margin-bottom: 8px;
`;
export const ListPrice = styled.p`
    font-size: 12px;
    text-align: left;
    margin-bottom: 5px;
    opacity: 0.6;
`;
export const SellingPrice = styled.p`
    font-size: 16px;
    text-align: left;
    font-weight: 600;
`;