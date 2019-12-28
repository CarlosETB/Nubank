import { Animated } from 'react-native'
import styled from 'styled-components/native'
import { nbColor } from '../../helpers/colors'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: ${nbColor.primary};
`
export const Content = styled.View`
  flex: 1;
  z-index: 5;
  max-height: 400px;
`

export const Card = styled(Animated.View)`
  top: 0;
  flex: 1;
  left: 0;
  right: 0;
  height: 100%;
  margin: 0 20px;
  background: #fff;
  border-radius: 4px;
  position: absolute;
`
export const CardHeader = styled.View`
  padding: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`

export const CardFooter = styled.View`
  padding: 30px;
  border-radius: 4px;
  background-color: #eee;
`

export const Title = styled.Text`
  color: #999;
  font-size: 20px;
`

export const Description = styled.Text`
  color: #333;
  margin-top: 3px;
  font-size: 32px;
`

export const Annotation = styled.Text`
  color: #333;
  font-size: 12px;
`