import {StyleSheet, Dimensions} from 'react-native'


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        width:'100%'
    },
    titleView: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        padding: 15,
       backgroundColor:'#DEDEDE'
    },
    title: {
        fontFamily: 'Manrope-ExtraLight_Bold',
        fontSize: 18,
        color: '#000000',
        marginLeft: '30%',

    },
    Otptitle: {
      fontFamily: 'Manrope-ExtraLight_Bold',
      fontSize: 18,
      color: '#000000',
      marginLeft: '35%',

  },
    rowObject: {
        flexDirection: 'row',
          alignItems: 'center',
      },
      codeText:{
        fontFamily: 'Manrope-ExtraLight_Bold',
        fontSize: 18,
        color: '#000000',
        marginLeft: '3%'

      },
      CreatecodeText:{
        fontFamily: 'Manrope-ExtraLight_Bold',
        fontSize: 24,
        color: '#000000',
        marginLeft: '3%'

      },
      CreateSubcodeText:{
        fontFamily: 'Manrope-ExtraLight_Regular',
        fontSize: 16,
        color: '#b0b3b9',
        marginLeft: '3%'

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
      inputRoot:{ flex: 1, marginTop: '10%',width:'90%',alignSelf:'center' },
      inputContainer:{ flex: 0.8, justifyContent: 'space-evenly', flexDirection: 'row' },
      CreateotpInput:{ width: '90%',  height: 45, fontSize: 20, borderRadius: 10, alignSelf: 'center', fontWeight: '600', textAlign: 'center' },
      CreateinputRoot:{flex: 1, marginTop: '5%',width:'90%',alignSelf:'center' ,borderWidth:2 ,borderColor:'#5B57BA',borderRadius:15},
      CreateinputContainer:{ flex: 0.8, justifyContent: 'space-between', flexDirection: 'row' },
      headerTitle:{ width: '96%', marginLeft: '3%',marginTop:'5%' },
      otpInput:{ width: '10%', borderWidth: 0.5, borderColor: 'gray', height: 45, fontSize: 20, borderRadius: 10, alignSelf: 'center', fontWeight: '600', textAlign: 'center' },
     
      timerView:{ alignSelf: 'center', marginTop: '10%' },
     
})

export default styles ;