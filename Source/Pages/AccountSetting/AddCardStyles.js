
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: '#5B57BA'
    },
    titleName: {
        color: '#5B57BA'
    },
    titleHeader: {
        marginTop: '20%'
    },
    Logout: {
        alignSelf: 'center'
    },
    titleView: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        padding: 15,

        flexDirection: 'row',
        justifyContent: 'space-between'
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
        alignSelf:'center',
        marginLeft:'30%'
    },
    Righttitle: {
        fontFamily: 'Manrope-ExtraLight_Bold',
        fontSize: 12,
        color: '#E3E3E3',
    },

    rowObject: {
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    scrollView:{
        flex:1,
        backgroundColor:'#fafafa',
        borderRadius:30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    body: {
        flex: 1,
        backgroundColor: '#fafafa',
        borderRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    bodyInnerView: {
        alignSelf: 'center',
        marginTop: '5%',
    },
    bodyInnerViewDetail: {
        alignSelf: 'center',
    },
    profileName: {
        color: '#5B57BA',
        fontSize: 18,
        fontFamily: 'Manrope-ExtraLight_Bold'
    },
    flagView: {
        flexDirection: 'row',
        marginTop: '2%',
        marginLeft: '3%'
    },
    settingView: {
        width: '100%',
        marginTop: '5%'
    },
    firstBlock: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '96%',
        alignSelf: 'center',
    },
    settingRot: {
        width: '50%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#E3E3E3'
    },
    IconStyles: {
        alignSelf: 'center',
        margin: '10%',
    },
    Icon: {
        fontSize: 55,
        color: '#5B57BA'
    },
    TextViewDetails: {
        alignSelf: 'center',
        marginBottom: '5%'
    },
    textViewStyles: {
        fontSize: 16,
        fontFamily: 'Manrope-ExtraLight_Regular',
        color:'#464646'
    },
    textViewStylesBotom: {
        fontSize: 16,
        fontFamily: 'Manrope-ExtraLight_Regular',
        color:'#aba7a7'
    },
    bottomView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: '10%'
    },
    bottomInnerView: {
        width: '45%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 15
    },
    setPackageView:{ 
        fontSize: 24,
         fontFamily: 'Manrope-ExtraLight_Regular'
         },
         CreateotpInput:{ width: '50%',  height: 25, fontSize: 20, borderRadius: 10, alignSelf: 'center', fontWeight: '600',height:50 },
    CreateinputRoot:{height:55, marginTop: '5%',width:'90%',alignSelf:'center' ,borderWidth:2 ,borderRadius:15},
    CreateinputContainer:{ flexDirection: 'row' },
    // CreateotpInput:{ width: '90%',  height: 25, fontSize: 20, borderRadius: 10, alignSelf: 'center', fontWeight: '600',height:50 },
    // CreateinputRoot:{height:55, marginTop: '5%',width:'90%',alignSelf:'center' ,borderWidth:2 ,borderRadius:15},
    // CreateinputContainer:{justifyContent: 'space-between', flexDirection: 'row' },
})

export default styles;