import React from 'react';
import { View, SafeAreaView, Text, ScrollView, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Title, Card } from 'react-native-paper'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Modal from 'react-native-modalbox'
import styles from './HomeStyles';


export default class HomePagePoilt extends React.Component {

    initialState = {
        visible: false,

    }

    constructor(props) {
        super(props);
        this.state = {
            ...this.initialState
        }
    }

    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#5B57BA' }}>
                <StatusBar backgroundColor="#5B57BA" />

                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <Title style={styles.title}>Zigzag</Title>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
                        <Feather
                            name="bell"
                            style={{ fontSize: 16, color: '#ffffff' }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, backgroundColor: '#fafafa', borderRadius: 30, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
                    <ScrollView style={{ backgroundColor: '#fafafa', borderRadius: 30, marginTop: '2%' }}>
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
                                    <TouchableOpacity onPress={() => navigation.navigate("Boxipay")} style={{ alignSelf: 'center', padding: '5%', marginLeft: '20%' }}>
                                        <Text style={{ color: '#ffffff', }}>View Info</Text>
                                    </TouchableOpacity>
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
                        <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate("RecipientForm")} style={{ alignSelf: 'center', flexDirection: 'column' }}>
                                <Card style={{ backgroundColor: '#9fecf1', borderRadius: 30 }}>
                                    <Image
                                        source={require('../../Images/Home/Package.png')}

                                    />
                                </Card>
                                <View style={{ alignSelf: 'center', marginTop: '5%' }}>
                                    <Text>Send Package</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("TrackDeliverys")} style={{ alignSelf: 'center', flexDirection: 'column' }}>
                                <Card style={{ backgroundColor: '#9fecf1', borderRadius: 30 }}>
                                    <Image
                                        source={require('../../Images/Home/Search.png')}
                                    />
                                </Card>
                                <View style={{ alignSelf: 'center', marginTop: '5%' }}>
                                    <Text>Track Orders</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Complete")} style={{ alignSelf: 'center', flexDirection: 'column' }}>
                                <Card style={{ backgroundColor: '#9fecf1', borderRadius: 30 }}>
                                    <Image
                                        source={require('../../Images/Home/Tack.png')}
                                    />
                                </Card>
                                <View style={{ alignSelf: 'center', marginTop: '5%' }}>
                                    <Text>Deliver</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* <View style={{ width: '100%', marginTop: '5%', alignSelf: 'center', margin: '5%', }}>
                            <TouchableOpacity onPress={() => this.setState({ visible: true })} style={{ borderColor: '#000000', width: '98%', alignSelf: 'center' }}>
                                <Image
                                    source={require('../../Images/Home/Banner3_3.png')}
                                    style={{ alignSelf: 'center', borderRadius: 10, height: 130, width: 350 }}
                                />
                            </TouchableOpacity>
                        </View> */}

                        <View style={{ marginLeft: '5%', marginRight: '5%', flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%' }}>
                            <View>
                                <Text>Feed</Text>
                            </View>
                            <View>
                                <Text>View All</Text>
                            </View>
                        </View>
                        <View style={{ width: '90%', marginTop: '5%', alignSelf: 'center', }}>
                            <TouchableOpacity onPress={() => this.setState({ visible: true })} style={{ borderColor: '#000000', width: '98%', alignSelf: 'center' }}>
                                <Image
                                    // source={require('../../Images/Home/BannerDiscount.png')}
                                    source={require('../../Images/Home/Banner1.png')}
                                    style={{ alignSelf: 'center', borderRadius: 10, height: 175, width: '100%' }}
                                />
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity onPress={() => navigation.navigate("PromoDetails")} style={{ width: '100%', borderColor: '#000000', marginTop: '5%' }}>
                            <Image
                                source={require('../../Images/Login/Swiper1.png')}
                                style={{ alignSelf: 'center', borderRadius: 10, width: '90%' }}
                            />
                        </TouchableOpacity>


                    </ScrollView>
                    <Modal isOpen={this.state.visible} style={styles.modal} position={"center"}
                        ref={"modal"} backdropPressToClose={false}>
                        <ScrollView>
                            <Card style={{ borderRadius: 30, backgroundColor: '#ffffff', flex: 1 }}>

                                <View style={{ borderBottomWidth: 1, borderColor: '#DEDEDE' }}>
                                    <View style={{ flexDirection: 'row', margin: '3%' }}>
                                        <TouchableOpacity onPress={() => this.setState({ visible: false })} style={{ alignSelf: 'center', marginTop: '2%', marginLeft: '5%' }}>
                                            <MaterialCommunityIcons
                                                name="close"
                                            />
                                        </TouchableOpacity>
                                        <View style={{ alignSelf: 'center', marginTop: '2%', marginLeft: '35%' }}>
                                            <Text style={{ fontSize: 18, alignSelf: 'center', fontFamily: 'Helvetica', fontWeight: 'bold' }}>Promo's</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: '90%', marginTop: '5%', alignSelf: 'center', }}>
                                    <TouchableOpacity onPress={() => this.setState({ visible: true })} style={{ borderColor: '#000000', width: '100%', alignSelf: 'center' }}>
                                        <Image
                                            // source={require('../../Images/Home/Banner1.png')}
                                            source={require('../../Images/Home/BannerDiscount.png')}
                                            style={{ alignSelf: 'center', borderRadius: 10, height: 200, width: '96%' }}
                                        />
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
                        </ScrollView>
                    </Modal>
                </View>
                {this.state.visible == false ?
                    <View style={{ marginLeft: '2%', height: '6%',justifyContent:'center'}}>
                        <Text style={{ color: '#ffffff' }}>A new delivery request near you</Text>

                    </View>
                    : null}
            </SafeAreaView>
        )
    }
}