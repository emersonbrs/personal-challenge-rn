import {
    CardPlayerContainer,
    CardLeft,
    CardRight,
    PlayerImg,
    FrameName,
    NickNameLeft,
    NickNameRight,
    PlayerNameLeft,
    PlayerNameRight,
  } from './styles';
  
  export function CardPlayer() {
    return (
        <CardPlayerContainer>
          <CardLeft>
            <FrameName>
              <NickNameLeft>SilverWolf</NickNameLeft>
              <PlayerNameLeft>Emerson Barbosa</PlayerNameLeft>
            </FrameName>
            <PlayerImg />
          </CardLeft>

          <CardRight>
            <PlayerImg />
            <FrameName>
              <NickNameRight>GoldenLion</NickNameRight>
              <PlayerNameRight>Arthur Frazão</PlayerNameRight>
            </FrameName>
          </CardRight>
        </CardPlayerContainer>
    );
  }
  