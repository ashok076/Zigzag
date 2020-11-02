import React from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './CompleteStyles';


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
            <SafeAreaView style={{ flex: 1, backgroundColor: '#746FCA' }}>
                    <View style={{ alignSelf: 'center', margin: '20%', alignSelf: 'center', marginLeft: '35%',flex:1 }}>
                        <Image
                            source={require('../../Images/Login/Box.png')}
                            style={{ height: 175, width: 225 }}
                        />
                    </View>
                    <View style={{ marginTop: '5%', marginLeft: '5%', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 30, fontFamily: 'Manrope-Bold', color: '#ffffff' }}>Order Delivered</Text>
                    </View>
                    <View style={{ marginTop: '5%', marginLeft: '5%', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Manrope-Regular', color: '#ffffff' }}>10$ will be added to your account</Text>
                    </View>

                <View style={{ alignSelf: 'flex-end', justifyContent: 'flex-end', marginTop: '50%' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Homepage")}
                        style={styles.button}>
                        <View
                            style={styles.buttonTouch}>
                            <View style={styles.buttonView}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}