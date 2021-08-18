import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 80px 0;

    background-color: #E8EBF1;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 574px;
    min-height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #FFFFFF;
    border-radius: 16px;
    box-shadow: 1px 0px 17px 0px rgba(0,0,0,0.26);
`;

export const Hr = styled.hr`
    width: 100%;
    height: 3px;
    background-color: #E8EBF1;
`;
export const Gratis = styled.div`
    width: 80%;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 16px;
    border-radius: 8px;
    background-color: #C5FDA4;
`;
export const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #4B9128;
`;