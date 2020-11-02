import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  // },
  map: {
    flex: 1
  },
  container: {
    flex: 1,
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: "row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
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
    backgroundColor: "#FFF",
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

export default styles;