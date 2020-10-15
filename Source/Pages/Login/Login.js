import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import RenderSwiper from './LoginContainer'

import styles from './Loginstyles';


export default class Login extends React.Component {

    initalState = {
        contact: '',
        country: '',
    }

    constructor(props) {
        super(props);
        this.state = {
            ...this.initalState
        }
    }

    render() {
        const {navigation} =this.props
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView keyboardShouldPersistTaps="handled">
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1
                        }}>
                        <Image
                            source={require('../../Images/Login/Logo.png')}
                            style={{
                                width: 200,
                                height: 90,
                            }}
                        />
                    </View>
                    <RenderSwiper />
                    <View style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginTop: '10%',
                        width: '96%',
                    }}>
                        <Text style={{ fontSize: 22, marginLeft: '3%' }}>Welcome to ZigZag 👋</Text>
                    </View>
                    <View
                        style={{
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: '10%',
                            width: '100%',
                        }}>

                        <View
                            style={{
                                width: '90%',
                                margin: '4%',
                                borderColor: '#b0b5b7',
                                borderBottomColor: '#b0b5b7',
                                flexDirection: 'row'
                            }}>
                            <PhoneInput
                                ref={this.state.contact}
                                defaultCode="IN"
                                onChangeText={(text) => {
                                    this.setState({ contact: text })
                                }}
                                autoFocus
                                // textInputStyle={{ backgroundColor:'#ffffff' }}
                                // codeTextStyle ={{backgroundColor:'#ffffff'}}
                                // flagButtonStyle={{ borderWidth: 1, borderRadius: 15, marginRight: '5%', width: '30%', borderColor: '#afb3b9' }}
                                withShadow
                            />
                            <TouchableOpacity 
                            onPress={()=>navigation.navigate("LoginOtp",{Login:this.state.contact})}
                            style={{ alignSelf: 'center', borderColor: '#DEDEDE', marginLeft: '3%' }}>
                                <FontAwesome
                                    name="check"
                                    style={{ alignSelf: 'center', fontSize: 35, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignSelf: 'center', marginTop: '3%', padding: '3%' }}>
                            <GoogleSigninButton
                                style={{ width: 192, height: 48, borderRadius: 30 }}
                                size={GoogleSigninButton.Size.Wide}
                                color={GoogleSigninButton.Color.Light}
                                onPress={this._signIn}
                                disabled={this.state.isSigninInProgress} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

