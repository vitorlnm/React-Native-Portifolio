import React, { useEffect, useRef } from 'react';
import { Animated, View, Linking, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../styles/theme';
import { Button } from '../components/Button';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const PerfilContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ImagemPerfil = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

const Titulo = styled.Text`
  color: ${theme.colors.text};
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  font-family: 'Montserrat_700Bold';
  margin-top: 10px;
`;

const Subtitulo = styled.Text`
  color: ${theme.colors.text};
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Montserrat_400Regular';
`;

const ContainerParagrafo = styled.View`
  margin: 15px 0px 15px 0px;
`;

const Paragrafo = styled.Text`
  color: ${theme.colors.text};
  font-size: 16px;
  font-weight: 100;
  text-align: center;
  margin-bottom: 15px;
  line-height: 24px;
  font-family: 'Montserrat_400Regular';
`;

const ContainerBotoes = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
  width: 100%;
`;

const Rodape = styled.View`
  position: absolute;
  bottom: 10px;
  width: 100%;
  align-items: center;
`;

const TextoRodape = styled.Text`
  color: ${theme.colors.text};
  font-size: 14px;
  text-align: center;
  font-family: 'Montserrat_400Regular';
  margin-bottom: 10px;
`;

export const ResumeScreen = () => {
  const escalaAnimada = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(escalaAnimada, {
          toValue: 1.08,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(escalaAnimada, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [escalaAnimada]);

  return (
    <Container>
      <PerfilContainer style={styles.sombra}>
        <Animated.View
          style={[
            {
              transform: [{ scale: escalaAnimada }],
              width: 126,
              height: 126,
              borderRadius: 100,
              borderWidth: 4,
              borderColor: theme.colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
            },
            styles.sombra,
          ]}
        >
          <ImagemPerfil source={require('../img/Eu.jpg')} />
        </Animated.View>
      </PerfilContainer>
      <Titulo>Vitor Gabriel Justin Brum</Titulo>
      <Subtitulo>Idade: 18 anos</Subtitulo>
      <ContainerParagrafo>
        <Paragrafo>
          Atualmente, estou focado em aprimorar minhas habilidades em desenvolvimento de sistemas, explorando linguagens como JavaScript, TypeScript, SQL,
          PHP, React, Java, HTML e CSS. Meu objetivo é obter experiência prática e insights de profissionais experientes para aprimorar meu conhecimento
          profissional.
        </Paragrafo>
        <Paragrafo>
          Comecei na Manutenção Elétrica no SENAI e fiz a transição para o desenvolvimento de software, onde descobri a paixão pelo design. Utilizo ferramentas
          como Figma para materializar ideias criativas, visando me tornar um desenvolvedor Front-end Web.
        </Paragrafo>
      </ContainerParagrafo>
      <ContainerBotoes>
        <View style={styles.sombra}>
          <Button title="GitHub" icon="github" onPress={() => Linking.openURL('https://github.com/vitorlnm')} />
        </View>
        <View style={styles.sombra}>
          <Button title="LinkedIn" icon="linkedin" onPress={() => Linking.openURL('https://www.linkedin.com/in/vitorbrum/')} />
        </View>
      </ContainerBotoes>
      <Rodape>
        <TextoRodape>Todos os direitos reservados @vitaolz</TextoRodape>
      </Rodape>
    </Container>
  );
};

const styles = StyleSheet.create({
  sombra: {
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 8,
  },
});
