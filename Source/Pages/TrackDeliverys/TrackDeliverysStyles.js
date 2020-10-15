import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    titleView: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#ffffff'
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
    bodyContainer: {
        flex: 1,
    },
    innerView:{
        width: '100%',
        marginTop:'5%'
    },
    cardView: {
        backgroundColor: '#5B57BA',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: '3%',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    cardViewCompleted: {
        backgroundColor: '#7DE0C87D',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: '3%',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    orderTrack: {
        backgroundColor: '#ffffff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: '3%',
        // shadowColor: '#000',
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity:  0.4,
        // shadowRadius: 3,
        // elevation: 5,
    }

})

export default styles;