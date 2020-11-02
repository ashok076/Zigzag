import React from 'react';
import { View, SafeAreaView, StatusBar, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import { Title, Card } from 'react-native-paper'
import Icons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modalbox'

import styles from './SettingStyles';

export default class Chat extends React.Component {

    initialState = {
        visible: false,
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
        const { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#00000014' }}>
                <StatusBar backgroundColor="#5B57BA" />
                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icons name="arrow-back" color="#5b57ba" size={24} />
                        </TouchableOpacity>
                        <Title style={styles.title}>Account Settings</Title>
                    </View>
                </View>
                <View style={{ flex: 1, width: '100%' }}>
                    <TouchableOpacity style={styles.flatList} onPress={() => navigation.navigate("ChangePassword")} >
                        <View style={styles.middleView}>
                            <Text style={{ fontFamily: 'Helvetica', fontSize: 16, color: '#000000', fontWeight: 'bold' }}>Change Password</Text>
                        </View>
                        <View style={styles.dtView}>
                            <FontAwesome
                                name="angle-right"
                                style={{ fontSize: 25 }}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: '90%', alignSelf: 'center', borderWidth: 1, marginTop: '5%', borderColor: '#00000014' }} />

                    <TouchableOpacity style={styles.flatList}>
                        <View style={styles.middleView}>
                            <Text style={{ fontFamily: 'Helvetica', fontSize: 16, color: '#000000', fontWeight: 'bold' }}>Language</Text>
                        </View>
                        <View style={styles.dtView}>
                            <FontAwesome
                                name="angle-right"
                                style={{ fontSize: 25 }}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: '90%', alignSelf: 'center', borderWidth: 1, marginTop: '5%', borderColor: '#00000014' }} />

                    <TouchableOpacity style={styles.flatList} onPress={() => navigation.navigate("Payment")}>
                        <View style={styles.middleView}>
                            <Text style={{ fontFamily: 'Helvetica', fontSize: 16, color: '#000000', fontWeight: 'bold' }}>Payment Info</Text>
                        </View>
                        <View style={styles.dtView}>
                            <FontAwesome
                                name="angle-right"
                                style={{ fontSize: 25 }}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: '90%', alignSelf: 'center', borderWidth: 1, marginTop: '5%', borderColor: '#00000014' }} />

                    <Modal isOpen={this.state.visible} style={styles.modal} position={"center"}
                        ref={"modal"} backdropPressToClose={false}>
                        <Card style={{ borderRadius: 30, backgroundColor: '#ffffff' }}>
                            <View style={{ borderBottomWidth: 1, borderColor: '#DEDEDE' }}>
                                <View style={{ flexDirection: 'row', margin: '3%' }}>
                                    <TouchableOpacity onPress={() => this.setState({ visible: false })} style={{ alignSelf: 'center', marginTop: '2%', marginLeft: '5%' }}>
                                        <MaterialCommunityIcons
                                            name="close"
                                        />
                                    </TouchableOpacity>
                                    <View style={{ alignSelf: 'center', marginTop: '2%', marginLeft: '35%' }}>
                                        <Text style={{ fontSize: 18, alignSelf: 'center', fontFamily: 'Helvetica' }}>Change Password</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: '90%', marginTop: '5%', alignSelf: 'center', }}>
                                <TouchableOpacity onPress={() => this.setState({ visible: true })} style={{ borderColor: '#000000', width: '100%', alignSelf: 'center' }}>

                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: '5%', justifyContent: 'space-between', flexDirection: 'row', margin: '3%' }}>
                                <View>
                                    <Text>Available until</Text>
                                </View>
                                <View>
                                    <Text>10 October 2020</Text>
                                </View>
                            </View>
                            <View style={{ margin: '3%' }}>
                                <Text style={{ fontFamily: 'Manrope-ExtraLight_Regular', fontSize: 14 }}>Perhaps it’s safe to say that most people want to be happy. They want to enjoy being here in this big, crazy, confusing world. But too many people struggle with being truly happy. They can’t seem to find happiness in life. To them, it is something that doesn’t just come naturally. Fortunately, there are plenty of strategies people can use to create happiness, or at least strive for it.</Text>
                            </View>
                            <View style={{ alignSelf: 'flex-end' }}>
                                <TouchableOpacity
                                    onPress={() => this.setState({ visible: false })}
                                    style={styles.button}>
                                    <View
                                        style={styles.buttonTouch}>
                                        <View style={styles.buttonView}>
                                            <Text style={styles.buttonText}>Claim Promo Voucher</Text>
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
