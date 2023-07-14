import { useNavigation } from '@react-navigation/native';
import { Container, TextHeader, BackButton, BackIcon } from './styles';
import { DataGame } from 'src/dtos/CsgoDTO';

export function Header({ dataGame }: DataGame) {

  const navigation = useNavigation();

  function handleGoBack(){
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
