import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ButtonToggle } from '../../components/ButtonToggle';


import { UserImage, Container, Header, Title, Content, TextContainer, TextDescription, ToggleContent } from './styles'

export function MainScreen() {
  const [name, setName] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    // Update the document title using the browser API
    async function getName() {
      let userName;
      try {
        userName = await AsyncStorage.getItem("userName")
        if (userName !== null) {
          setName(userName)
        }
      } catch (error) {
        alert("Erro ao ler seu nome")
      }
    }
    getName()
  }, []);

  return (
    <Container>
      <Header>
        <Title>
          Olá {name}, {'\n'}Como você está?
        </Title>

        <UserImage
          source={{ uri: 'https://avatars.githubusercontent.com/u/67297161?v=4' }}
        />
      </Header>

      <Content>
        <TextContainer>
          <TextDescription style={{ fontWeight: 'bold' }}>Em qual ambiente</TextDescription>
          <TextDescription>você quer colocar sua planta?</TextDescription>
        </TextContainer>

        <ToggleContent>
          <ButtonToggle
            title="Sala"
            onPress={() => console.log("Sala selecionada")}

          />

          <ButtonToggle
            title="Quarto"
            onPress={() => console.log("Quarto Selecionado")}

          />

          <ButtonToggle
            title="Cozinha"
            onPress={() => console.log("Cozinha Selecionada")}

          />

          <ButtonToggle
            title="Banheiro"
            onPress={() => console.log("Banheiro Selecionado")}

          />

        </ToggleContent>



      </Content>

    </Container>
  );
}