import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { Title, Card, ProgressBar, Colors } from 'react-native-paper'
import Icons from 'react-native-vector-icons/MaterialIcons';

import styles from './TrackDeliverysStyles';

export default class TrackDeliverys extends React.Component {

    initialState = {

    }

    constructor(props) {
        super(props)
        this.state = {
            ...this.initialState,
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                    <View style={styles.titleView}>
                        <View style={styles.rowObject}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icons name="arrow-back" color="#5b57ba" size={24} />
                            </TouchableOpacity>
                            <Title style={styles.title}>Track Deliverys</Title>
                        </View>
                    </View>
                    <ScrollView>
                    <View style={styles.bodyContainer}>
                        <View style={styles.innerView}>
                            <Card style={styles.cardView}>
                                <View>
                                    <Text style={{ color: '#ffffff' }}>ZigZag is delivering your package</Text>
                                </View>
                                <View style={{ padding: '5%' }}>
                                    <ProgressBar progress={0.5} color={"#837ED9"} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View >
                                        <Text style={{ color: '#ffffff' }}>Express</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: '#ffffff' }}>ETA 22 JAN 2020, 02:12 PM</Text>
                                    </View>
                                </View>
                            </Card>
                        </View>
                        <View style={{ margin: '5%',marginTop:'10%' }}>
                            <Card>
                                <View style={{ flexDirection: 'row',width:'100%' }}>
                                    <View style={{alignSelf:'center',marginTop:'5%',width:'20%'}}>
                                        <Icons name="radio-button-checked" style={{ fontSize: 25, alignSelf: 'center', color: '#393690' }} />
                                    </View>
                                    <View style={{ alignSelf: 'center',width:'80%'}}>
                                        <View style={{marginTop:'5%'}}>
                                            <Text style={{ color: "#393690" }}>Order Collected</Text>
                                        </View>
                                        <View style={{marginTop:'5%'}}>
                                            <Text>08/09 - 12:08 AM by Kitani Sarasvati</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row',width:'100%',marginTop:'5%',marginBottom:'10%' }}>
                                    <View style={{alignSelf:'center',marginTop:'5%',width:'20%'}}>
                                        <Icons name="radio-button-checked" style={{ fontSize: 25, alignSelf: 'center', color: '#00000014' }} />
                                    </View>
                                    <View style={{ alignSelf: 'center',width:'80%'}}>
                                        <View style={{marginTop:'5%'}}>
                                            <Text>Package deliver</Text>
                                        </View>
                                        <View style={{marginTop:'5%'}}>
                                            <Text>08/09 - 06:08AM</Text>
                                        </View>
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </View>
                    <View style={styles.bodyContainer}>
                        <View style={styles.innerView}>
                            <Card style={styles.cardViewCompleted}>
                                <View>
                                    <Text style={{ color: '#ffffff' }}>The package is on the way to you</Text>
                                </View>
                                <View style={{ padding: '5%' }}>
                                    <ProgressBar progress={0.5} color={"#7DE0C8"} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View >
                                        <Text style={{ color: '#ffffff' }}>Express</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: '#ffffff' }}>ETA 22 JAN 2020, 02:12 PM</Text>
                                    </View>
                                </View>
                            </Card>
                        </View>
                        <View style={{ margin: '5%',marginTop:'10%' }}>
                            <Card>
                                <View style={{ flexDirection: 'row',width:'100%' }}>
                                    <View style={{alignSelf:'center',marginTop:'5%',width:'20%'}}>
                                        <Icons name="radio-button-checked" style={{ fontSize: 25, alignSelf: 'center', color: '#7DE0C8' }} />
                                    </View>
                                    <View style={{ alignSelf: 'center',width:'80%'}}>
                                        <View style={{marginTop:'5%'}}>
                                            <Text style={{ color: "#7DE0C8" }}>Order Collected</Text>
                                        </View>
                                        <View style={{marginTop:'5%'}}>
                                            <Text>08/09 - 12:08 AM by Kitani Sarasvati</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row',width:'100%',marginTop:'5%',marginBottom:'10%' }}>
                                    <View style={{alignSelf:'center',marginTop:'5%',width:'20%'}}>
                                        <Icons name="radio-button-checked" style={{ fontSize: 25, alignSelf: 'center', color: '#7DE0C8' }} />
                                    </View>
                                    <View style={{ alignSelf: 'center',width:'80%'}}>
                                        <View style={{marginTop:'5%'}}>
                                            <Text style={{ color: "#7DE0C8" }}>Package deliver</Text>
                                        </View>
                                        <View style={{marginTop:'5%'}}>
                                            <Text >08/09 - 06:08AM</Text>
                                        </View>
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

}