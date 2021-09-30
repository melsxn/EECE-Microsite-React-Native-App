import styled from 'styled-components';
import {View, Text, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import { Constants } from 'expo-constants';


export const Colors = {
    primary: '#444444',
    secondary: '#E5E7EB',
    tertiary: '#1F2937',
    darklight: '#9CA3AF',
    green: '#10B981',
    red: '#EF4444',
    buttoncolor: '#FFFFFF',
    darkblue: '#132C87'
    
};


const {primary, secondary, tertiary, darklight, green, red, buttoncolor,darkblue} = Colors;


export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: 100px;
    background-color: ${tertiary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const MicrositeBanner = styled.Image`
    width:100%;
    height: 113px;
    max-width: 100%;
    
`;

export const MicrositeTitle = styled.Text`
    fontFamily: Roboto;
    fontWeight: bold;
    letterSpacing: 5px;
    font-size: 35px;
    text-align: center;
    textShadowColor: #000000;
    textShadowRadius: 10px;
    color: ${red};
    padding-top: 10px;
`;

export const MicrositeLoginTitle = styled.Text`
    fontFamily: Roboto;
    fontWeight: bold;
    letterSpacing: 1px;
    font-size: 20px;
    text-align: center;
    textShadowColor: #000000;
    textShadowRadius: 10px;
    padding-bottom: 30px;
    color: ${red};
`;
export const StyledFormArea = styled.View`
    width: 90%;
`;
export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    font-size: 16px;
    height: 50px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;
export const StyledInputLabel = styled.Text`
    color: ${buttoncolor};
    font-size: 20px;
    fontFamily: Roboto;
    text-align: left;
`;
export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    align-content: center;
    background-color: ${darkblue};
    justify-content: center;
    border-radius: 6px;
    height: 50px;
    margin-vertical: 3px;
`;
export const ButtonBack = styled.TouchableOpacity`
    padding: 15px;
    align-content: center;
    background-color: ${primary};
    justify-content: center;
    border-radius: 6px;
    height: 50px;
    margin-vertical: 3px;
    margin-top: 10px;
`;

export const ButtonText = styled.Text`
    text-align: center;
    color: ${buttoncolor};
    fontFamily: Roboto;
    fontWeight: bold;
    font-size: 17px;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size; 12px;
    color: ${props => props.type == 'SUCCESS' ? green : red}
`;

export const DividerLine = styled.Text`
    text-align: center;
    font-size; 12px;
    color: ${buttoncolor};
    margin-vertical: 10px;
`;
