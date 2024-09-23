
import { CardContainer, Card, TitleCard, CountCard } from "./style";

type Props={
    title: string,
    count: number,
    color: string,
}

export default function CardTaskCount({title, count, color}: Props) {

    return (
            <Card>
                <TitleCard>
                    {title}
                </TitleCard>
                <CountCard style = {color ? {color: color}: {}}>
                    {count}
                </CountCard>
            </Card>
    );
}
