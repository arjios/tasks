import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    align-items: center;
    background-color: #28385E;
    border-radius: 4px;
    flex: 1;
    justify-content: flex-start;
    padding-top: 64px;
`;

export const InputContent = styled.View`
    align-items: center;
    border-radius: 4px;
    flex-direction: row;
    height: 60px;
    justify-content: center;
    margin: 0 auto;
    max-width: 320px;
    padding: 0 16px;
    width: 100%;
`;

export const InputTask = styled.TouchableOpacity`
    align-items: center;
    color: #FFFFFF;
    background-color: #252627;
    flex-direction: row;
    height: 56px;
    justify-content: flex-start;
    padding: 0 16px;
    width: 100%;
`;

export const InputText = styled.TextInput`
    color: #FFFFFF;
`;

export const ButtonContent = styled.TouchableOpacity`
    align-items: center;
    background-color: #252627;
    color: #FFFFFF;
    height: 56px;
    justify-content: center;
    width: 56px;
`;

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

export const TaskInfoContent = styled.View`
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
    max-width: 320px;
    width: 100%;
`;

export const TaskInfo = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 400;
`;

export const TaskContent = styled.View`
    align-items: flex-start;
    border-radius: 4px;
    flex-direction: row;
    justify-content: center;
    margin: 0px auto;
    max-width: 320px;
    padding: 8px 32px;
    width: 100%;
`;

export const TaskCheckButton = styled.TouchableOpacity`
    align-items: center;
    background-color: #E88A1A;
    color: #FFFFFF;
    height: 56px;
    justify-content: center;
    width: 56px;
`;

export const TaskTitleField = styled.TouchableOpacity`
    align-items: center;
    color: #FFFFFF;
    background-color: #304163;
    flex-direction: row;
    height: 56px;
    justify-content: flex-start;
    padding: 0 16px;
    width: 100%;
`;


export const TaskDeleteButton = styled.TouchableOpacity`
    align-items: center;
    background-color: #F22424;
    color: #FFFFFF;
    height: 56px;
    justify-content: center;
    width: 56px;
`;
