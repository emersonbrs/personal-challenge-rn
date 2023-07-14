import { useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';
import { CardLive } from '@components/CardLive'

import { useList } from '@hooks/useList';

export function Home() {
  const navigation = useNavigation();

  const { getList, dataList } = useList();

  function scheduledFunction(scheduled: string){
    const date = moment(scheduled).utc().locale('pt-br');
    const dayOfWeek = date.format('ddd, HH:mm');
    return dayOfWeek;
  }

  function handleDetails(dataGame: {}, scheduled: string){
    navigation.navigate('details', { dataGame, scheduled });
  }

  useEffect(() => {
    getList();
  },[])

  return (
    <Container>
      <Title>Partidas</Title>
      <ScrollView>
        {dataList && dataList.map((item) => (
          <TouchableOpacity onPress={() => handleDetails(item, scheduledFunction(item.scheduled_at))}>
              <CardLive games={item} agenda={scheduledFunction(item.scheduled_at)}/>
          </TouchableOpacity>
			  ))}
        </ScrollView>
    </Container>
  );
}
