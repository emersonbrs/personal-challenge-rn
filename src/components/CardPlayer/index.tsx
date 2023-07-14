import { useEffect } from 'react';
import {
    CardPlayerContainer,
    CardLeft,
    CardRight,
    PlayerImg,
    ViewFrame,
    FrameName,
    NickNameLeft,
    NickNameRight,
    PlayerNameLeft,
    PlayerNameRight,
  } from './styles';
  
  import { useList } from '@hooks/useList';
  
  export function CardPlayer({ teams }) {
    const { getPlayer, playerListA, playerListB } = useList();

    useEffect(() => {
      getPlayer(teams[0], 'PlayerA');
      getPlayer(teams[1], 'PlayerB');
    },[])

    return (
      <>
        <CardPlayerContainer>    
          <ViewFrame>
            {playerListA.map((item) => (
              <CardLeft>
                <FrameName>
                  <NickNameLeft>{item.name}</NickNameLeft>
                  <PlayerNameLeft>{item.first_name}</PlayerNameLeft>
                </FrameName>
                  <PlayerImg />
              </CardLeft>
            ))}
          </ViewFrame>

          <ViewFrame>
            {playerListA.map((item) => (
              <CardRight>
                <PlayerImg />
                <FrameName>
                  <NickNameRight>{item.name}</NickNameRight>
                  <PlayerNameRight>{item.first_name}</PlayerNameRight>
                </FrameName>
              </CardRight>
            ))}
          </ViewFrame>
        </CardPlayerContainer>
      </>
    );
  }
  // {dataList && dataList.map((item) => (
  //   <TouchableOpacity onPress={() => handleDetails(item)}>
  //       <CardLive games={item}/>
  //   </TouchableOpacity>
  // ))}