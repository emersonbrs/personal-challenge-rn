import styled from 'styled-components/native';

// Card
export const CardContainer = styled.View``

export const CardContent = styled.View`
  width: 312px;
  height: 176px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
  border-radius: 16px;
  padding: 24px;
  margin: 20px;
  align-self: center;
`;

export const LiveContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};

  padding: 8px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

export const LiveText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 8px;
  font-weight: bold;
  text-transform: capitalize;
`;

// Footer
export const Footer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_300};
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
`;

export const FooterText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 8px;
  margin-left: 5px;
`;

export const FooterCircle = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-right: 4px;
`;