import { AntDesign, Feather } from "@expo/vector-icons";
import { Container, ReturnButton, ReturnButtonText, ReturnContent, SubTitleContent, SubTitleText, TaskCheckButton, TaskContainer, TaskContent, TaskDeleteButton, TaskInfoContent, TaskTextField, TaskTitleField, TitleContent, TitleText } from "./style";

import { RootStackParamList } from '../../utils/types';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Details() {

    const {task} = useContext(TaskContext);
    const navigation = useNavigation<Props['navigation']>();

    return (
        <Container>
            <ReturnContent>
                <ReturnButton onPress={() => navigation.popToTop()}>
                    <AntDesign name='left' size={24} color='white' />
                </ReturnButton>
                <ReturnButtonText onPress={() => navigation.popToTop()}>
                    Voltar
                </ReturnButtonText>
            </ReturnContent>
            <TitleContent>
                <TitleText>
                    {task.title}
                </TitleText>
            </TitleContent>
            <SubTitleContent>
                <SubTitleText>
                    Status da tarefa:
                </SubTitleText>
            </SubTitleContent>
            <TaskContent>
                <TaskCheckButton style={task.status ? { backgroundColor: '#0E9577' } : {}} >
                    {!task.status && <Feather name='square' size={32} color='white' />}
                    {task.status && <Feather name='check-square' size={32} color='white' />}
                </TaskCheckButton>
                <TaskTitleField>
                    <TaskTextField>
                        {task.status ? 'Realizada' : 'Em aberto'} 
                    </TaskTextField>
                </TaskTitleField>
                <TaskDeleteButton>
                    <Feather name='trash-2' size={32} color='white' />
                </TaskDeleteButton>
            </TaskContent>
        </Container>
    );
}