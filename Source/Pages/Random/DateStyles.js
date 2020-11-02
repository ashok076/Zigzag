import {StyleSheet, Dimensions} from 'react-native'


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    titleView: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#ffffff',
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
        fontSize: 24,
        color: '#000000',
    },
   
    rowObject: {
        alignItems: 'center',
        flexDirection:'row',
        width:'100%'
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
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
        marginTop:'40%',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity:  0.4,
        shadowRadius: 5,
        elevation: 10,
      },
      buttonTouch:{
        alignSelf: 'center',
        flexDirection: 'row',
        width: '100%',
        marginLeft: '3%',
    },
    buttonView:{ alignSelf: 'center', width: '90%' },
})

export default styles;