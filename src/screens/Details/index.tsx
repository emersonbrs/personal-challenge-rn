import { useRoute } from '@react-navigation/native';
import {
  Container,
  CardTeam,
  TextHour,
} from './styles';

import { Header } from '@components/Header';
import { TeamView } from '@components/TeamView';
import { CardPlayer } from '@components/CardPlayer';

type RouteParams = {
  dataGame: {
    opponents: []
  };
}

export function Details() {
  const route = useRoute();
  const { dataGame } = route.params as RouteParams;

  return (
    <Container>
      <Header />
      
      <CardTeam>
        <TeamView teams={dataGame.opponents}/>
        <TextHour>Hoje 14:30</TextHour>
      </CardTeam>

      <CardPlayer teams={dataGame.opponents}/>
    </Container>
  );
}
