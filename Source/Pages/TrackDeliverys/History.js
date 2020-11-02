import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity ,Image } from 'react-native'
import { Title, Card, ProgressBar, Colors } from 'react-native-paper'
import Icons from 'react-native-vector-icons/MaterialIcons';

import styles from './HistoryStyles';

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
        const {navigation} =this.props;
        
        return (
            <SafeAreaView style={styles.container}>
                    <View style={styles.titleView}>
                        <View style={styles.rowObject}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icons name="arrow-back" color="#5b57ba" size={24} />
                            </TouchableOpacity>
                            <Title style={styles.title}>History</Title>
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
                                    <ProgressBar progress={0.5} color={"#837ED9"}  />
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

                        <View style={styles.innerView}>
                            <Card style={styles.cardView}>
                                <View>
                                    <Text style={{ color: '#ffffff' }}>ZigZag delivered your package</Text>
                                </View>
                                <View style={{ padding: '5%' }}>
                                    <ProgressBar progress={1} color={"#837ED9"}  />
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

                        <View style={styles.innerView}>
                            <Card style={styles.cardView}>
                                <View>
                                    <Text style={{ color: '#ffffff' }}>Your delivery was canceled</Text>
                                </View>
                                <View style={{ padding: '5%' }}>
                                    <ProgressBar progress={0.5} color={"red"}  />
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
                       
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

}