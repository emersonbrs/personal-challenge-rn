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

export function TeamView({ teams }) {
  return (
  <TeamContainer>
    <TeamWrapper>
      <TeamLogo source={{uri: `${teams[0] !== undefined && teams[0].opponent.image_url}`}}/>
      <TeamText>{teams[0] !== undefined && teams[0].opponent.name}</TeamText>
    </TeamWrapper>
    <View>
      <VSContainer>
        <VSText>vs</VSText>
      </VSContainer>
    </View>
    <TeamWrapper>
      <TeamLogo source={{uri: `${teams[1] !== undefined && teams[1].opponent.image_url}`}}/>
      <TeamText>{teams[1] !== undefined && teams[1].opponent.name}</TeamText>
      </TeamWrapper>
  </TeamContainer>
  );
};
