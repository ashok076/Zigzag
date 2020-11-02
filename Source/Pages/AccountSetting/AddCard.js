import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Title } from 'react-native-paper'
import Icons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from 'native-base'

import InputTextDynamic from '../../Pages/Component/TextInput/input-text-dynamic.component'
import styles from './AddCardStyles'



export default class EditProfile extends React.Component {

    initialState = {
        cardNumber: '',
        exp: '',
        cvv: '',
        Country: '',
    }
    constructor(props) {
        super(props);
        this.state = {
            ...this.initialState
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.containerView}>
                <StatusBar backgroundColor="#5B57BA" />
                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icons name="arrow-back" color="#ffffff" size={24} />
                        </TouchableOpacity>
                        {/* <View style={styles.titleHeader}> */}
                        <Title style={styles.title}>Add Card</Title>
                        {/* </View> */}
                    </View>
                    <TouchableOpacity style={styles.Logout} onPress={() => navigation.navigate("Homepage")}>
                        <Text style={styles.Righttitle}>Save</Text>
                    </TouchableOpacity>

                </View>
                <ScrollView style={styles.scrollView}>

                    <View style={{ marginLeft: '3%', marginTop: '5%' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Helvetica' }}>Card Number</Text>
                    </View>
                    <View style={[styles.CreateinputRoot, { borderColor: '#5B57BA' }]}>
                        <View style={styles.CreateinputContainer}>
                            <Image
                                source={require('../../Images/Account/MC.png')}
                                style={{ alignSelf: 'center', marginLeft: '3%' }}
                            />
                            <TextInput
                                value={this.state.name}
                                placeholder="0000 - 0000 - 0000"
                                onChangeText={(text) => this.setState({ pass: text })}
                                style={styles.CreateotpInput}
                            />
                            {/* <Feather
                                name="check"
                                style={{ alignSelf: 'center', fontSize: 25, color: "green", marginRight: '5%', marginTop: '2%' }}
                            /> */}
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <View style={{ marginLeft: '3%', marginTop: '5%' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'Helvetica' }}>Exp Date</Text>
                            </View>
                            <View style={[styles.CreateinputRoot, { borderColor: '#5B57BA' }]}>
                                <View style={styles.CreateinputContainer}>
                                    <TextInput
                                        value={this.state.number}
                                        placeholder="MM/YY"
                                        onChangeText={(text) => this.setState({ number: text })}
                                        style={styles.CreateotpInput}
                                    />

                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ marginLeft: '3%', marginTop: '5%' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'Helvetica' }}>CVV</Text>
                            </View>
                            <View style={[styles.CreateinputRoot, { borderColor: '#5B57BA' }]}>
                                <View style={styles.CreateinputContainer}>
                                    <TextInput
                                        value={this.state.number}
                                        placeholder="000"
                                        onChangeText={(text) => this.setState({ number: text })}
                                        style={styles.CreateotpInput}
                                    />

                                    {/* <Feather
                                        name="check"
                                        style={{ alignSelf: 'center', fontSize: 25, color: "green", marginRight: '5%', marginTop: '2%' }}
                                    /> */}
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginLeft: '3%', marginTop: '5%' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Helvetica' }}>Country</Text>
                    </View>
                    <View style={[styles.CreateinputRoot, { borderColor: '#5B57BA' }]}>
                        <View style={styles.CreateinputContainer}>
                            <Image 
                                source={require('../../Images/Account/australia.png')}
                                style={{ alignSelf: 'center', marginLeft: '3%' }}
                            />

                            <Picker
                                mode="dropdown"
                                iosIcon={<AntDesign name="caretdown" />}
                                style={styles.pickerStyle}
                                textStyle={{ fontSize: 15 }}
                                placeholder="Please select an option..."
                                placeholderStyle={{ textAlign: 'left' }}
                                // selectedValue={this.state.U_Type}
                                // onValueChange={this.onValueChange2.bind(this)}
                                >
                                {/* <Picker.Item label="Select User Type" value={0} /> */}
                                <Picker.Item label="Australia" value={1} />
                                <Picker.Item label="USA" value={2} />
                                <Picker.Item label="UK" value={3} />
                                <Picker.Item label="China" value={4} />
                                <Picker.Item label="Japan" value={5} />
                                <Picker.Item label="India" value={6} />
                            </Picker>

                    </View>
                    </View>

                </ScrollView>

            </SafeAreaView >


        )
    }
}