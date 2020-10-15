import React from 'react';
import { View, SafeAreaView, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Title, Card } from 'react-native-paper'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Modal from 'react-native-modalbox'
import styles from './HomeStyles';

export default class Homepage extends React.Component {

    initialState = {
        visible: true,

    }

    constructor(props) {
        super(props);
        this.state = {
            ...this.initialState
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#5B57BA' }}>
                <StatusBar backgroundColor="#5B57BA" />

                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <Title style={styles.title}>Zigzag</Title>
                    </View>
                </View>

                <View style={{ flex: 1, backgroundColor: '#fafafa', borderRadius: 30, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
                    <ScrollView style={{ backgroundColor: '#fafafa', borderRadius: 30 }}>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly' }}>
                            <Card style={{ backgroundColor: '#5B57BA', marginTop: '10%', width: '60%', alignSelf: 'center', borderRadius: 10 }}>
                                <View style={{ flexDirection: 'row', alignSelf: 'center', margin: '5%' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ color: '#ffffff', marginTop: '5%' }}>
                                            <Text style={{ color: '#DEDEDE', }}>My Balance</Text>
                                        </View>
                                        <View style={{ color: '#ffffff', padding: '5%' }}>
                                            <Text style={{ color: '#ffffff', }}>$ 5.123.00</Text>
                                        </View>

                                    </View>
                                    <View style={{ alignSelf: 'center', padding: '5%', marginLeft: '20%' }}>
                                        <Text style={{ color: '#ffffff', }}>View Info</Text>
                                    </View>
                                </View>

                            </Card>
                            <Card style={{ backgroundColor: '#5B57BA', marginTop: '10%', width: '30%', alignSelf: 'center', marginLeft: '3%', borderRadius: 10 }}>
                                <View style={{ alignSelf: "center", marginTop: '5%' }}>
                                    <View style={{ alignSelf: "center", marginTop: '5%' }}>
                                        <SimpleLineIcons
                                            name="plus"
                                            style={{ color: '#ffffff', fontSize: 25, }}
                                        />
                                    </View>
                                    <View style={{ alignSelf: "center", marginTop: '3%' }}>
                                        <Text style={{ color: '#ffffff' }}>Top Up</Text>
                                    </View>
                                </View>
                            </Card>
                        </View>
                        <View style={{ marginTop: '5%', marginLeft: '5%' }}>
                            <Text style={{ fontSize: 14 }}>What are you looking for today ?</Text>
                        </View>
                        <View style={{ marginTop: '5%', flexDirection: 'row', margin: '10%', justifyContent: 'space-between' }}>
                            <View style={{ alignSelf: 'center', flexDirection: 'column' }}>
                                <Card style={{ backgroundColor: '#9fecf1' }}>
                                    <Text>Helloworld</Text>
                                    <Text>Helloworld</Text>
                                    <Text>Helloworld</Text>
                                    <Text>Helloworld</Text>
                                </Card>
                                <View>
                                    <Text>Send Package</Text>
                                </View>
                            </View>
                            <View style={{ alignSelf: 'center', flexDirection: 'column' }}>
                                <Card style={{ backgroundColor: '#9fecf1' }}>
                                    <Text>Helloworld</Text>
                                    <Text>Helloworld</Text>
                                    <Text>Helloworld</Text>
                                    <Text>Helloworld</Text>
                                </Card>
                                <View>
                                    <Text>Track Orders</Text>
                                </View>
                            </View>
                            <View style={{ alignSelf: 'center', flexDirection: 'column' }}>
                                <Card style={{ backgroundColor: '#9fecf1' }}>
                                    <Text>Helloworld</Text>
                                    <Text>Helloworld</Text>
                                    <Text>Helloworld</Text>
                                    <Text>Helloworld</Text>
                                </Card>
                                <View style={{ alignSelf: 'center' }}>
                                    <Text>Deliver</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Card style={{ backgroundColor: '#FBD351', width: '90%', borderRadius: 10, alignSelf: 'center', borderColor: '#000000' }}>
                                <View style={{ padding: '10%' }}>
                                    <Text style={{ fontSize: 15 }}>
                                        Become a pilot now
                                </Text>
                                    <Text style={{ fontSize: 12, marginTop: '2%', color: '#000014' }}>
                                        Earn money on the go
                                </Text>
                                </View>

                            </Card>
                        </View>
                        <View style={{ marginTop: '5%', marginLeft: '5%', marginRight: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text>Feed</Text>
                            </View>
                            <View>
                                <Text>View All</Text>
                            </View>
                        </View>
                        <View style={{ margin: '5%' }}>
                            <Card style={{ backgroundColor: '#fafafa', width: '100%', borderRadius: 10, alignSelf: 'center', borderColor: 'grey' }}>
                                <View style={{ padding: '10%', width: '50%' }}>
                                    <Text style={{ fontSize: 15 }}>
                                        Send Package around 15% discount
                                </Text>
                                </View>
                            </Card>
                        </View>
                    </ScrollView>
                    <Modal isOpen={this.state.visible} style={styles.modal} position={"center"}
                        ref={"modal"} backdropPressToClose={false}>
                        <Card style={{ borderRadius: 30, backgroundColor: '#ffffff' }}>
                            <View style={{ borderBottomWidth: 1, borderColor: '#DEDEDE' }}>
                                <View style={{ alignSelf: 'center' }}>
                                    <View style={{ alignSelf: 'center', marginTop: '2%' }}>
                                        <Text>Your Balance</Text>
                                    </View>
                                    <View style={{ alignSelf: 'center', marginTop: '2%' }}>
                                        <Text>Balance for Boxipay</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ margin: '3%' }}>
                                <Text>You can monitoring, top up, check payment history in herer anytime anywhere, is very easy to use. Happy order :)</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.setState({ visible: false })}
                                    style={styles.button}>
                                    <View
                                        style={styles.buttonTouch}>
                                        <View style={styles.buttonView}>
                                            <Text style={styles.buttonText}>Okay</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Card>
                    </Modal>
                </View>
            </SafeAreaView>
        )
    }
}