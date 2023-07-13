import styled from "styled-components/native";
import theme from '@theme/index';

export const CardPlayerContainer = styled.View`
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
`;

export const CardLeft = styled.View`
    width: 174px;
    height: 54px;
    background-color: ${theme.COLORS.BLUE_100};
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;


export const FrameName = styled.View`
`;

export const CardRight = styled.View`
    width: 174px;
    height: 54px;
    background-color: ${theme.COLORS.BLUE_100};
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const PlayerImg = styled.View`
    width: 48.49px;
    height: 48.49px;
    background-color: ${theme.COLORS.GRAY_200};
    margin-right: 8px;
    margin-left: 8px;
    margin-top: -20px;
    border-radius: 8px;
`;

export const NickNameLeft = styled.Text`
    font-size: 16px;
    text-align: right;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const PlayerNameLeft = styled.Text`
    font-size: 12px;
    text-align: right;
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
`;

export const NickNameRight = styled.Text`
    font-size: 16px;
    text-align: left;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const PlayerNameRight = styled.Text`
    font-size: 12px;
    text-align: left;
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
`;