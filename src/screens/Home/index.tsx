import { useEffect } from 'react';
import { TouchableOpacity, ScrollView, ActivityIndicator, RefreshControl, FlatList } from 'react-native';

import moment from 'moment';
import 'moment/locale/pt-br';
import { useNavigation } from '@react-navigation/native';

import { Container, Content, Title } from './styles';
import { CardLive } from '@components/CardLive'

import { useList } from '@hooks/useList';

export function Home() {
  const navigation = useNavigation();

  const { getList, dataList, isLoading, setIsLoading, refreshing, setRefreshing } = useList();
  
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

  function onRefresh() {
    setRefreshing(true);
    getList();
  }

  function renderCard(item: any) {
    return (
      <TouchableOpacity onPress={() => handleDetails(item, scheduledFunction(item.scheduled_at), isLoading)}>
        <CardLive games={item} agenda={scheduledFunction(item.scheduled_at)}/>
      </TouchableOpacity>
    )
  }

  useEffect(() => {
    setIsLoading(true);
    getList();
  },[])

  return (
    <Container>
      <Title>Partidas</Title>
      {!isLoading ?
      <FlatList data={dataList}
        renderItem={({item}) => renderCard(item)}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor='#FFF' colors={['#FFF']} />
        }
        onEndReachedThreshold={0.4}
      />

        // <ScrollView showsVerticalScrollIndicator={false}>
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor='#FFF' />
        //   {dataList && dataList.map((item) => (
        //     <TouchableOpacity onPress={() => handleDetails(item, scheduledFunction(item.scheduled_at), isLoading)}>
        //         <CardLive games={item} agenda={scheduledFunction(item.scheduled_at)}/>
        //     </TouchableOpacity>
        //   ))}
        // </ScrollView>
          :
        <Content isLoading={isLoading}>
          <ActivityIndicator size="large" />
        </Content>
      }
    </Container>
  );
}
