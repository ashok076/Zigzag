import {StyleSheet, Dimensions} from 'react-native'


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#f3f3f3',
        height: deviceHeight * 90 / 100,
        width: deviceWidth * 100 / 100,
        borderRadius:30,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,

    },
    titleView: {
      width: '100%',
      height: 60,
      justifyContent: 'center',
      padding: 15,
      backgroundColor: '#5B57BA',
      flexDirection: 'row',
      justifyContent:'space-between'
  },
    container: {
        backgroundColor: 'white',
        paddingTop: 12,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
      },
   
    title: {
        fontFamily: 'Manrope-ExtraLight_Bold',
        fontSize: 18,
        color: '#ffffff',
    },
    rowObjectRoot: {
        flexDirection: 'row',
          alignItems: 'center',
          alignSelf:'flex-end',
          
      },
      rowObject: {
        marginLeft:'45%',
        alignItems: 'center',
    },
      overlay: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        justifyContent: 'flex-end',
      },
      buttonTouch:{
        alignSelf: 'center',
        flexDirection: 'row',
        width: '100%',
        marginLeft: '3%',
    },
    button: {
        width: (deviceWidth * 90) / 100,
        height: (deviceHeight * 7) / 100,
        backgroundColor: '#5b57ba',
        borderRadius: 5,
        marginVertical: 12,
        paddingVertical: 12,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        margin: '5%',
        marginTop:'10%',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
      },
      buttonView:{ alignSelf: 'center', width: '90%' },
      buttonText: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
      },
})

export default styles ;