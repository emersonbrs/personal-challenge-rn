import { useNavigation } from '@react-navigation/native';
import { Container, TextHeader, BackButton, BackIcon } from './styles';
import { DataGame } from 'src/dtos/CsgoDTO';

import { useList } from '@hooks/useList';

export function Header({ dataGame }: DataGame) {

  const navigation = useNavigation();
  const { setPlayerListA, setPlayerListB} = useList();

  function handleGoBack(){
    setPlayerListA([]);
    setPlayerListB([]);
    navigation.goBack();
  }

  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <BackIcon />
      </BackButton>
      <TextHeader>{dataGame.league.name} {dataGame.serie.season}</TextHeader>
    </Container>
  );
};
