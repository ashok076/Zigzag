import React from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, TextInput, Image, CheckBox, ActivityIndicator } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import { Title, Card } from 'react-native-paper'
import Modal from 'react-native-modalbox'
import styles from './PackageInfoStyles'



export default class PackageInformation extends React.Component {

    initialState = {
        RecipName: '',
        RecipAddress: '',
        RecipZip: '',
        RecipContact: '',
        RecipNotes: '',
        chk: false,
        visible: false

    }
    constructor(props) {
        super(props)
        this.state = {
            ...this.initialState
        }
    }

    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#5B57BA" />

                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icons name="arrow-back" color="#393690" size={24} />
                        </TouchableOpacity>
                        <View style={{ width: '30%' }}>
                            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                                <Octicons name="primitive-dot" style={{ fontSize: 25, alignSelf: 'center', color: '#9FECF1', marginLeft: "10%" }} />
                                <View style={{ borderWidth: 1, alignSelf: 'center', borderColor: '#ffffff', width: '70%' }} />
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <Text style={{ color: '#ffffff', fontFamily: 'Manrope-ExtraLight_SemiBold', fontSize: 10 }}>Recipient Form</Text>
                            </View>
                        </View>


                        <View style={{ width: '30%' }}>
                            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                                <View style={{ borderWidth: 1, alignSelf: 'center', borderColor: '#ffffff', width: '90%' }} />
                                <Octicons name="primitive-dot" style={{ fontSize: 25, alignSelf: 'center', color: '#9FECF1', marginRight: '80%' }} />
                            </View>
                            <View style={{ marginTop: '5%', marginLeft: '10%' }}>
                                <Text style={{ color: '#DEDEDE', fontFamily: 'Manrope-ExtraLight_SemiBold', fontSize: 10 }}>Package information</Text>
                            </View>
                        </View>
                        <View style={{ width: '30%' }}>
                            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                                <View style={{ borderWidth: 1, alignSelf: 'center', borderColor: '#ffffff', width: '90%' }} />
                                <FontAwesome name="dot-circle-o" style={{ fontSize: 25, alignSelf: 'center', color: '#E3E3E3', marginRight: '80%' }} />
                            </View>
                            <View style={{ marginTop: '5%', alignSelf: 'center' }}>
                                <Text style={{ color: '#DEDEDE', fontFamily: 'Manrope-ExtraLight_SemiBold', fontSize: 10 }}>Checkout</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <Card style={{ width: '100%', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ margin: '5%',flexDirection:'row',justifyContent:'space-between' }}>
                            <View>
                                <Text style={{ fontSize: 16, fontFamily: 'Helvetica', }}>Pick up Information</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, fontFamily: 'Helvetica', }}>Edit</Text>
                            </View>

                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={[styles.innerView]}>
                                <Card style={[styles.cardViewBottom]}>
                                    <View style={{ flexDirection: 'row', width: '100%' }}>
                                        <View style={{ alignSelf: 'center', width: '10%', marginLeft: '2%' }}>
                                            <Icons name="person-outline" style={{ fontSize: 20, color: '#393690' }} />
                                        </View>
                                        <View style={{ alignSelf: 'center', width: '80%' }}>
                                            <Text>Kitani Sarasvati</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: '3%' }}>
                                        <View style={{ alignSelf: 'center', width: '10%', marginLeft: '2%' }}>
                                            <Ionicons name="call-outline" style={{ fontSize: 20, color: '#393690' }} />
                                        </View>
                                        <View style={{ alignSelf: 'center', width: '80%' }}>
                                            <Text>+32 43223 21321</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: '3%', marginBottom: '3%' }}>
                                        <View style={{ alignSelf: 'center', width: '10%', marginLeft: '2%' }}>
                                            <Feather name="map" style={{ fontSize: 20, color: '#393690' }} />
                                        </View>
                                        <View style={{ alignSelf: 'center', width: '80%' }}>
                                            <Text>4270 Benson Park Drive. YOUNG AMERI</Text>
                                        </View>
                                    </View>

                                </Card>
                            </View>
                        </View>
                        <View style={{ margin: '5%' }}>
                            <View>
                                <Text style={{ fontSize: 14, fontFamily: 'Manrope-SemiBold', }}>Package Information</Text>
                            </View>
                            <View style={{ marginTop: '3%' }}>
                                <Text style={{ fontSize: 14, fontFamily: 'Manrope-Medium', }}>Size</Text>
                            </View>
                            <Card style={{ marginTop: '5%', width: '100%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} onPress={() => this.setState({ visible: true })}>
                                    <TouchableOpacity style={{ padding: '5%', borderWidth: 1, borderColor: '#00000014', borderRadius: 15 }}>
                                        <Image
                                            source={require('../../Images/Send/Img22.png')}
                                            style={{alignSelf:'center'}}
                                        />
                                        <Text style={{ alignSelf: 'center' }}>>1 kg</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ padding: '5%', borderWidth: 1, borderColor: '#00000014', borderRadius: 15 }} onPress={() => this.setState({ visible: true })}>
                                        <Image
                                            source={require('../../Images/Send/Img11.png')}
                                            style={{alignSelf:'center'}}
                                        />
                                        <Text style={{ alignSelf: 'center' }}>3kg - 10kg</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ padding: '5%', borderWidth: 1, borderColor: '#00000014', borderRadius: 15 }} onPress={() => this.setState({ visible: true })}>
                                        <Image
                                            source={require('../../Images/Send/Img33.png')}
                                            style={{alignSelf:'center'}}
                                        />
                                        <Text style={{ alignSelf: 'center' }}>> 10kg</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: '3%', margin: '5%', justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <View>
                                        <Text style={{ fontSize: 16, fontFamily: 'Helvetica', }}>Fragile</Text>
                                    </View>
                                    <View>
                                        <CheckBox value={this.state.chk} onChange={() => this.setState({ chk: !this.state.chk })} />
                                    </View>
                                </View>
                            </Card>

                        </View>

                        <Card style={{ margin: '5%' }}>
                            <View style={{ justifyContent: 'space-between', marginTop: '3%', marginLeft: '3%' }}>
                                <Text style={{ color: '#000000', fontFamily: 'Manrope-SemiBold', fontSize: 14 }}>Shipping Information</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Manrope-Medium', marginLeft: '3%' }}>Duration</Text>
                            </View>
                            <View style={{ marginTop: '5%', flexDirection: 'row', alignSelf: 'center' }}>

                                <Card style={{ width: '30%', alignSelf: 'center', borderRadius: 10, marginBottom: '3%' }}>
                                    <View style={{ flexDirection: 'row', alignSelf: 'center', margin: '5%' }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <View style={{ color: '#ffffff', marginTop: '5%' }}>
                                                <Text style={{ color: '#8D89EF', }}>Premier</Text>
                                            </View>
                                            <View style={{ color: '#ffffff', padding: '5%' }}>
                                                <Text style={{ color: '#00000059', fontSize: 8 }}>Fast Match</Text>
                                            </View>

                                        </View>
                                        <View style={{ alignSelf: 'center', padding: '5%', }}>
                                            <Text>13$</Text>
                                        </View>
                                    </View>
                                </Card>
                                <Card style={{ width: '30%', alignSelf: 'center', borderRadius: 10, marginLeft: '3%', marginBottom: '3%' }}>
                                    <View style={{ flexDirection: 'row', alignSelf: 'center', margin: '5%' }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <View style={{ color: '#ffffff', marginTop: '5%' }}>
                                                <Text style={{ color: '#0B7400FE', }}>Regular</Text>
                                            </View>
                                            <View style={{ color: '#ffffff', padding: '5%' }}>
                                                <Text style={{ color: '#00000059', fontSize: 8 }}>Avrage Time</Text>
                                            </View>

                                        </View>
                                        <View style={{ alignSelf: 'center', padding: '5%', }}>
                                            <Text>10$</Text>
                                        </View>
                                    </View>
                                </Card>

                                <Card style={{ width: '30%', alignSelf: 'center', borderRadius: 10, marginLeft: '3%', marginBottom: '3%' }}>
                                    <View style={{ flexDirection: 'row', alignSelf: 'center', margin: '5%' }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <View style={{ color: '#ffffff', marginTop: '5%' }}>
                                                <Text style={{ color: '#BA6557', }}>Express</Text>
                                            </View>
                                            <View style={{ color: '#ffffff', padding: '5%' }}>
                                                <Text style={{ color: '#00000059', fontSize: 8 }}>No guarantees</Text>
                                            </View>

                                        </View>
                                        <View style={{ alignSelf: 'center', padding: '5%', }}>
                                            <Text>7$</Text>
                                        </View>
                                    </View>
                                </Card>


                            </View>
                        </Card>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate("OrderComplete")}
                            onPress={() => navigation.navigate("MapViewScreen")}
                            style={styles.button}>
                            <View
                                style={styles.buttonTouch}>
                                <View style={styles.buttonView}>
                                    <Text style={styles.buttonText}>Checkout</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Card>
                    {/* <Modal
                   isOpen={this.state.visible} style={styles.modal} position={"center"}
                   ref={"modal"} backdropPressToClose={false}>
                    <View style={styles.modalBackground}>
                        <View style={styles.activityIndicatorWrapper}>
                            <Image source={require('../../Images/Send/Loader.png')} />
                        </View>
                    </View>
                </Modal> */}
                </ScrollView>
                <Modal isOpen={this.state.visible} style={styles.modal} position={"center"}
                    ref={"modal"} backdropPressToClose={false}>
                    <View style={styles.modalBackground}>
                        <View style={styles.activityIndicatorWrapper}>
                            <View style={{backgroundColor:'#ffffff',height:200,width:200,borderRadius:100,alignSelf:'center',marginTop:'50%'}}>
                            <Image source={require('../../Images/Send/Loader.png')} />
                            </View>
                        </View>
                        <TouchableOpacity style={{marginTop:-10}} onPress={()=>this.setState({visible:false})}>
                            <Text style={{color:'#ffffff'}}>Computing price</Text>
                        </TouchableOpacity>
                       
                    </View>
                    
                </Modal>

            </SafeAreaView>
        )
    }

}