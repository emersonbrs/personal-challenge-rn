import styled from "styled-components/native";
import theme from '@theme/index';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.COLORS.BLUE_200};
`;

export const Title = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    font-size: 40px;
    padding: 44px 0 0 24px;
`;
