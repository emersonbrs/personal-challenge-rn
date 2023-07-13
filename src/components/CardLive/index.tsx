import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

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

export function CardLive({ games }) {
  
  function agendado(scheduled){
    const date = moment(scheduled).utc().locale('pt-br');

    const dayOfWeek = date.format('dddd');

    return dayOfWeek;
  }

  return (
    <View>
      <CardContent>
        <LiveContainer>
          <LiveText>{agendado(games.scheduled_at)}</LiveText>
        </LiveContainer>
        <TeamView teams={games.opponents}/>
        <Footer>
          <FooterCircle />
          <FooterText>
            {games.league.name} + {games.serie.season}
          </FooterText>
        </Footer>
      </CardContent>
    </View>
  );
};
