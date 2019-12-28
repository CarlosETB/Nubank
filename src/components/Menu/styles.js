import { Animated, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(Animated.ScrollView)`
    margin: 0 30px;
`

export const Code = styled.View`
    padding: 10px;
    overflow: hidden;
    background: #fff;
    align-self: center;
`

export const Nav = styled.View` 
    margin-top: 30px;
    align-self: stretch;
    border-top-color: rgba(255, 255, 255, 0.8);
    border-top-width: ${StyleSheet.hairlineWidth}px;
`

export const NavItem = styled.View`
    padding: 12px 0;
    flex-direction: row;
    align-items: center;
    border-bottom-color: rgba(255, 255, 255, 0.8);
    border-bottom-width: ${StyleSheet.hairlineWidth}px;

`

export const NavText = styled.Text`
    color: #fff;
    font-size: 15px;
    margin-left: 20px;
`

export const SignOutButton = styled.TouchableOpacity`
    padding: 12px;
    margin-top: 15px;
    border-radius: 4px;
    align-items:center;
    justify-content:center;
    border-color: rgba(255, 255, 255, 0.8);
    border-width: ${StyleSheet.hairlineWidth}px;
`

export const SignOutButtonText = styled.Text`
    color: #fff;
    font-size:12px;
    font-weight: bold;
`