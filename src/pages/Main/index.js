import React from 'react'
import { Container, Title, Text, Image } from './styles'
import { Logo } from '~/helpers/images'

export default function MainPage() {

    let title = 'Hello World !!'
    let text = '\n \n Bem vinda ao nosso template. \nEssa é a sua tela principal'

    return(
        <Container>
            <Image source={Logo} />
            <Text>
                <Title>
                    {title}
                </Title>
                {text}
            </Text>
        </Container>
    )
}


