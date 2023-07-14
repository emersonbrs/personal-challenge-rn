import React from 'react';
import { CsgoDTO } from 'src/dtos/CsgoDTO';

import { 
  CardContent,
  LiveContainer,
  LiveText,
  Footer,
  FooterText,
  FooterCircle
} from './styles';

import { TeamView } from '@components/TeamView';
interface CardLiveProps {
  games: CsgoDTO;
  agenda: string;
}

export function CardLive({ games, agenda }: CardLiveProps) {
  return (
    <CardContent>
      <LiveContainer status={games.status === 'running'}>
        <LiveText status={games.status}>{games.status === 'running' ? 'AGORA' : agenda}</LiveText>
      </LiveContainer>
      <TeamView teams={games.opponents}/>
      <Footer>
        <FooterCircle style={{resizeMode: 'contain'}} source={{uri: games.league.image_url}} withImg={games.league.image_url}/>
        <FooterText>
          {games.league.name} {games.serie.season}
        </FooterText>
      </Footer>
    </CardContent>
  );
};
