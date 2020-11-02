import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Image, Dimensions, Animated, TouchableOpacity
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MapView, { PROVIDER_GOOGLE, Marker, Heatmap, Circle, Polyline, Polygon } from 'react-native-maps'
import Icons from 'react-native-vector-icons/MaterialIcons';
import { PickupDate } from './Modal/mapData';
import CustomMarker from './Modal/CustomMarker'
import { Shadow, Spotlight } from 'react-native-spotlight'
import { DatePicker } from 'native-base';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 180;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default class MapViewScreen extends Component {
    initialState = {
        visible: false,
        chosenDate:''
    }
    constructor(props) {
        super(props);
        this.state = {
            ...this.initialState,
        }
    }

    setDate(newDate) {
        console.log(newDate)
        this.setState({ chosenDate: newDate });
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: 24.86170245,
                        longitude: 67.02129903,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {
                        PickupDate.map(marker => (

                            <Marker
                                coordinate={{
                                    latitude: marker.latitude,
                                    longitude: marker.longitude
                                }}
                                onPress={() => this.setState({ visible: true })}
                            >

                                <CustomMarker item={marker} />

                            </Marker>


                        ))
                    }
                </MapView>
                <View style={styles.searchBox}>
                    <TouchableOpacity onPress={() => this.setState({ visible: true })}>
                        <Icons name="arrow-back" color="#5b57ba" size={24} />
                    </TouchableOpacity>

                </View>
                <View style={{ backgroundColor: '#ffffff', width: '90%', alignSelf: "center", position: 'absolute', marginTop: '80%' }}>
                    <View style={{ width: '80%', alignSelf: 'center', padding: '1%' }}>
                        <Text>1/4</Text>
                        <Text style={{ fontSize: 16 }}>Start make your order here.</Text>
                        <Text style={{ fontSize: 13 }}>We believe that a connected world is a better world, and that belief guides</Text>
                        <View style={{ alignSelf: 'flex-end', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={styles.buttonSkip}>
                                <View>
                                    <View>
                                        <Text>Skip</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}>
                                <View
                                    style={styles.buttonTouch}>
                                    <View style={styles.buttonView}>
                                        <Text style={styles.buttonText}>Next</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Shadow
                    color="#000" // optional: color of shadow
                    opacity={0.5} // optional: shadow opacity (0 - transparent, 1 - full colored)
                    style={{ flex: 1 }}
                />

                <Animated.ScrollView
                    snapToInterval={CARD_WIDTH + 20}
                    snapToAlignment="center"
                    style={styles.scrollView}
                    contentInset={{
                        top: 0,
                        left: SPACING_FOR_CARD_INSET,
                        bottom: 0,
                        right: SPACING_FOR_CARD_INSET
                    }}
                    contentContainerStyle={{
                        paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
                    }}

                >

                    <View style={styles.card}>
                        <ScrollView style={styles.textContent}>

                            <View style={{ flexDirection: "row", width: '100%', marginTop: "5%", marginBottom: '3%' }}>
                                <View style={{ width: '20%', alignSelf: "center" }}>
                                    <Feather name="clock" style={{ alignSelf: "center", fontSize: 20, color: '#5B57BA' }} />
                                    <View style={{ height: 15, borderLeftWidth: 3, alignSelf: 'center', borderColor: '#DEDEDE' }} />
                                </View>
                                <View style={{ width: '80%', alignSelf: 'center', }}>
                                    {/* <Text numberOfLines={1} style={styles.cardPickupTimeView}>Select Date</Text> */}
                                    <DatePicker
                                        defaultDate={new Date()}
                                        minimumDate={new Date()}
                                        maximumDate={new Date(2050, 12, 31)}
                                        locale={"en"}
                                        formatChosenDate={date => { return moment(date).format('MM/DD/YYYY'); }}
                                        modalTransparent={false}
                                        animationType={"fade"}
                                        androidMode={"default"}
                                        placeHolderText="Select date"
                                        textStyle={{ color: "#000000" }}
                                        placeHolderTextStyle={{  color: "#000000" }}
                                        onDateChange={this.setDate}
                                        disabled={false}
                                    />
                                </View>
                            </View>
                            <View style={{ borderWidth: 1, borderColor: '#00000014', width: '80%', alignSelf: 'flex-end' }} />

                            <View style={{ flexDirection: "row", width: '100%', }}>
                                <View style={{ width: '20%', alignSelf: "center" }}>
                                    <View style={{ height: 30, borderLeftWidth: 3, alignSelf: 'center', borderColor: '#DEDEDE' }} />
                                    <Octicons name="primitive-dot" style={{ alignSelf: "center", fontSize: 20, color: "#5B57BA" }} />
                                </View>
                                <View style={{ width: '80%', alignSelf: 'center', }}>
                                    <Text numberOfLines={1} style={styles.cardPickupL1View}>24 Warwick ST</Text>
                                </View>
                            </View>
                            <View style={{ borderWidth: 1, borderColor: '#00000014', width: '80%', alignSelf: 'flex-end' }} />
                            <TouchableOpacity onPress={() => navigation.navigate("OrderComplete")} style={{ flexDirection: "row", width: '100%', }}>
                                <View style={{ width: '20%', alignSelf: "center" }}>
                                    <View style={{ height: 25, borderLeftWidth: 3, alignSelf: 'center', borderColor: '#DEDEDE' }} />
                                    <Octicons name="primitive-dot" style={{ alignSelf: "center", fontSize: 20, color: '#7DE0C8' }} />
                                </View>
                                <View style={{ width: '80%', alignSelf: 'center', }}>
                                    <Text style={styles.cardPickupL2View}>4270 Benson Park Drive. YOUNG AMERI</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                </Animated.ScrollView>


            </View >
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    searchBox: {
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        flexDirection: "row",
        backgroundColor: '#fff',
        width: 10,
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        alignSelf: 'flex-start',
        marginLeft: '5%'
    },
    searchSpot: {
        position: 'absolute',
        flexDirection: "row",
        backgroundColor: '#fff',
        width: 90,
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        alignSelf: 'center',
        marginLeft: '5%'
    },
    chipsScrollView: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 90 : 80,
        paddingHorizontal: 10
    },
    chipsIcon: {
        marginRight: 5,
    },
    chipsItem: {
        flexDirection: "row",
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 8,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        height: 35,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
        alignSelf: 'center',
        marginTop: '5%'
    },
    cardImage: {
        flex: 3,
        width: 50,
        height: 50,
        alignSelf: "center",
    },


    textContent: {
        flex: 2,
        padding: 10,
    },
    cardtitle: {
        fontSize: 18,
        fontFamily: 'Manrope-Bold'
    },
    cardname: {
        fontSize: 16,
        // marginTop: 5,
        color: '#00000099',
        fontFamily: 'Manrope-Medium',
    },
    cardPickupTimeView: {
        fontSize: 16,
        // marginTop: 5,
        color: '#00000099',
        fontFamily: 'Manrope-ExtraLight_Regular',
    },
    cardPickupL1View: {
        fontSize: 16,
        // marginTop: 5,
        color: '#00000099',
        fontFamily: 'Manrope-ExtraLight_Bold',
    },
    cardPickupL2View: {
        fontSize: 14,
        // marginTop: 5,
        color: '#00000099',
        fontFamily: 'Manrope-ExtraLight_Regular',
    },
    cardContact: {
        fontSize: 14,
        // marginTop: 5,
        color: '#00000099',
        fontFamily: 'Manrope-Medium',
    },
    cardDetails: {
        fontSize: 14,
        // marginTop: 5,
        color: '#000000E6',
        fontFamily: 'Manrope-Medium',
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    },
    marker: {
        width: 50,
        height: 50,
    },
    markerGreen: {
        width: 50,
        height: 50,
    },
    markerGreenPickup: {
        width: 70,
        height: 70,
        alignSelf: 'center'
    },
    button: {
        alignItems: 'center',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: '5%',
        marginTop: '5%',
        paddingBottom: '5%'
    },
    signIn: {
        width: '40%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,

    },
    Pickup: {
        width: '100%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: '#7DE0C8',
        shadowColor: '#7DE0C8',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 10,
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
    },
    button: {
        width: (deviceWidth * 20) / 100,
        height: (deviceHeight * 4) / 100,
        backgroundColor: '#5b57ba',
        borderRadius: 5,
        marginVertical: 3,
        paddingVertical: 4,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 10,
    },
    buttonSkip: {
        width: (deviceWidth * 20) / 100,
        height: (deviceHeight * 4) / 100,
        borderRadius: 5,
        marginVertical: 3,
        paddingVertical: 4,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    buttonTouch: {
        alignSelf: 'center',
        flexDirection: 'row',
        width: '100%',
        marginLeft: '3%',
    },
    buttonView: { alignSelf: 'center', width: '90%' },
});


