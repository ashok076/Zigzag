import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    titleView: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        padding: 15,
        borderBottomWidth: 1,
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
    flatList: {
        width: '90%',
        alignSelf: 'center',
        marginTop: '5%',
        borderRadius: 15,
        marginBottom: '2%'
    },
    rootInner: {
        flexDirection: 'row',
        marginTop: '5%',
        width: '100%',
        marginBottom: '3%'
    },
    image: {
        width: 50,
        height: 50,
        alignSelf: 'center',

    },
    middleView: {
        marginLeft: '4%',
        width: '60%'
    },
    middleInnerView: {
        marginTop: '2%'
    },
    dtView: {
        width: '20%',
        alignSelf: 'flex-start'
    },
    titleName: {
        fontFamily: 'Manrope-ExtraLight_Regular',
        fontSize: 16
    },
    titleDes: {
        fontFamily: 'Manrope-ExtraLight_Regular',
        fontSize: 12,
        color: '#00000099'
    }
})

export default styles;