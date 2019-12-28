import { Animated } from 'react-native'
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {
        paddingLeft: 10,
        paddingRight: 20
    },
    showsHorizontalScrollIndicator: false
})``

export const TabsItem = styled.View`
    width: 100px;
    height: 100px;
    padding: 10px;
    margin-left: 10px;
    border-radius: 2px;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.2);
`

export const TabText = styled.Text`
    color: #fff;
    font-size: 13px;
`