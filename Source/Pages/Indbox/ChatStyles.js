import { StyleSheet } from 'react-native';


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
        marginLeft: '40%',

    },

    rowObject: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
})

export default styles;