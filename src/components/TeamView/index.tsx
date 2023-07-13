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

export function TeamView() {
  return (
  <TeamContainer>
    <TeamWrapper>
      <TeamLogo />
      <TeamText>Time A</TeamText>
    </TeamWrapper>
    <View>
      <VSContainer>
        <VSText>vs</VSText>
      </VSContainer>
    </View>
    <TeamWrapper>
      <TeamLogo />
      <TeamText>Time B</TeamText>
      </TeamWrapper>
  </TeamContainer>
  );
};
