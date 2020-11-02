import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Image, Dimensions, Animated ,TouchableOpacity
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
import { Box } from './Modal/mapData';
import CustomMarker from './Modal/CustomMarker'


const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 280;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;



export default class MapOrder extends Component {
    initialState = {
        visible: false
    }
    constructor(props) {
        super(props);
        this.state = {
            ...this.initialState,
        }
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
                        Box.map(marker => (

                            <Marker
                                coordinate={{
                                    latitude: marker.latitude,
                                    longitude: marker.longitude
                                }}
                                onPress ={()=> this.setState({visible:true})}
                            >
                               
                                    <CustomMarker item={marker} />
                             
                            </Marker>


                        ))
                    }
                </MapView>
                <View style={styles.searchBox}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icons name="arrow-back" color="#5b57ba" size={24} />
                    </TouchableOpacity>
                </View>
                {
                    this.state.visible == true ?
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
            
                          <View style={{ flexDirection: "row", width: '70%', marginLeft: '15%', alignSelf: 'center' }}>
                            <View style={{ width: '20%' }}>
                              <Image
                                source={require('../../Images/Map/User.png')}
                                style={styles.cardImage}
                                resizeMode="cover"
                              />
                            </View>
                            <View style={{ width: '80%', marginLeft: '10%', alignSelf: 'center', marginTop: '3%' }}>
                              <Text numberOfLines={1} style={styles.cardname}>Walt Jackson</Text>
                              {/* <StarRating ratings={marker.rating} reviews={marker.reviews} /> */}
                              <Text numberOfLines={1} style={styles.cardDescription}>Bicycle Courier</Text>
                            </View>
                          </View>
            
                          <View style={{ flexDirection: "row", width: '100%', marginTop: "5%", marginBottom: '3%' }}>
                            <View style={{ width: '20%', alignSelf: "center" }}>
                              <Feather name="clock" style={{ alignSelf: "center", fontSize: 20 ,color:'#5B57BA' }} />
                              <View style={{height:30,borderLeftWidth:3,alignSelf:'center',borderColor:'#DEDEDE'}} />
                            </View> 
                            <View style={{ width: '80%', alignSelf: 'center', }}>
                              <Text numberOfLines={1} style={styles.cardPickupTimeView}>Sep 20th, 1PM</Text>
                            </View>
                          </View>
                          <View style={{ borderWidth: 1, borderColor: '#00000014', width: '80%', alignSelf: 'flex-end' }} />
            
                          <View style={{ flexDirection: "row", width: '100%', }}>
                            <View style={{ width: '20%', alignSelf: "center" }}>
                            <View style={{height:30,borderLeftWidth:3,alignSelf:'center',borderColor:'#DEDEDE'}} />
                              <Octicons name="primitive-dot" style={{ alignSelf: "center", fontSize: 20 ,color:"#5B57BA" }} />
                            </View>
                            <View style={{ width: '80%', alignSelf: 'center', }}>
                              <Text numberOfLines={1} style={styles.cardPickupL1View}>24 Warwick ST</Text>
                            </View>
                          </View>
                          <View style={{ borderWidth: 1, borderColor: '#00000014', width: '80%', alignSelf: 'flex-end' }} />
                          <View style={{ flexDirection: "row", width: '100%', }}>
                            <View style={{ width: '20%', alignSelf: "center" }}>
                            <View style={{height:25,borderLeftWidth:3,alignSelf:'center',borderColor:'#DEDEDE'}} />
                              <Octicons name="primitive-dot" style={{ alignSelf: "center", fontSize: 20 ,color:'#7DE0C8' }} />
                            </View>
                            <View style={{ width: '80%', alignSelf: 'center', }}>
                              <Text style={styles.cardPickupL2View}>4270 Benson Park Drive. YOUNG AMERI</Text>
                            </View>
                          </View>
                          <View style={{ borderWidth: 1, borderColor: '#00000014', width: '100%' }} />
                          <View style={{ backgroundColor: '#00000014', width: '100%' }}>
                            <View style={{ flexDirection: "row", width: '100%', marginTop: '5%' }}>
                              <View style={{ width: '20%' }}>
                                <Image
                                  source={require('../../Images/Map/Mat.png')}
                                  style={styles.cardImage}
                                  resizeMode="cover"
                                />
                              </View>
                              <View style={{ width: '50%', marginLeft: '3%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <Text numberOfLines={1} style={styles.cardname}> >1kg</Text>
                                <Text numberOfLines={1} style={styles.cardname ,{color:"#393690",fontWeight:'bold'}}>Premier</Text>
                              </View>
                              <View style={{ width: '23%', alignSelf: 'center' }}>
                                <Text style={{ fontSize: 20, fontFamily: 'Helvetica', fontWeight: 'bold' }}>10$</Text>
                              </View>
                            </View>
                            <View style={styles.button}>
                              <TouchableOpacity
                                onPress={() => navigation.navigate("MapScreen")}
                                style={[styles.signIn, {
                                  borderColor: '#7DE0C8',
                                  backgroundColor: '#7DE0C8',
                                  borderWidth: 1, 
                                }]}
                              >
                                <Text style={[styles.textSign, {
                                  color: '#000000', marginLeft: '5%'
                                }]}>Accept</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => navigation.navigate("MapOrder")}
                                style={[styles.signIn, {
                                  borderColor: '#DEDEDE',
                                  backgroundColor: '#E64A64',
                                  borderWidth: 1,
                                }]}
                              >
                                <Text style={[styles.textSign, {
                                  color: '#000000', marginLeft: '5%'
                                }]}>Reject</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </ScrollView>
                      </View>
                  </Animated.ScrollView>
                        : null
                }
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
        alignSelf:'flex-start',
        marginLeft:'5%'
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
        alignSelf: 'center'

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
    }
});


