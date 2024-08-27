import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../styles/theme';

const ButtonContainer = styled(TouchableOpacity)`
  background-color: ${theme.colors.primary};
  padding: 12px 25px;
  border-radius: 30px;
  margin: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
`;

const ButtonText = styled(Text)`
  color: ${theme.colors.buttonText};
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  margin-left: 10px;
`;

interface ButtonProps {
  title: string;
  icon: keyof typeof FontAwesome.glyphMap;
  onPress: () => void;
}

export const Button = ({ title, icon, onPress }: ButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      <FontAwesome name={icon} size={20} color={theme.colors.buttonText} />
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};
