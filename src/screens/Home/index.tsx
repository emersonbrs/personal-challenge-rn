import { useEffect, useState } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { api } from '@services/api'

import { Container, Title } from './styles';
import { CardLive } from '@components/CardLive'

import { useList } from '../../hooks/useList';

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
        {dataList.map((item) => (
          <TouchableOpacity onPress={handleDetails}>
              <CardLive games={item}/>
          </TouchableOpacity>
			  ))}
        </ScrollView>
    </Container>
  );
}
