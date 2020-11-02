import { StyleSheet, Dimensions } from 'react-native'


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
        borderWidth: 1,
        borderColor: '#00000014'
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
        width: '90%',
        alignSelf: 'center',
        marginTop: '5%',
        borderRadius: 15,
        marginBottom: '2%',
        flexDirection: 'row'
    },
    middleView: {
        marginLeft: '4%',
        width: '90%'
    },
    dtView: {
        width: '20%',
        alignSelf: 'flex-start'
    },
    CreateinputRoot: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 15,
        height: '10%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        padding: '5%',
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
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 10,
    },
    buttonTouch: {
        alignSelf: 'center',
        flexDirection: 'row',
        width: '100%',
        marginLeft: '3%',
    },
    buttonView: { alignSelf: 'center', width: '90%' },
    CreateinputContainer: { justifyContent: 'space-between', flexDirection: 'row' },

    CreateotpInput: { width: '90%', height: 45, fontSize: 20, borderRadius: 10, alignSelf: 'center', fontWeight: '600', textAlign: 'center' },
})

export default styles;