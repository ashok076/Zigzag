import {StyleSheet, Dimensions} from 'react-native'


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: 'white',
        paddingTop: 12,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },

    titleView: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        padding: 15,
        borderWidth:1,
        borderColor:'#00000014'
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
    },
    rootInner: {
        flexDirection: 'row',
        marginTop: '5%',
        width: '100%',
        marginBottom: '3%'
    },
    flatList: {
        width: '100%',
        alignSelf: 'center',
        marginTop: '5%',
        borderRadius: 15,
        marginBottom: '2%',
        flexDirection:'row'
    },
    middleView: {
        marginLeft: '4%',
        width: '90%'
    },
    dtView: {
        width: '20%',
        alignSelf: 'flex-start'
    },

    modal: {
        backgroundColor: '#f3f3f3',
        justifyContent: 'center',
        alignItems: 'center',
        height: deviceHeight * 95 / 100,
        width: deviceWidth * 100 / 100,
        borderRadius:30,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,

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

export default styles;