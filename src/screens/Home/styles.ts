import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
    font-size: 40px;
    padding: 44px 0 0 24px;
`;
