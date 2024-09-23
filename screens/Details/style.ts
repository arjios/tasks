import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    align-items: center;
    background-color: #28385E;
    border-radius: 4px;
    flex: 1;
    justify-content: flex-start;
    padding-top: 32px;
`;

export const ReturnContent = styled.View`
    align-items: center;
    background-color: #28385E;
    flex-direction: row;
    gap: 8px;
    justify-content: flex-start;
    height: 56px;
    margin: 0px auto;
    max-width: 320px;
    width: 100%;
`;

export const ReturnButton = styled.TouchableOpacity`
    align-items: center;
    color: #FFFFFF;
    background-color: #28385E;
    flex-direction: row;
    height: 56px;
    justify-content: flex-start;
`;

export const ReturnButtonText = styled.Text`
    align-items: center;
    font-size: 16px;
    font-weight: 400;
`;

export const TitleContent = styled.View`
    align-items: center;
    background-color: #304163;
    border-radius: 4px;
    color: #FFFFFF;
    flex-direction: row;
    gap: 16px;
    justify-content: flex-start;
    height: 43px;
    margin: 0px auto;
    max-width: 320px;
    padding: 0 8px;
    width: 100%;
`;

export const TitleText = styled.Text`
    align-items: center;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 400;
`;

export const SubTitleContent = styled.View`
    align-items: center;
    border-radius: 4px;
    flex-direction: row;
    justify-content: flex-start;
    height: 23px;
    margin: 0px auto;
    margin-top: 16px;
    max-width: 320px;
    padding: 0 64px;
    width: 100%;
`;

export const SubTitleText = styled.Text`
    align-items: center;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 400;
`;

export const TaskContainer = styled.View`
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 auto;
    max-width: 320px;
    padding: 16px;
    width: 100%;
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
    padding: 0px 48px;
    width: 100%;
`;

export const TaskCheckButton = styled.TouchableOpacity`
    align-items: center;
    background-color: #E88A1A;
    border-radius: 4px;
    color: #FFFFFF;
    height: 48px;
    justify-content: center;
    width: 56px;
`;

export const TaskTitleField = styled.View`
    align-items: flex-start;
    background-color: #304163;
    height: 48px;
    justify-content: center;
    padding: 0 16px;
    width: 100%;
`;

export const TaskTextField = styled.Text`
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
