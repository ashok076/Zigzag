import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Title } from 'react-native-paper'

import styles from './LoginOtpStyles'

export default class LoginOtp extends React.Component {

    initalstate = {
        otp: '',
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: '',
        otp5: '',
        otp6: '',
    }
    constructor(props) {
        super(props);
        this.state = {
            ...this.initalstate
        }
    }

    focuseText(text, index) {
        if (index == 1) {
            this.setState({ otp1: text })
        }
        else if (index == 2) {
            this.setState({ otp2: text })
        }
        else if (index == 3) {
            this.setState({ otp3: text })
        }
        else if (index == 4) {
            this.setState({ otp4: text })
        }
        else if (index == 5) {
            this.setState({ otp5: text })
        }
        else if (index == 6) {
            this.setState({ otp6: text })
        }
    }
    onSubmit() {
        const val = this.state.otp1 + this.state.otp2 + this.state.otp3 + this.state.otp4 + this.state.otp5 + this.state.otp6
        // alert(val)
        console.log(val)
        // this.props.navigation.navigate("CreateLogin") ;
    }
    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.titleView}>
                        <View style={styles.rowObject}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icons name="arrow-back" color="#5b57ba" size={24} />
                            </TouchableOpacity>
                            <Title style={styles.title}>Login</Title>
                        </View>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text style={styles.codeText}>Please enter 6-digits code that sent to you at +1 412 123 4567</Text>
                    </View>
                    <View style={styles.inputRoot}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                value={this.state.otp1}
                                maxLength={1}
                                onChangeText={(text) => this.focuseText(text, 1)}
                                style={styles.otpInput}
                            />
                            <TextInput
                                value={this.state.otp2}
                                maxLength={1}
                                onChangeText={(text) => this.focuseText(text, 2)}
                                style={styles.otpInput}
                            />
                            <TextInput
                                value={this.state.otp3}
                                maxLength={1}
                                onChangeText={(text) => this.focuseText(text, 3)}
                                style={styles.otpInput}
                            />
                            <TextInput
                                value={this.state.otp4}
                                maxLength={1}
                                onChangeText={(text) => this.focuseText(text, 4)}
                                style={styles.otpInput}
                            />
                            <TextInput
                                value={this.state.otp5}
                                maxLength={1}
                                onChangeText={(text) => this.focuseText(text, 5)}
                                style={styles.otpInput}
                            />
                            <TextInput
                                value={this.state.otp6}
                                maxLength={1}
                                onChangeText={(text) => this.focuseText(text, 6)}
                                style={styles.otpInput}
                            />
                        </View>

                    </View>
                    <View style={styles.timerView}>
                        <View>
                            <Text>Resend code in 0:48</Text>
                        </View>

                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("CreatetLogin")}
                        style={styles.button}>
                        <View
                            style={styles.buttonTouch}>
                            <View style={styles.buttonView}>
                                <Text style={styles.buttonText}>Confirm</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}