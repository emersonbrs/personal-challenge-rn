import { useNavigation } from '@react-navigation/native';
import { Container, TextHeader, BackButton, BackIcon } from './styles';

export function Header() {
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <BackIcon />
      </BackButton>
      <TextHeader>League + serie</TextHeader>
    </Container>
  );
};
