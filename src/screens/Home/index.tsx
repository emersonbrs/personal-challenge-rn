import { useEffect, useState } from 'react';
import { TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

import moment from 'moment';
import 'moment/locale/pt-br';
import { useNavigation } from '@react-navigation/native';

import { Container, Content, Title } from './styles';
import { CardLive } from '@components/CardLive'

import { useList } from '@hooks/useList';

export function Home() {
  const navigation = useNavigation();

  const { getList, dataList } = useList();
  const [isLoading, setIsLoading] = useState(false);
  
  function scheduledFunction(scheduled: string){
    const today = new Date();
    const date = moment(scheduled).utc().locale('pt-br');
  
    let day = '';
  
    if(moment(today).utc().locale('pt-br').format('YYYY-MM-DD') === date.format('YYYY-MM-DD')) {
      day = 'Hoje, ' + date.format('HH:mm');
    } else {
      day = date.format('ddd, HH:mm');
    }
  
    return day;
  }

  function handleDetails(dataGame: {}, scheduled: string, isLoading: boolean){
    navigation.navigate('details', { dataGame, scheduled, isLoading });
  }

  useEffect(() => {
    getList().then(()=> setIsLoading(true));
  },[])

  console.log('dataList', dataList)

  return (
    <Container>
      <Title>Partidas</Title>
      {isLoading ?
        <ScrollView showsVerticalScrollIndicator={false}>
          {dataList && dataList.map((item) => (
            <TouchableOpacity onPress={() => handleDetails(item, scheduledFunction(item.scheduled_at), isLoading)}>
                <CardLive games={item} agenda={scheduledFunction(item.scheduled_at)}/>
            </TouchableOpacity>
          ))}
        </ScrollView>
          :
        <Content isLoading={isLoading}>
          <ActivityIndicator size="large" />
        </Content>
      }
    </Container>
  );
}
