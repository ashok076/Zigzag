import React from 'react';
import { View, SafeAreaView, Text, ScrollView, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Title, Card, TouchableRipple } from 'react-native-paper'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Modal from 'react-native-modalbox'
import { Shadow, Spotlight } from 'react-native-spotlight'
import styles from './HomeStyles';


export default class Homepage extends React.Component {

    initialState = {
        visible: true,
        package: true,
        complete: true,
        showmodal: true,

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
                        {this.state.complete == false ?
                            <Shadow
                                color="#000" // optional: color of shadow
                                opacity={0.5} // optional: shadow opacity (0 - transparent, 1 - full colored)
                                style={{ flex: 1 }}
                            />
                            : null}

                        <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly' }}>

                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
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
                        </View>

                        <View style={{ marginTop: '5%', marginLeft: '5%' }}>
                            <Text style={{ fontSize: 14 }}>What are you looking for today ?</Text>
                        </View>
                        <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>
                            {this.state.complete == false ?
                                <View style={{ alignSelf: 'center', }}>
                                    <View>
                                        <Card style={{ backgroundColor: '#9fecf1', borderRadius: 30 }}>
                                            <Image
                                                source={require('../../Images/Home/Package.png')}

                                            />
                                        </Card>
                                        <View style={{ alignSelf: 'center', marginTop: '5%' }}>
                                            <Text>Send Package</Text>
                                        </View>
                                    </View>
                                </View>
                                :

                                <TouchableOpacity onPress={() => navigation.navigate("RecipientForm")} style={{ alignSelf: 'center', }}>
                                    <View>
                                        <Card style={{ backgroundColor: '#9fecf1', borderRadius: 30 }}>
                                            <Image
                                                source={require('../../Images/Home/Package.png')}

                                            />
                                        </Card>
                                        <View style={{ alignSelf: 'center', marginTop: '5%' }}>
                                            <Text>Send Package</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            }

                            {/* <View style={{ backgroundColor: '#5B57BA' }}>
                                    <Text>Click here to send an iteam</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text>okay</Text>
                                </TouchableOpacity>
                            </View> */}
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

                        <View style={{ width: '100%', marginTop: '5%', alignSelf: 'center', margin: '5%', }}>
                            <TouchableOpacity onPress={() => navigation.navigate("HomePagePoilt")} style={{ borderColor: '#000000', width: '98%', alignSelf: 'center' }}>
                                <Image
                                    source={require('../../Images/Home/Banner3_3.png')}
                                    style={{ alignSelf: 'center', borderRadius: 10, height: 130, width: 350 }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: '5%', marginRight: '5%', flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%' }}>
                            <View>
                                <Text>Feed</Text>
                            </View>
                            <View>
                                <Text>View All</Text>
                            </View>
                        </View>
                        <View style={{ width: '90%', marginTop: '5%', alignSelf: 'center', }}>
                            <TouchableOpacity onPress={() => navigation.navigate("PromoModal")} style={{ borderColor: '#000000', width: '98%', alignSelf: 'center' }}>
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
                    {this.state.showmodal == true ?
                        <Modal isOpen={this.state.visible} style={styles.modal} position={"bottom"}
                            ref={"modal"} backdropPressToClose={false}>
                            <Card style={{ borderRadius: 30, backgroundColor: '#ffffff', borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}>
                                <View style={{backgroundColor:'#0000002E'}}>
                                <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly' }}>
                                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                        <Card style={{ backgroundColor: '#ffffff', marginTop: '10%', width: '60%', alignSelf: 'center', borderRadius: 10 }}>
                                        <Card style={{ backgroundColor: '#5B57BA', marginTop: '5%', width: '90%', alignSelf: 'center', borderRadius: 10,marginBottom:'5%' }}>
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
                                        </Card>


                                        <Card style={{ backgroundColor: '#ffffff', marginTop: '10%', width: '30%', alignSelf: 'center', marginLeft: '3%', borderRadius: 10 }}>
                                        <Card style={{ backgroundColor: '#5B57BA', marginTop: '10%',marginBottom:'10%', width: '80%', alignSelf: 'center', marginLeft: '3%', borderRadius: 10 }}>
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
                                        </Card>
                                    </View>
                                </View>
                                <View style={{ marginTop: '5%', marginLeft: '5%' }}>
                                    <Text style={{ fontSize: 14 }}>What are you looking for today ?</Text>
                                </View>
                                <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>

                                        <View style={{ alignSelf: 'center', }}>
                                            <View>
                                                <Card style={{ backgroundColor: '#9fecf1', borderRadius: 30 }}>
                                                    <Image
                                                        source={require('../../Images/Home/Package.png')}

                                                    />
                                                </Card>
                                                <View style={{ alignSelf: 'center', marginTop: '5%' }}>
                                                    <Text>Send Package</Text>
                                                </View>
                                            </View>
                                        </View>
                                        
                                    <View  style={{ alignSelf: 'center', flexDirection: 'column' }}>
                                        <Card style={{ backgroundColor: '#9fecf1', borderRadius: 30 }}>
                                            <Image
                                                source={require('../../Images/Home/Search.png')}
                                            />
                                        </Card>
                                        <View style={{ alignSelf: 'center', marginTop: '5%' }}>
                                            <Text>Track Orders</Text>
                                        </View>
                                    </View>
                                    <View  style={{ alignSelf: 'center', flexDirection: 'column' }}>
                                        <Card style={{ backgroundColor: '#9fecf1', borderRadius: 30 }}>
                                            <Image
                                                source={require('../../Images/Home/Tack.png')}
                                            />
                                        </Card>
                                        <View style={{ alignSelf: 'center', marginTop: '5%' }}>
                                            <Text>Deliver</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{ width: '100%', marginTop: '5%', alignSelf: 'center', margin: '5%', }}>
                                    <View  style={{ borderColor: '#000000', width: '98%', alignSelf: 'center' }}>
                                        <Image
                                            source={require('../../Images/Home/Banner3_3.png')}
                                            style={{ alignSelf: 'center', borderRadius: 10, height: 130, width: 350 }}
                                        />
                                    </View>
                                </View>
                                </View>
                            </Card>
                            <Card style={{position: 'absolute' ,borderRadius:30,borderBottomLeftRadius:0,borderBottomRightRadius:0,marginVertical:'100%'}}>
                                <View style={{ borderBottomWidth: 1, borderColor: '#DEDEDE' ,marginTop:'5%'}}>
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
                                        onPress={() => this.setState({ visible: false, complete: false })}
                                        // onPress={()=>navigation.navigate("AccountSetting")}
                                        style={styles.button}>
                                        <View
                                            style={styles.buttonTouch}>
                                            <View style={styles.buttonView}>
                                                <Text style={styles.buttonText}>Next</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Card>
                        </Modal>
                        : null}

                </View>
                {this.state.complete == false ?
                    <View style={{ flexDirection: 'row', width: '60%', alignSelf: 'center', position: 'absolute', marginTop: '73%' }}>
                        <View style={{ alignSelf: 'center', height: '30%', backgroundColor: '#5B57BA', width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', borderRadius: 15 }}>
                            <Text style={{ color: '#ffffff', alignSelf: 'center' }}>Click here to send an iteam</Text>
                            <TouchableOpacity onPress={() => this.setState({ complete: true })} style={{ color: '#ffffff', alignSelf: 'center' }}>
                                <Text style={{ color: '#ffffff', alignSelf: 'center' }}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : null}
                {this.state.visible == false ?
                    <View style={{ marginLeft: '2%', height: '6%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '90%' }}>
                        <Text style={{ color: '#ffffff' }}>A new delivery request near you</Text>
                        <Text style={{ color: '#ffffff' }}>5:20 PM</Text>
                    </View>
                    : null}


            </SafeAreaView>
        )
    }
}