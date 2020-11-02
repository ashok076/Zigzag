import React from 'react';
import { View, SafeAreaView, StatusBar, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import { Title } from 'react-native-paper'
import Icons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import styles from './PaymentStyles';

export default class Payment extends React.Component {

    initialState = {

    }

    constructor(props) {
        super(props);
        this.state = {
            ...this.initialState
        }
    }
    componentDidMount() {
        console.log(this.props.name)
    }

    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <StatusBar backgroundColor="#5B57BA" />
                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icons name="arrow-back" color="#5b57ba" size={24} />
                        </TouchableOpacity>
                        <Title style={styles.title}>Payment Method</Title>
                    </View>
                </View>
                <View style={{ flex: 1, width: '100%', }}>
                    <View style={{ marginLeft: '3%', margin: "5%" }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Manrope-ExtraLight_Bold' }}>Choose Payment Method</Text>
                    </View>
                    <View style={[styles.CreateinputRoot, { borderColor: '#5B57BA', }]}>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: '#5B57BA', fontSize: 15 }}>Boxipay</Text>
                        </View>
                        <View style={{alignSelf:'center'}}>
                            <Text>$249.00</Text>
                        </View>
                    </View>
                    <View style={[styles.CreateinputRoot, { borderColor: '#4646464D', marginTop: '5%' }]}>
                        <View style={{ alignSelf: 'center' }}>
                            <Fontisto name="apple-pay" style={{ fontSize: 35, }} />
                        </View>
                        <View style={{alignSelf:'center'}}>
                            <Text>kitani@icloud.com</Text>
                        </View>
                    </View>
                    <View style={[styles.CreateinputRoot, { borderColor: '#4646464D', marginTop: '5%' }]}>
                        <View style={{ alignSelf: 'center' }}>
                            <FontAwesome5Brands name="cc-visa" style={{ fontSize: 45, }} />
                        </View>
                        <View style={{alignSelf:'center'}}>
                            <Text>●●●●  856</Text>
                        </View>
                    </View>
                  
                   
                    </View>
                    <TouchableOpacity
                            onPress={() => { }}
                            style={styles.button}>
                            <View
                                style={styles.buttonTouch}>
                                <View style={styles.buttonView}>
                                    <Text style={styles.buttonText}>Confirm</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


            </SafeAreaView>
        )
    }
}
