import styled from 'styled-components/native'
import colors from '../../global/styles/colors'

export const Container = styled.TouchableOpacity`
  height: 56px;
  background-color: ${colors.green};
  border-radius: 6px;
  align-items: center;
  width: 54px;
  justify-content: center;
  width: 50%;
  margin: 30px 0;
`

export const Title = styled.Text`
  font-weight: bold;
  color: ${colors.red};
`