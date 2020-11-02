import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';
import Feather from 'react-native-vector-icons/Feather'
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

    validatephone(num) {
        debugger
        var ldata = ''
            ldata = num
            if (num.charAt(num.length - 1) == '.' || num.charAt(num.length - 1) == ' ' || num.charAt(num.length - 1) == ' ') {
                ldata = num.substring(0, num.length - 1);
            }
            this.setState({
                contact: ldata
            })
    }

    sendOtp(){
        if(this.state.contact.length == 10){
            this.props.navigation.navigate("LoginOtp", { Login: this.state.contact })
        }
        else{
            alert('Contact number must be 10 digits')
        }
        
    }

    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView keyboardShouldPersistTaps="handled">
                 
                        <View
                        style={{
                            flex: 1,width:'100%',marginTop:'10%'
                        }}>
                        <Image
                            source={require('../../Images/Login/Logo.png')}
                            style={{width:175,height:70,alignSelf:'center'}}
                        />
                    </View>
                        <RenderSwiper />
                        <View style={{
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: '20%',
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
                                    // ref={this.state.contact}
                                    value ={this.state.contact}
                                    defaultCode="IN"
                                    onChangeText={(text) => {this.validatephone(text)}}
                                    autoFocus
                                    withShadow
                                />
                                <TouchableOpacity
                                    onPress={() => this.sendOtp()}
                                    style={{ alignSelf: 'center', borderColor: '#DEDEDE', marginLeft: '3%' }}>
                                    <Feather
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

