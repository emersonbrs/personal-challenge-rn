import styled from "styled-components/native";

export const CardPlayerContainer = styled.View`
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
`;

export const CardWrapper = styled.View`
    flex-direction: column;
    justify-content: flex-start;
`;

export const CardLeft = styled.View`
    width: 174px;
    height: 54px;
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.COLORS.BLUE_100};
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const FrameName = styled.View``;

export const ViewFrame = styled.View`
    flex-direction: column;
`;

export const CardRight = styled.View`
    width: 174px;
    height: 54px;
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.COLORS.BLUE_100};
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const PlayerImg = styled.Image`
    width: 48.49px;
    height: 48.49px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-right: 8px;
    margin-left: 8px;
    margin-top: -20px;
    border-radius: 8px;
`;

export const NickNameLeft = styled.Text`
    font-size: 16px;
    text-align: right;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const PlayerNameLeft = styled.Text`
    font-size: 12px;
    text-align: right;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const NickNameRight = styled.Text`
    font-size: 16px;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const PlayerNameRight = styled.Text`
    font-size: 12px;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;