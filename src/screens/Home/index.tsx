import { Container, Title } from './styles';
import { CardLive } from '@components/CardLive'
import { TouchableOpacity } from 'react-native';

export function Home() {
  return (
    <Container>
      <Title>Partida</Title>
      <TouchableOpacity onPress={() => console.log('Card pressed')}>
        <CardLive />
      </TouchableOpacity>
    </Container>
  );
}
