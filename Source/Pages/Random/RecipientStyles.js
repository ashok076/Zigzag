import {StyleSheet, Dimensions} from 'react-native'


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#5B57BA" 
    },
    titleView: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        padding: 15,
       backgroundColor:'#5B57BA'
       
    },
    title: {
        fontFamily: 'Manrope-ExtraLight_Bold',
        fontSize: 18,
        color: '#000000',
        marginLeft: '30%',

    },
    rowObject: {
        flexDirection: 'row',
          alignItems: 'center',
          justifyContent:'space-between'
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
        marginTop:'5%',
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
      otpInput:{ width: '100%', borderWidth: 0.5, borderColor: 'gray', height: 55, fontSize: 20, borderRadius: 10, alignSelf: 'center', fontWeight: '600', fontWeight:'bold' },
      Note:{ width: '100%', borderWidth: 0.5, borderColor: 'gray', height: 150, fontSize: 16, borderRadius: 10,fontWeight: '600', fontWeight:'bold',textAlignVertical:'top' },
})

export default styles;