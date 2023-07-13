import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
`;

export const CardTeam = styled.View`
    width: 312px;
    border-radius: 16px;
    padding: 24px 24px 0 24px;
    align-self: center;
`;

export const TextHour = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    text-align: center;
    padding: 25px;
`;
