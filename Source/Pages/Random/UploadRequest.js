import React from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import styles from './RequestStyles';



export default class UploadRequest extends React.Component {

    initialState = {

    }
    constructor(props) {
        super(props);
        this.state = {
            ...this.initialState,
        }
    }

    componentDidMount() {

    }

    render() {
        const { navigation } = this.props;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <ScrollView>
                    <View style={{ alignSelf: 'center', marginTop: '20%' }}>
                        <Image
                            source={require('../../Images/Login/SplashScreen.png')}
                            style={{ height: 250, width: 250 }}
                        />
                    </View>
                    <View style={{ marginTop: '10%', marginLeft: '5%' }}>
                        <Text style={{ fontSize: 33, fontFamily: 'Manrope-Bold' }}>Upload requested</Text>
                        <Text style={{ fontSize: 33, fontFamily: 'Manrope-Bold' }}>docments</Text>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={{ marginTop: '5%',alignSelf: 'center', flexDirection: 'row', borderWidth: 1, padding: '2%', borderColor: '#DEDEDE', borderRadius: 7, width: '30%' }}>
                            <Feather name="image" style={{ alignSelf: 'center', color: '#5B57BA' }} />
                            <Text style={{ fontSize: 16, fontFamily: 'Manrope-Regular', marginLeft: '2%' }}>Get Started</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'flex-end', justifyContent: 'flex-end', marginTop: '25%' }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}
                            style={styles.button}>
                            <View
                                style={styles.buttonTouch}>
                                <View style={styles.buttonView}>
                                    <Text style={styles.buttonText}>Continue</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}