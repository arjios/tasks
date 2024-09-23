import { useContext, useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

import {
    CardContainer,
    Container,
    TaskInfo,
    TaskInfoContent,
} from "./style";

import InputTaskAdd from '../../components/InputTaskAdd';
import CardTaskCount from "../../components/CardTaskCount";
import Task from "../../components/Task";
import {TaskContext} from "../../context/TaskContext";
import { TaskProps } from "../../utils/types";


export default function Home() { 
    const {tasks, createTask, setTasks} = useContext(TaskContext);

    const [taskText, setTaskText] = useState('');
    const [countTask, setCountTask] = useState(0);

    const [countTaskOpen, setCountTaskOpen] = useState(0);
    const [countTaskFinish, setCountTaskFinish] = useState(0);

    function handleTaskAdd() {
        if (taskText === "") {
            Alert.alert('Error: Tarefa com titulo vazio.')
            return
        };
        if (tasks.some((task) => task.title === taskText)) {
            Alert.alert('Error: Tarefa ja existe.')
            return
        };
        createTask(taskText);
        setTaskText('');
    }

    function handleTaskChangeStatus(taskToChange: TaskProps) {
        const updatedTasks = tasks.filter((task) => task.title !== taskToChange.title)
        const newTask = {
            id: taskToChange.id,
            title: taskToChange.title,
            status: !taskToChange.status,
        }
        updatedTasks.push(newTask)
        setTasks(updatedTasks)
    }

    function handleTaskDelete(taskToDelete: TaskProps) {
        Alert.alert("Atenção!", `Deseja excluir a tarefa ${taskToDelete.title}?`,
            [
                {
                    text: 'Sim',
                    onPress: (() => {
                        const updatedTasks = tasks.filter((task) => task.title !== taskToDelete.title)
                        setTasks(updatedTasks)
                    })
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ]
        )
    }

    useEffect(() => {
        let totalTasks = tasks.length;
        setCountTask(totalTasks);
    }, [tasks])

    useEffect(() => {
        let totalOpen = tasks.filter((task) => task.status === false).length;
        setCountTaskOpen(totalOpen);
    }, [tasks])

    useEffect(() => {
        let totalFinish = tasks.filter((task) => task.status === true).length;
        setCountTaskFinish(totalFinish);
    }, [tasks])

    return (
        <>
            <StatusBar style="auto" />
            <Container>
                <InputTaskAdd
                    onPress={handleTaskAdd}
                    onChangeText={setTaskText}
                    value={taskText}
                >
                </InputTaskAdd>
                <CardContainer>
                    <CardTaskCount
                        title="Cadastradas"
                        count={countTask}
                        color='#1E1E1E' />
                    <CardTaskCount
                        title="Em aberto"
                        count={countTaskOpen}
                        color='#E88A1A' />
                    <CardTaskCount
                        title="Finalizadas"
                        count={countTaskFinish}
                        color='#0E9577' />
                </CardContainer>


                <TaskInfoContent>
                    <TaskInfo>
                        Em Aberto:
                    </TaskInfo>
                </TaskInfoContent>
                <FlatList
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Task
                            id={item.id}
                            title={item.title}
                            status={item.status}
                            onCheck={() => handleTaskChangeStatus(item)}
                            onRemove={() => handleTaskDelete(item)}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <View>
                            <Text>Voce ainda não criou nenhuma tarefa</Text>
                        </View>
                    )}
                />
            </Container>
        </>
    );
}