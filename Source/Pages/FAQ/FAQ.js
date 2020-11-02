import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Title, } from 'react-native-paper'
import Icons from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './FAQStyles';

export default class FAQ extends React.Component {

    initialState = {

    }

    constructor(props) {
        super(props)
        this.state = {
            ...this.initialState,
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.titleView}>
                    <View style={[styles.rowObject,{justifyContent:'space-between'}]}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icons name="arrow-back" color="#5b57ba" size={24} />
                        </TouchableOpacity>
                        <Title style={styles.title}>FAQ</Title>
                        <TouchableOpacity style={{ alignContent: 'flex-end', marginLeft: '40%' }} onPress={() => navigation.goBack()}>
                            <MaterialIcons name="edit" color="#5b57ba" size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView styles={{ flex: 1 }}>

                    <View style={{ marginTop: '5%', marginLeft: '5%' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Manrope-ExtraLight_Bold' }}>Top Questions</Text>
                    </View>
                    <View style={{ margin: '5%' }}>

                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <View style={{ width: '10%', marginTop: '2%' }}>
                                <View
                                    style={{
                                        width: 25,
                                        height: 25,
                                        alignSelf: 'center',
                                        backgroundColor: '#5B57BA'

                                    }} />
                            </View>
                            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginTop: '2%', marginLeft: '3%' }}>
                                    <Text style={{ fontFamily: 'Manrope-ExtraLight_Regular', fontSize: 16 }}>How do i deliver my package?</Text>
                                </View>
                                <View style={{ alignSelf: 'center' }}>
                                    <FontAwesome
                                        name="angle-right"
                                        style={{ fontSize: 25 }}
                                    />
                                </View>
                            </View>


                        </View>
                        <View style={{ width: '80%', alignSelf: 'center', borderWidth: 1, marginTop: '5%', borderColor: '#00000014' }} />
                    </View>

                    <View style={{ margin: '5%' }}>

                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <View style={{ width: '10%', marginTop: '2%' }}>
                                <View
                                    style={{
                                        width: 25,
                                        height: 25,
                                        alignSelf: 'center',
                                        backgroundColor: '#5B57BA'

                                    }} />
                            </View>
                            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginTop: '2%', marginLeft: '3%' }}>
                                    <Text style={{ fontFamily: 'Manrope-ExtraLight_Regular', fontSize: 16 }}>How many days refund ticket?</Text>
                                </View>
                                <View style={{ alignSelf: 'center' }}>
                                    <FontAwesome
                                        name="angle-down"
                                        style={{ fontSize: 25 }}
                                    />
                                </View>
                            </View>


                        </View>
                        <View style={{ width: '80%', alignSelf: 'center', borderWidth: 1, marginTop: '5%', borderColor: '#00000014' }} />
                    </View>
                    <View style={{width:'96%',backgroundColor:'#E2E2E2',alignSelf:'center'}}>
                        <Text>We’ve now extended the validity of your existing ticket for up to 30 days so you can just call us to reschedule your delivery time whenever you’re ready to use our app again.</Text>
                    </View>

                    <View style={{ margin: '5%' }}>

                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <View style={{ width: '10%', marginTop: '2%' }}>
                                <View
                                    style={{
                                        width: 25,
                                        height: 25,
                                        alignSelf: 'center',
                                        backgroundColor: '#5B57BA'

                                    }} />
                            </View>
                            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginTop: '2%', marginLeft: '3%' }}>
                                    <Text style={{ fontFamily: 'Manrope-ExtraLight_Regular', fontSize: 16 }}>How do i enter promo code?</Text>
                                </View>
                                <View style={{ alignSelf: 'center' }}>
                                    <FontAwesome
                                        name="angle-right"
                                        style={{ fontSize: 25 }}
                                    />
                                </View>
                            </View>


                        </View>
                        <View style={{ width: '80%', alignSelf: 'center', borderWidth: 1, marginTop: '5%', borderColor: '#00000014' }} />
                    </View>
                    <View style={{ margin: '5%' }}>
                        <Text>Popular Topics</Text>
                    </View>

                    <View style={{ margin: '5%' }}>

                        <View style={{ flexDirection: 'row', width: '100%' }}>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginTop: '2%', marginLeft: '3%' }}>
                                    <Text style={{ fontFamily: 'Manrope-ExtraLight_Regular', fontSize: 16 }}>How to cancel order?</Text>
                                </View>
                                <View style={{ alignSelf: 'center' }}>
                                    <FontAwesome
                                        name="angle-right"
                                        style={{ fontSize: 25 }}
                                    />
                                </View>
                            </View>


                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', borderWidth: 1, marginTop: '5%', borderColor: '#00000014' }} />
                    </View>

                    <View style={{ margin: '5%' }}>

                        <View style={{ flexDirection: 'row', width: '100%' }}>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginTop: '2%', marginLeft: '3%' }}>
                                    <Text style={{ fontFamily: 'Manrope-ExtraLight_Regular', fontSize: 16 }}>Give Review or Tips to Courier</Text>
                                </View>
                                <View style={{ alignSelf: 'center' }}>
                                    <FontAwesome
                                        name="angle-right"
                                        style={{ fontSize: 25 }}
                                    />
                                </View>
                            </View>


                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', borderWidth: 1, marginTop: '5%', borderColor: '#00000014' }} />
                    </View>

                    <View style={{ margin: '5%' }}>

                        <View style={{ flexDirection: 'row', width: '100%' }}>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginTop: '2%', marginLeft: '3%' }}>
                                    <Text style={{ fontFamily: 'Manrope-ExtraLight_Regular', fontSize: 16 }}>Top Up E-Wallet</Text>
                                </View>
                                <View style={{ alignSelf: 'center' }}>
                                    <FontAwesome
                                        name="angle-right"
                                        style={{ fontSize: 25 }}
                                    />
                                </View>
                            </View>


                        </View>
                        {/* <View style={{ width: '90%', alignSelf: 'center', borderWidth: 1, marginTop: '5%', borderColor: '#00000014' }} /> */}
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

}