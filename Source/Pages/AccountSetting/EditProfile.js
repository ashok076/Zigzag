import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, TextInput ,ScrollView} from 'react-native';
import { Title } from 'react-native-paper'
import Icons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

import InputTextDynamic from '../../Pages/Component/TextInput/input-text-dynamic.component'
import styles from './EditProfileStyle'



export default class EditProfile extends React.Component {

    initialState = {
        name: 'Kitani Sarasvati',
        ext: '+1 391',
        number: '',
        email: "kitani.sarasvati@mai.com"
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
                        <Title style={styles.title}>EditProfile</Title>
                        {/* </View> */}
                    </View>
                    <TouchableOpacity style={styles.Logout} onPress={() => navigation.navigate("Homepage")}>
                        <Text style={styles.Righttitle}>Save</Text>
                    </TouchableOpacity>

                </View>
                <ScrollView style={styles.scrollView}>
                    <TouchableOpacity style={styles.bodyInnerView}>
                        <Image
                            source={require('../../Images/Profile/Photo.png')}
                        />
                    </TouchableOpacity>
                    <View style={{ marginLeft: '3%' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Helvetica' }}>Account Name</Text>
                    </View>
                    <View style={[styles.CreateinputRoot, { borderColor: '#5B57BA' }]}>
                        <View style={styles.CreateinputContainer}>
                            <TextInput
                                value={this.state.name}
                                onChangeText={(text) => this.setState({ pass: text })}
                                style={styles.CreateotpInput}
                            />
                            <Feather
                                name="check"
                                style={{ alignSelf: 'center', fontSize: 25, color: "green", marginRight: '5%', marginTop: '2%' }}
                            />
                        </View>
                    </View>
                    <View style={{ marginLeft: '3%', marginTop: '5%' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Helvetica' }}>Phone Number</Text>
                    </View>
                    <View style={[styles.CreateinputRoot, { borderColor: '#5B57BA' }]}>
                        <View style={styles.CreateinputContainer}>
                            <TextInput
                                value={this.state.ext + " " + this.state.number}
                                onChangeText={(text) => this.setState({ number: text })}
                                style={styles.CreateotpInput}
                            />

                            <Feather
                                name="check"
                                style={{ alignSelf: 'center', fontSize: 25, color: "green", marginRight: '5%', marginTop: '2%' }}
                            />
                        </View>
                    </View>
                    <View style={{ marginLeft: '3%', marginTop: '5%' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Helvetica' }}>Email</Text>
                    </View>
                    <View style={[styles.CreateinputRoot, { borderColor: '#5B57BA' }]}>
                        <View style={styles.CreateinputContainer}>
                            <TextInput
                                value={this.state.email}
                                onChangeText={(text) => this.setState({ email: text })}
                                style={styles.CreateotpInput}
                            />
                            <Feather
                                name="check"
                                style={{ alignSelf: 'center', fontSize: 25, color: "green", marginRight: '5%', marginTop: '2%' }}
                            />
                        </View>
                    </View>

                </ScrollView>

            </SafeAreaView>


        )
    }
}