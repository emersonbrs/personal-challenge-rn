import { Container, Title } from './styles';
import { CardLive } from '@components/CardLive'
import { TouchableOpacity } from 'react-native';

export function Details() {
  return (
    <Container>
      <Title>Uhul</Title>
      <TouchableOpacity onPress={() => console.log('Card pressed')}>
        <CardLive />
      </TouchableOpacity>
    </Container>
  );
}
