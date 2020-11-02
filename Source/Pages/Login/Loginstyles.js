import {StyleSheet , Dimensions,} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    wrapper: { },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    inputBox: { marginLeft: 10, fontSize: 16, width: '70%' }, // backgroundColor: '#e6f2ff'textAlign: 'center',
    textStyles: {
        fontSize: 25,
        marginTop: '5%',
        color: '#1D4A99',
        marginLeft: '3%',
    },
    button: {
        width: (deviceWidth * 90) / 100,
        height: (deviceHeight * 7) / 100,
        backgroundColor: '#93cade',
        borderRadius: 5,
        marginVertical: 12,
        paddingVertical: 12,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        margin: '5%',
    },
    buttonStyle: {
        color: 'red',
        marginTop: 20,
        padding: 20,
        backgroundColor: 'green',
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
    },
    container: { flex: 1, backgroundColor: '#ffffff' },
});

export default styles ;