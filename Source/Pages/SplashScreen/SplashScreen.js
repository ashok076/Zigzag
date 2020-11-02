import React from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity ,ScrollView } from 'react-native';

import styles from './SplashScreenStyles';



export default class SplashScreen extends React.Component {

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
                        <Text style={{ fontSize: 33, fontFamily: 'Manrope-Bold' }}>Shipping Anytime</Text>
                        <Text style={{ fontSize: 33, fontFamily: 'Manrope-Bold' }}>and Everywhere</Text>
                    </View>
                    <View style={{ marginTop: '10%', marginLeft: '5%' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Manrope-Regular', }}>Deliver your package around the </Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Manrope-Regular' }}>world without hesitation</Text>
                    </View>
                    <View style={{ alignSelf: 'flex-end', justifyContent: 'flex-end',marginTop:'20%' }}>
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