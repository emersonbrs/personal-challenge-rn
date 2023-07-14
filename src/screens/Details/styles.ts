import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';
interface LiveTextProps {
  status: string;
}

interface LoadingProps {
    isLoading: boolean;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
`;

export const Content = styled.View<LoadingProps>`
    ${props => !props.isLoading && css`
        flex: 1;
        align-items: center;
        justify-content: center;
    `}
`

export const CardTeam = styled.View`
    width: 312px;
    border-radius: 16px;
    padding: 24px 24px 0 24px;
    align-self: center;
    align-items: center; /* Adicionado para centralizar verticalmente os elementos */
`;

export const CardLive = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TextHour = styled.Text<LiveTextProps>`
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    text-align: center;
    margin: 15px;

    ${props => props.status === 'running' && css`
        padding: 10px;
        color: ${({ theme }) => theme.COLORS.RED};
    `}

    ${props => props.status !== 'running' && css`
        padding: 10px;
        text-transform: capitalize;
    `}
`;

export const CircleLive = styled.View`
    width: 12px;
    height: 12px;
    border-radius: 6px;
    margin-right: -10px;
    background-color: ${({ theme }) => theme.COLORS.RED};
`;

