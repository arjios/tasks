import styled from 'styled-components/native';

export const TaskContainer = styled.TouchableOpacity`
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0px auto;
    max-width: 360px;
    width: 100%;
`;

export const TaskContent = styled.View`
    align-items: flex-start;
    border-radius: 4px;
    flex-direction: row;
    justify-content: center;
    margin: 0px auto;
    max-width: 360px;
    padding: 4px 64px;
    width: 100%;
`;

export const TaskCheckButton = styled.TouchableOpacity`
    align-items: center;
    background-color: #E88A1A;
    border-radius: 4px;
    color: #FFFFFF;
    height: 48px;
    justify-content: center;
    width: 48px;
`;

export const TaskTitleField = styled.TouchableOpacity`
    align-items: center;
    color: #FFFFFF;
    background-color: #304163;
    flex-direction: row;
    height: 48px;
    justify-content: flex-start;
    padding: 0 16px;
    width: 100%;
`;

export const TitleFieldText = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 400;
`;

export const TaskDeleteButton = styled.TouchableOpacity`
    align-items: center;
    background-color: #F22424;
    border-radius: 4px;
    color: #FFFFFF;
    height: 48px;
    justify-content: center;
    width: 48px;
`;

