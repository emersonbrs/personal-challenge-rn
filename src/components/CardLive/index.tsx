import React from 'react';
import { View } from 'react-native';
import { 
  CardContent,
  LiveContainer,
  LiveText,
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
        <TeamView />
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
