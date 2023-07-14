import { useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import {
  Container,
  Content,
  CardTeam,
  TextHour,
  CircleLive,
  CardLive,
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
    status: string;
  };
  scheduled: string;
  isLoading: boolean
}

export function Details() {
  const route = useRoute();
  const { dataGame, scheduled, isLoading } = route.params as RouteParams;

  return (
    <Container>
      <Header dataGame={dataGame} />
      
      {!isLoading ?
        <>
          <CardTeam>
            <TeamView teams={dataGame.opponents}/>
              <CardLive>
                {dataGame.status === 'running' && <CircleLive />}
                <TextHour status={dataGame.status}>
                  {dataGame.status === 'running' ? 'AGORA' : scheduled}
                </TextHour>
              </CardLive>
          </CardTeam>
          <CardPlayer teams={dataGame.opponents}/>
        </>
      :
        <Content isLoading={isLoading}>
          <ActivityIndicator size="large" />
        </Content>
      }
    </Container>
  );
}
// {games.status === 'running' ? 'AGORA' : agenda}