import React from 'react';
import { 
  TeamWrapper,
  TeamLogo,
  TeamText,
} from './styles';

export function TeamView() {
  return (
      <TeamWrapper>
        <TeamLogo />
        <TeamText>Time A</TeamText>
      </TeamWrapper>
  );
};
