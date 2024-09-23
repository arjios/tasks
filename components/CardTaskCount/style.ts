import styled from "styled-components/native";
    
export const CardContainer = styled.View`
    align-items: center;
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    height: 80px;
    margin: 16px auto;
    max-width: 320px;
    padding: 0 16px;
    width: 100%;
`;

export const Card = styled.View`
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 4px;
    height: 80px;
    justify-content: center;
    width: 102px;
`;

export const TitleCard = styled.Text`
    color: #000000;
    font-size: 16px;
    font-weight: 400;
`;

export const CountCard = styled.Text`
    color: #000000;
    font-size: 24px;
    font-weight: 700;
`;
