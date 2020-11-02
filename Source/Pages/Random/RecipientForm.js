import React from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons'

import { Card, } from 'react-native-paper'


import styles from './RecipientStyles'



export default class RecipientForm extends React.Component {

    initialState = {
        RecipName: '',
        RecipAddress: '',
        RecipZip: '',
        RecipContact: '',
        RecipNotes: '',
    }
    constructor(props) {
        super(props)
        this.state = {
            ...this.initialState
        }
    }

    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#5B57BA" />
                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icons name="arrow-back" color="#393690" size={24} />
                        </TouchableOpacity>
                        <View style={{ width: '30%', marginLeft: '3%' }}>
                            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                                <Icons name="radio-button-checked" style={{ fontSize: 25, alignSelf: 'center', color: '#9FECF1', marginLeft: "20%" }} />
                                <View style={{ borderWidth: 1, alignSelf: 'center', borderColor: '#ffffff', width: '70%' }} />
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <Text style={{ color: '#ffffff', fontFamily: 'Manrope-ExtraLight_SemiBold', fontSize: 10 }}>Recipient Form</Text>
                            </View>
                        </View>
                        <View style={{ width: '30%', marginLeft: '3%' }}>
                            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                                <View style={{ borderWidth: 1, alignSelf: 'center', borderColor: '#ffffff', width: '100%' }} />
                                <Octicons name="primitive-dot" style={{ fontSize: 25, alignSelf: 'center', color: '#E3E3E3', marginRight: '80%' }} />
                            </View>
                            <View style={{ marginTop: '5%', alignSelf: 'center' }}>
                                <Text style={{ color: '#DEDEDE', fontFamily: 'Manrope-ExtraLight_SemiBold', fontSize: 10 }}>Package information</Text>
                            </View>
                        </View>
                        <View style={{ width: '30%', marginLeft: '3%' }}>
                            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                                <View style={{ borderWidth: 1, alignSelf: 'center', borderColor: '#ffffff', width: '100%' }} />
                                <Octicons name="primitive-dot" style={{ fontSize: 25, alignSelf: 'center', color: '#E3E3E3', marginRight: '80%' }} />
                            </View>
                            <View style={{ marginTop: '5%', alignSelf: 'center' }}>
                                <Text style={{ color: '#DEDEDE', fontFamily: 'Manrope-ExtraLight_SemiBold', fontSize: 10 }}>Checkout</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <Card style={{ width: '100%', flex: 1 }}>
                        <View style={{ margin: '5%' }}>
                            <View>
                                <Text style={{ fontSize: 16, fontFamily: 'Helvetica', fontWeight: 'bold' }}>Recipient Name</Text>
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <TextInput
                                    placeholder="Enter Name"
                                    onChangeText={(text) => this.setState({ RecipName: text })}
                                    style={styles.otpInput}
                                />
                            </View>
                        </View>
                        <View style={{ margin: '5%' }}>
                            <View>
                                <Text style={{ fontSize: 16, fontFamily: 'Helvetica', fontWeight: 'bold', }}>Address</Text>
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <TextInput
                                    placeholder="Shipping Destination"
                                    onChangeText={(text) => this.setState({ RecipAddress: text })}
                                    style={styles.otpInput}
                                />
                            </View>
                        </View>
                        <View style={{ margin: '5%' }}>
                            <View>
                                <Text style={{ fontSize: 16, fontFamily: 'Helvetica', fontWeight: 'bold', }}>Postal Zip</Text>
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <TextInput
                                    placeholder="XXXXX"
                                    onChangeText={(text) => this.setState({ RecipZip: text })}
                                    style={styles.otpInput}
                                />
                            </View>
                        </View>
                        <View style={{ margin: '5%' }}>
                            <View>
                                <Text style={{ fontSize: 16, fontFamily: 'Helvetica', fontWeight: 'bold', }}>Phone Number</Text>
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <TextInput
                                    placeholder="XX-XXXX-XXXX"
                                    onChangeText={(text) => this.setState({ RecipContact: text })}
                                    style={styles.otpInput}
                                />
                            </View>
                        </View>
                        <View style={{ margin: '5%' }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={{ color: '#000000', fontFamily: 'Manrope-ExtraLight_SemiBold', fontSize: 16 }}>Notes</Text>
                                <Text style={{ fontSize: 16 }}>0/1200</Text>
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <TextInput
                                    placeholder="You have note for shipper? put here"
                                    onChangeText={(text) => this.setState({ RecipNotes: text })}

                                    style={styles.Note}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("PackageInformation")}
                            style={styles.button}>
                            <View
                                style={styles.buttonTouch}>
                                <View style={styles.buttonView}>
                                    <Text style={styles.buttonText}>Continue</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Card>
                    <View style={{ height: 20 }}>

                    </View>
                </ScrollView>

            </SafeAreaView>
        )
    }

}