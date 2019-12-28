import styled from 'styled-components/native'
import { color } from '~/helpers/colors'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${color.primary};
`

export const Image = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

export const Text = styled.Text`
  color: #fff;
  font-size: 15px;
  text-align: center;
`
