import React from 'react';
import { View } from 'react-native';
import { 
  TeamWrapper,
  TeamLogo,
  TeamText,
  TeamContainer,
  VSContainer,
  VSText,
} from './styles';

import { TeamViewDTO } from 'src/dtos/CsgoDTO';

export function TeamView({ teams }: TeamViewDTO) {
  return (
  <TeamContainer>
    <TeamWrapper>
      <TeamLogo style={{resizeMode: 'contain'}} source={{uri: `${teams[0] !== undefined && teams[0].opponent.image_url}`}} withImg={teams[0] === undefined}/>
      <TeamText>{teams[0] !== undefined && teams[0].opponent.name}</TeamText>
    </TeamWrapper>
    <View>
      <VSContainer>
        <VSText>vs</VSText>
      </VSContainer>
    </View>
    <TeamWrapper>
      <TeamLogo style={{resizeMode: 'contain'}} source={{uri: `${teams[1] !== undefined && teams[1].opponent.image_url}`}} withImg={teams[1] === undefined}/>
      <TeamText>{teams[1] !== undefined && teams[1].opponent.name}</TeamText>
      </TeamWrapper>
  </TeamContainer>
  );
};
