import { StyleSheet ,Dimensions} from 'react-native';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    button: {
        width: (deviceWidth * 90) / 100,
        height: (deviceHeight * 7) / 100,
        backgroundColor: '#ffffff',
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
      buttonTouch:{
        alignSelf: 'center',
        flexDirection: 'row',
        width: '100%',
        marginLeft: '3%',
    },
    buttonView:{ alignSelf: 'center', width: '90%' },
      buttonText: {
        fontSize: 18,
        color: '#5b57ba',
        textAlign: 'center',
      },
})

export default styles;