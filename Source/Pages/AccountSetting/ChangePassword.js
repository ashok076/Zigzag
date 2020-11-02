import React from 'react';
import { View, SafeAreaView, StatusBar, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import { Title } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import styles from './ChangePasswordStyles';

export default class ChangePassword extends React.Component {

    initialState = {
        cpass: '',
        pass: '',
        newpass: ''
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
                            <MaterialCommunityIcons
                                name="close" color="#5b57ba" size={24}
                            />
                        </TouchableOpacity>
                        <Title style={styles.title}>Security</Title>
                    </View>
                </View>
                <View style={{ flex: 1, width: '100%', }}>
                    <View style={{ marginLeft: '3%', margin: "5%" }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Helvetica', fontWeight: 'bold' }}>Current Password</Text>
                    </View>
                    <View style={[styles.CreateinputRoot, { borderColor: '#b3b2ba' }]}>
                        <View style={styles.CreateinputContainer}>
                            <Text style={{ alignSelf: 'center', marginLeft: '3%', marginTop: '2%', fontSize: 20 }}>●●●●●●●● </Text>
                            <Fontisto
                                name="eye"
                                style={{ alignSelf: 'center', fontSize: 15, color: "#b3b2ba", marginRight: '5%', marginTop: '2%' }}
                            />
                        </View>
                    </View>
                    <View style={{ marginLeft: '3%', margin: "5%" }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Helvetica', fontWeight: 'bold' }}>New Password</Text>
                    </View>
                    <View style={[styles.CreateinputRoot, { borderColor: '#5B57BA' }]}>
                        <View style={styles.CreateinputContainer}>
                            <TextInput
                                value={this.state.pass}
                                onChangeText={(text) => this.setState({ pass:text })}
                                style={styles.CreateotpInput}
                            />
                            <Feather
                                name="check"
                                style={{ alignSelf: 'center', fontSize: 25, color: "green", marginRight: '5%', marginTop: '2%' }}
                            />
                        </View>
                    </View>
                    <View style={{ marginLeft: '3%', margin: "5%" }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Helvetica', fontWeight: 'bold' }}>Confirm Password</Text>
                    </View>
                    <View style={[styles.CreateinputRoot, { borderColor: '#b3b2ba' }]}>
                        <View style={styles.CreateinputContainer}>
                            <TextInput
                                value={this.state.newpass}
                                onChangeText={(text) => this.setState({ newpass: text })}
                                style={styles.CreateotpInput}
                            />
                            <Feather
                                name="check"
                                style={{ alignSelf: 'center', fontSize: 25, color: "#b3b2ba", marginRight: '5%', marginTop: '2%' }}
                            />
                        </View>
                    </View>
                </View>



            </SafeAreaView>
        )
    }
}
