import { StatusBar } from 'expo-status-bar';

import { Container, Title } from './styles';

export function Home() {
  return (
    <Container>
      <Title>Initial Project!</Title>
      <StatusBar style="auto" />
    </Container>
  );
}
