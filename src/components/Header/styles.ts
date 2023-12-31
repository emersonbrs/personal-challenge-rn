import styled from 'styled-components/native';
import theme from '@theme/index';
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
  margin-top: 52px;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const BackButton = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  left: 0;
`;

export const BackIcon = styled(ArrowLeft).attrs({
  size: 24,
  color: theme.COLORS.WHITE,
})`
  color: ${({ theme }) => theme.COLORS.WHITE}; 
  font-size: 28px;
  margin-left: 24px;
`;

export const TextHeader = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  text-align: center;
`

