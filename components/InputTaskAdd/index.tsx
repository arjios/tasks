import { Feather } from "@expo/vector-icons";

import { InputContent, InputTask, InputText, ButtonContent } from "./style"

type Props = {
    value: string;
    onPress: (title: string, status: boolean) => void;
    onChangeText: (text: string) => void;
}

export default function InputTaskAdd({ value, onPress, onChangeText }: Props) {

    return (
        <InputContent>
            <InputTask onPress={onPress} >
                <InputText
                    keyBoardType='default'
                    onChangeText={onChangeText}
                    placeholder='Digite uma nova tarefa'
                    placeholderTextColor='white'
                    value={value}>
                </InputText>
            </InputTask>
            <ButtonContent
                onPress={onPress}>
                <Feather name='plus-square' size={32} color='white' />
            </ButtonContent>
        </InputContent>
    );
}



