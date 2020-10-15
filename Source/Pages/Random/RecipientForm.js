import React from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Card, } from 'react-native-paper'
import { Title } from 'react-native-paper'
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
                        <View>
                            <View style={{ alignSelf: 'center', }}>
                                <Icons name="radio-button-checked" style={{ fontSize: 25, alignSelf: 'center', color: 'white' }} />

                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <Text style={{ color: '#ffffff' }}>Recipient Form</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <Icons name="radio-button-checked" style={{ fontSize: 25, alignSelf: 'center', color: 'white' }} />
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <Text style={{ color: '#ffffff' }}>Package information</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <Icons name="radio-button-checked" style={{ fontSize: 25, alignSelf: 'center', color: 'white' }} />
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <Text style={{ color: '#ffffff' }}>Checkout</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <Card style={{ width: '100%', flex: 1 }}>
                        <View style={{ margin: '5%' }}>
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Recipient Name</Text>
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
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Address</Text>
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
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Postal Zip</Text>
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
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Phone Number</Text>
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
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Notes</Text>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>0/1200</Text>
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <TextInput
                                    placeholder="You have note for shipper? put here"
                                    onChangeText={(text) => this.setState({ RecipNotes: text })}
                                    style={styles.otpInput}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.setState({ visible: false })}
                            style={styles.button}>
                            <View
                                style={styles.buttonTouch}>
                                <View style={styles.buttonView}>
                                    <Text style={styles.buttonText}>Continue</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </ScrollView>
            </SafeAreaView>
        )
    }

}