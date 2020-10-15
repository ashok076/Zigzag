
import {StyleSheet} from 'react-native'

const styles =StyleSheet.create({
    titleHeader:{
         marginTop: '20%' 
    },
    Logout:{
            alignSelf: 'flex-end' 
    },
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
        fontSize: 18,
        color: '#ffffff',
    },
    Righttitle: {
        fontFamily: 'Manrope-ExtraLight_Bold',
        fontSize: 12,
        color: '#E3E3E3',
    },
   
    rowObject: {
        marginLeft:'45%',
        alignItems: 'center',
    },
    body:{ 
        flex: 1, 
        backgroundColor: '#fafafa',
         borderRadius: 30, 
         borderBottomLeftRadius: 0, 
         borderBottomRightRadius: 0 
        }
})

export default styles;