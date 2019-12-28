import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Top, Logo, Title } from './styles'
import { NBLogo } from '~/helpers/images'

export default function Header() {
    return(
        <Container>
            <Top>
                <Logo source={NBLogo} />
                <Title>Carlos</Title>
            </Top>
            <Icon name='keyboard-arrow-down' size={20} color='#fff' />
        </Container>
    )
}
