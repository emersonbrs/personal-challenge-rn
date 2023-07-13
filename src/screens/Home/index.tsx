import { useEffect } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';
import { CardLive } from '@components/CardLive'

import { useList } from '@hooks/useList';

export function Home() {
  const navigation = useNavigation();

  const { getList, dataList } = useList();

  function handleDetails(){
    navigation.navigate('details');
  }

  useEffect(() => {
    getList();
  },[])

  return (
    <Container>
      <Title>Partidas</Title>
      <ScrollView>
        {dataList && dataList.map((item) => (
          <TouchableOpacity onPress={handleDetails}>
              <CardLive games={item}/>
          </TouchableOpacity>
			  ))}
        </ScrollView>
    </Container>
  );
}
