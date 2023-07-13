import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';
import { CardLive } from '@components/CardLive'
import { TouchableOpacity } from 'react-native';

export function Home() {

  const navigation = useNavigation();

  function handleDetails(){
    navigation.navigate('details');
  }

  return (
    <Container>
      <Title>Partidas</Title>
      <TouchableOpacity onPress={handleDetails}>
        <CardLive />
      </TouchableOpacity>
    </Container>
  );
}
