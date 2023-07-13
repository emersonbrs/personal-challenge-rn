import React from 'react';
import { View } from 'react-native';
import { 
  CardContent,
  LiveContainer,
  LiveText,
  TeamContainer,
  VSContainer,
  VSText,
  Footer,
  FooterText,
  FooterCircle
} from './styles';

import { TeamView } from '@components/TeamView'

export function CardLive() {
  return (
    <View>
      <CardContent>
        <LiveContainer>
          <LiveText>Agora</LiveText>
        </LiveContainer>
        <TeamContainer>
          <TeamView />
          <View>
            <VSContainer>
              <VSText>vs</VSText>
            </VSContainer>
          </View>
          <TeamView />
        </TeamContainer>
        <Footer>
          <FooterCircle />
          <FooterText>
            League + series
          </FooterText>
        </Footer>
      </CardContent>
    </View>
  );
};
