import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './LoginOtpStyles'
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Title } from 'react-native-paper'

export default class CreateLogin extends React.Component {

    initalstate = {
        otp: '',
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: '',
        otp5: '',
        otp6: '',
        timer: 0,
        maxTime: 60,
        displayTime: 0,
        seconds: 60,
    }
    constructor(props) {
        super(props);
        this.state = {
            ...this.initalstate
        }
    }

    componentDidMount() {
        this.timerStart()
    }
    timerStart() {

        this.myInterval = setInterval(() => {
            if (this.state.seconds != 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1,
                }))
            }
        }, 1000)
    }

    sendOtp() {

        this.timerStart()
    }


    focuseText(text, index) {
        if (index == 1) {
            this.setState({ otp1: text })
            this.two.focus()
        }
        else if (index == 2) {
            this.setState({ otp2: text })
            this.three.focus()
        }
        else if (index == 3) {
            this.setState({ otp3: text })
            this.four.focus()
        }
        else if (index == 4) {
            this.setState({ otp4: text })
            this.five.focus()
        }
        else if (index == 5) {
            this.setState({ otp5: text })
            this.six.focus()
        }
        else if (index == 6) {
            this.setState({ otp6: text })
            this.props.navigation.navigate("CreateAccount")
        }
      
    }
    onSubmit() {
        const val = this.state.otp1 + this.state.otp2 + this.state.otp3 + this.state.otp4 + this.state.otp5 + this.state.otp6
        alert(val)
        console.log(val)
    }
    render() {
        const { navigation } = this.props
        const { seconds } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.titleView}>
                        <View style={styles.rowObject}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icons name="arrow-back" color="#5b57ba" size={24} />
                            </TouchableOpacity>
                            <Title style={styles.title}>Create Account</Title>
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
                                ref ={(input)=>{ this.one = input ;}}
                                keyboardType={"numeric"}
                                style={styles.otpInput}
                            />
                            <TextInput
                                value={this.state.otp2}
                                maxLength={1}
                                keyboardType={"numeric"}
                                ref ={(input)=>{this.two =input}}
                                onChangeText={(text) => this.focuseText(text, 2)}
                                style={styles.otpInput}
                            />
                            <TextInput
                                value={this.state.otp3}
                                maxLength={1}
                                keyboardType={"numeric"}
                                ref ={(input)=>{this.three =input}}
                                onChangeText={(text) => this.focuseText(text, 3)}
                                style={styles.otpInput}
                            />
                            <TextInput
                                value={this.state.otp4}
                                maxLength={1}
                                keyboardType={"numeric"}
                                ref ={(input)=>{this.four =input}}
                                onChangeText={(text) => this.focuseText(text, 4)}
                                style={styles.otpInput}
                            />
                            <TextInput
                                value={this.state.otp5}
                                maxLength={1}
                                keyboardType={"numeric"}
                                ref ={(input)=>{this.five =input}}
                                onChangeText={(text) => this.focuseText(text, 5)}
                                style={styles.otpInput}
                            />
                            <TextInput
                                value={this.state.otp6}
                                maxLength={1}
                                keyboardType={"numeric"}
                                ref ={(input)=>{this.six =input}}
                                onChangeText={(text) => this.focuseText(text, 6)}
                                style={styles.otpInput}
                            />
                        </View>

                    </View>
                    <View style={styles.timerView}>
                        <View>
                            {seconds != 0 ?
                                <View>
                                    <Text>Resend code in 0 :{seconds < 10 ? `0${seconds}` : seconds}</Text>
                                </View>
                                :
                                <TouchableOpacity onPress={() => this.sendOtp()}>
                                    <Text> Resend code in Send again ?</Text>
                                </TouchableOpacity>
                            }
                        </View>

                    </View>
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate("CreateAccount")}
                        // onPress={()=>navigation.navigate("RecipientForm")}
                        style={styles.button}>
                        <View
                            style={styles.buttonTouch}>
                            <View style={styles.buttonView}>
                                <Text style={styles.buttonText}>Confirm</Text>
                            </View>
                        </View>
                    </TouchableOpacity> */}
                </ScrollView>
            </SafeAreaView>
        )
    }
}