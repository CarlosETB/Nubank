import React from 'react'
import styled from 'styled-components/native'

import { StatusBar } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import AppNavigator from './routes'

import { color } from './helpers/colors'


export default function App() {
    return (
        <>
          <StatusBar translucent backgroundColor={color.primary} />
          <Container >
            <AppNavigator />
          </Container>
        </>
    )
}

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${getStatusBarHeight()}px;
`
