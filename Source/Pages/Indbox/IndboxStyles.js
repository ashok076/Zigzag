import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
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
        fontSize: 24,
        color: '#ffffff',
    },
   
    rowObject: {
        marginLeft:'45%',
        alignItems: 'center',
    },
})

export default styles;