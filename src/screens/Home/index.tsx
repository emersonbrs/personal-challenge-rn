import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { api } from '@services/api'

import { Container, Title } from './styles';
import { CardLive } from '@components/CardLive'
import { TouchableOpacity, ScrollView } from 'react-native';

export function Home() {

  const navigation = useNavigation();
  const [games, setGames] = useState([]);

  function handleDetails(){
    navigation.navigate('details');
  }

  async function test() {
    const params = {
      token: 'test token',
    };
    const response = await api.get('/csgo/matches?sort=&page=1&per_page=50', {params});
    setGames(response.data);
  }
  
  useEffect(() => {
    test();
  },[])

  return (
    <Container>
      <Title>Partidas</Title>
      <ScrollView>
        {games.map((item, index) => (
          <TouchableOpacity onPress={test}>
              <CardLive games={item}/>
          </TouchableOpacity>
			  ))}
        </ScrollView>
    </Container>
  );
}
