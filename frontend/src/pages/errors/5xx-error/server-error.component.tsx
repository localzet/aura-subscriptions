import { Button, Container, Group, Text, Title } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

import classes from './ServerError.module.css'

export function ErrorPageComponent() {
    const navigate = useNavigate()

    const handleRefresh = () => {
        navigate(0)
    }

    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.label}>500</div>
                <Title className={classes.title}>Что-то пошло не так...</Title>
                <Text className={classes.description} size="lg" ta="center">
                    Попробуйте обновить страницу.
                </Text>
                <Group justify="center">
                    <Button onClick={handleRefresh} size="md" variant="outline">
                        Обновить страницу
                    </Button>
                </Group>
            </Container>
        </div>
    )
}
