import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Image, Dimensions, Animated
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MapView, { PROVIDER_GOOGLE, Marker, Heatmap, Circle, Polyline, Polygon } from 'react-native-maps'
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Pickup } from './Modal/mapData';
import CustomMarker from './Modal/CustomMarker'
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 280;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;



export default class MapDeliver extends Component {
  initialState = {
    visible: true
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
            latitude: 24.85072329,
            longitude: 67.02129803,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {
            Pickup.map(marker => (

              <Marker
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude
                }}

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
                  <Text numberOfLines={2} style={styles.cardtitle}>We found courier to pick up your package.</Text>
                  <View style={{ flexDirection: "row", width: '100%', marginTop: '5%' }}>
                    <View style={{ width: '20%' }}>
                      <Image
                        source={require('../../Images/Map/User.png')}
                        style={styles.cardImage}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={{ width: '50%', marginLeft: '3%', alignSelf: 'center', marginTop: '3%' }}>
                      <Text numberOfLines={1} style={styles.cardname}>Walt Jackson</Text>
                      {/* <StarRating ratings={marker.rating} reviews={marker.reviews} /> */}
                      <Text numberOfLines={1} style={styles.cardDescription}>Bicycle Courier</Text>
                    </View>
                    <View style={{ width: '25%', alignSelf: 'center' }}>
                      <TouchableOpacity
                        onPress={() => { }}
                        style={[styles.Pickup, {
                          borderColor: '#7DE0C8',
                          borderWidth: 1,
                          padding: '5%'
                        }]}
                      >
                        <Text style={[styles.textSign, {
                          color: '#ffffff'
                        }]}>Delivering</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ alignSelf: 'center', width: '90%', flexDirection: 'row' }}>
                    <Image
                      source={require('../../Images/Account/Account/flag.png')}
                    />
                    <Image
                      source={require('../../Images/Account/Account/flag.png')}
                    />
                    <Image
                      source={require('../../Images/Account/Account/flag.png')}
                    />
                    <Image
                      source={require('../../Images/Account/Account/flag.png')}
                    />
                    <Image
                      source={require('../../Images/Account/Account/flag1.png')}
                    />
                  </View>

                  <View style={{ width: '96%', marginTop: '5%', borderWidth: 1, borderRadius: 15, alignSelf: "center", padding: '3%', borderColor: '#EAEAEA' }}>
                    <View style={{ flexDirection: 'row', width: '90%', marginTop: '3%' }}>
                      <View style={{ width: '70%', marginLeft: '3%', alignSelf: 'center', }}>
                        <Text numberOfLines={1} style={styles.cardDetails}>Boxi Regular to</Text>

                      </View>
                      <View style={{ width: '40%', alignSelf: 'center' }}>
                        <TouchableOpacity
                          onPress={() => { }}
                        >
                          <Text style={[styles.textSign, {
                            color: '#5B57BA'
                          }]}>View Details</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', marginLeft: '3%', marginTop: '5%' }}>
                      <Text numberOfLines={1} style={styles.cardContact}>Jonathan | 432143132</Text>
                      <Text numberOfLines={2} style={styles.cardname}>4969 Heamlock lane ,Harlingen , Texa ,78550</Text>
                    </View>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity
                      onPress={() => { }}
                      style={[styles.signIn, {
                        borderColor: '#DEDEDE',
                        borderWidth: 1, flexDirection: 'row'
                      }]}
                    >
                      <Ionicons name="call-outline" />
                      <Text style={[styles.textSign, {
                        color: '#000000', marginLeft: '5%'
                      }]}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => { }}
                      style={[styles.signIn, {
                        borderColor: '#DEDEDE',
                        borderWidth: 1, flexDirection: 'row'
                      }]}
                    >
                      <Ionicons name="chatbubble-outline" />
                      <Text style={[styles.textSign, {
                        color: '#000000', marginLeft: '5%'
                      }]}>Chat</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>


            </Animated.ScrollView>
            :null
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
    alignSelf: 'flex-start',
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
    width: '80%',
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


