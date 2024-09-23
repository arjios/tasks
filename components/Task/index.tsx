import { TaskCheckButton, TaskContent, TaskTitleField, TitleFieldText, TaskDeleteButton, TaskContainer } from "./style";
import { Feather } from "@expo/vector-icons";

import { TaskProps, RootStackParamList } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Task(props: TaskProps) {

    const navigation = useNavigation<Props['navigation']>();
    const {selectTask} = useContext(TaskContext);

    function HandlePress() {
        navigation.navigate('Details');
        selectTask(props);
    }

    return (
        <TaskContainer>
            <TaskContent>
                <TaskCheckButton onPress={props.onCheck} style={props.status ? { backgroundColor: '#0E9577' } : {}}>
                    {props.status && <Feather name='check-square' size={32} color='white' backgroundColor='#0E9577'/>}
                    {!props.status && <Feather name='square' size={32} color='white' />}
                </TaskCheckButton>
                <TaskTitleField onPress={() => HandlePress()}>
                    <TitleFieldText>
                        {props.title}
                    </TitleFieldText>
                </TaskTitleField>
                <TaskDeleteButton onPress={props.onRemove}>
                    <Feather name='trash-2' size={32} color='white' />
                </TaskDeleteButton>
            </TaskContent>
        </TaskContainer>
    );
}



