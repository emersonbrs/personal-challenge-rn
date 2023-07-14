import { useRoute } from '@react-navigation/native';
import {
  Container,
  CardTeam,
  TextHour,
} from './styles';

import { Header } from '@components/Header';
import { TeamView } from '@components/TeamView';
import { CardPlayer } from '@components/CardPlayer';

import { Team } from 'src/dtos/CsgoDTO';

type RouteParams = {
  dataGame: {
    opponents: Team
    league: {
      name: string;
    },
    serie: {
      season: string;
    },
  };
  scheduled: string;
}

export function Details() {
  const route = useRoute();
  const { dataGame, scheduled } = route.params as RouteParams;

  return (
    <Container>
      <Header dataGame={dataGame} />
      
      <CardTeam>
        <TeamView teams={dataGame.opponents}/>
        <TextHour>{scheduled}</TextHour>
      </CardTeam>

      <CardPlayer teams={dataGame.opponents}/>
    </Container>
  );
}
