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
        flexDirection:'row'
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
    // CreateinputRoot:{flex: 1, marginTop: '5%',width:'90%',alignSelf:'center' ,borderWidth:2 ,borderColor:'#5B57BA',borderRadius:15},
    CreateotpInput:{ width: '90%',  height: 25, fontSize: 20, borderRadius: 10, alignSelf: 'center', fontWeight: '600',height:50 },
    CreateinputRoot:{height:55, marginTop: '1%',width:'90%',alignSelf:'center' ,borderWidth:2 ,borderRadius:15},
    CreateinputContainer:{justifyContent: 'space-between', flexDirection: 'row' },
   
    // CreateinputRoot: {
    //     width: '90%',
    //     alignSelf: 'center',
    //     borderWidth: 2,
    //     borderRadius: 15,
    //     height: '10%',
    //     flexDirection: 'row',
    //     alignSelf: 'center',
    //     justifyContent:'space-between',
    //     padding:'5%',
    // },
    // CreateinputContainer: { justifyContent: 'space-between', flexDirection: 'row' },
    // CreateotpInput: { width: '90%', height: 45, fontSize: 20, borderRadius: 10, alignSelf: 'center', fontWeight: '600', textAlign: 'center' },
})

export default styles;