import React from 'react';
import { CsgoDTO, TeamViewDTO } from 'src/dtos/CsgoDTO';

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
      <LiveContainer>
        <LiveText>{agenda}</LiveText>
      </LiveContainer>
      <TeamView teams={games.opponents}/>
      <Footer>
        <FooterCircle />
        <FooterText>
          {games.league.name} {games.serie.season}
        </FooterText>
      </Footer>
    </CardContent>
  );
};
