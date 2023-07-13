import {
  Container,
  CardTeam,
  TextHour,
} from './styles';

import { Header } from '@components/Header';
import { TeamView } from '@components/TeamView';
import { CardPlayer } from '@components/CardPlayer';

export function Details() {
  return (
    <Container>
      <Header />
      
      <CardTeam>
        <TeamView />
        <TextHour>Hoje 14:30</TextHour>
      </CardTeam>

      <CardPlayer />
    </Container>
  );
}
