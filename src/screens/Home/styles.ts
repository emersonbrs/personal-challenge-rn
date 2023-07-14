import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

interface LoadingProps {
    isLoading: boolean;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    padding: 24px 38px 38px 38px;
`;

export const Content = styled.View<LoadingProps>`
    ${props => !props.isLoading && css`
        flex: 1;
        align-items: center;
        justify-content: center;
    `}
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
    font-size: 40px;
`;
