import styled, { css } from 'styled-components/native';
interface TeamLogoProps {
  withImg: boolean;
}

export const TeamWrapper = styled.View`
  align-items: center;
  flex: 1;
`;

export const TeamLogo = styled.Image<TeamLogoProps>`
  width: 60px;
  height: 60px;
    
  ${props => props.withImg && css`
    border-radius: 50px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  `}
`;

export const TeamText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 10px;
  margin-top: 8px;
  text-align: center;
`;

export const TeamContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  z-index: 0;
`;

export const VSContainer = styled.View`
  margin-left: 8px;
`;

export const VSText = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
