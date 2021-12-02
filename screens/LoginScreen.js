import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Colors, InnerContainer, MicrositeBanner, MicrositeLoginTitle, MicrositeTitle, StyledContainer, StyledFormArea, StyledTextInput, StyledInputLabel, StyledButton, ButtonText, LeftIcon, RightIcon, MsgBox, DividerLine, ButtonBack} from "../components/styles";

import { Formik } from "formik";
import { View, ScrollView } from "react-native";





//icon import
import{Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

//calling color styles
const {red, darklight} = Colors;


import axios from "axios";


const LoginScreen = ({navigation}) => {
        const [hidePassword] = useState(true);
        const [message, setMessage] = useState();
        const [messageType, setMessageType] = useState();

        const handleLogin = (credentials)=> {
            const uri = 'http://192.168.1.10:3000/user/signin';
            //http://localhost:3000/user/signin
            axios.post(uri, credentials).then((response) => {
                const results = response.data;
                const {message, status, data} = results;
                
                //console.log(data);
                // if condition here to direct to admin ui 
                if(status !== 'SUCCESS'){
                    handleMessage(message,status);
                } else {
                    navigation.navigate('AdminScreen');
                }
                
            })
            .catch(error => {
                console.log("error");
            })
        }
        
        const handleMessage = (message, type = 'FAILED') => {
            setMessage(message);
            setMessageType(type);
        }

        

    return(
    <ScrollView>
        <StyledContainer>
            <StatusBar style="light" />
            
            <InnerContainer>
                <MicrositeBanner source={require('../assets/EECE-Banner.jpg')}></MicrositeBanner>
                <MicrositeTitle>Mapúa EECE Microsite</MicrositeTitle>
                <MicrositeLoginTitle>Admin Login</MicrositeLoginTitle>
                <Formik
                    initialValues={{username:'', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);

                        handleLogin(values);
                        
                        //axios.post('http://192.168.1.2:3000/user/signin', values)
                        //navigation.navigate('Afterlog');
                        

                    }}
                >{({handleChange,handleBlur,handleSubmit, values}) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Username"
                                icon="person"
                                placeholder="username"
                                placeholderTextColor={darklight}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                values={values.username}
                                keyboardType="email-address"
                            />

                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="* * * * * * * * * *"
                                placeholderTextColor={darklight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                values={values.password}
                                secureTextEntry={hidePassword}

                                
                            />
                            <MsgBox type={messageType}>{message}</MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>Sign in</ButtonText>
                            </StyledButton>
                            <DividerLine>_______________________________________________</DividerLine>
                            <ButtonBack  onPress={() => navigation.navigate("AddProgram")}>
                                <ButtonText>Back</ButtonText>
                            </ButtonBack>
                        </StyledFormArea>
                )}

                </Formik>
            </InnerContainer>
            
        </StyledContainer>
    </ScrollView>
    );
};

const MyTextInput = ({label, icon, hidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
            <Octicons name={icon} size={35} color={red} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
        </View>
    )
}

export default LoginScreen;