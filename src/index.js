import React from 'react'
import styled from 'styled-components/native'

import { StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import '~/config/ReactotronConfig';

import Routes from '~/routes';

import { nbColor } from '~/helpers/colors'

const App = () => (
    <>
        <StatusBar barStyle='light-content' translucent backgroundColor='transparent'  />
        <Container>
            <Routes />
        </Container>
    </>
);

const Container = styled.SafeAreaView`
  flex: 1;
  background: ${nbColor.primary};
  padding: ${getStatusBarHeight()}px 0;
`


export default App;
