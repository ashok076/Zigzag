import React from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather'
import { Card, Title } from 'react-native-paper'

import styles from './BoxipayStyles'

const ldata = [{ id: 1, image: "corner-right-up", name: 'Boxi Express Delivery', message: '$10.00', dt: '2d' },
{ id: 2, image: "corner-right-down", name: 'Top-up from CitiBank', message: '$100.00', dt: '3d' },
{ id: 3, image: "corner-right-up", name: 'Boxi Same-day Delivery', message: '$12.00', dt: '5d' },
{ id: 4, image: "corner-right-up", name: 'Boxi Regular Delivery', message: '$5.00', dt: '2w' },
]


export default class Notification extends React.Component {

    initialState = {

    }
    constructor(props) {
        super(props)
        this.state = {
            ...this.initialState
        }
    }

    renderMessage(item) {
        console.log(item.item.name)
        return (
            <View>
                <View style={styles.rootInner}>
                    <View style={{ width: '20%' }}>
                        <Feather
                            name={item.item.image}
                            style={{ color: '#5B57BA', alignSelf:'center',fontSize: 25, }}
                        />
                    </View>
                    <View style={styles.middleView}>
                        <View style={styles.middleInnerView}>
                            <Text style={styles.titleName}>{item.item.name}</Text>
                        </View>
                        <View style={styles.middleInnerView}>
                            <Text style={styles.titleDes}>{item.item.message} </Text>
                        </View>
                    </View>
                    <View style={styles.dtView}>
                        <Text style={{ alignSelf: 'center', color: '#00000059' }}>{item.item.dt}</Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => navigation.goBack()}>
                            <Icons name="arrow-back" color="#5b57ba" size={24} />
                        </TouchableOpacity>
                        <Title style={styles.title}>Boxipay</Title>
                    </View>
                </View>

                <ScrollView style={{ backgroundColor: '#00000014', }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly' }}>
                        <Card style={{ marginTop: '10%', width: '90%', alignSelf: 'center', borderRadius: 10, marginBottom: '3%' }}>
                            <View style={{ flexDirection: 'row', margin: '5%', justifyContent: 'space-between', width: '90%' }}>
                                <View style={{ flexDirection: 'column', alignSelf: 'flex-start', width: '50%' }}>
                                    <View style={{ flexDirection: 'row', marginLeft: '5%' }}>
                                        <View style={{ color: '#ffffff', marginTop: '5%' ,alignSelf:'center'}}>
                                            <Image source ={require('../../Images/Bottom/Boxipay.png')} style={{height:10,width:10 }} />
                                        </View>
                                        <View style={{ color: '#ffffff', marginTop: '5%' ,marginLeft:'5%'}}>
                                            <Text style={{ color: '#5B57BA', fontSize: 12 }}>Boxipay</Text>
                                        </View>
                                    </View>
                                    <View style={{ color: '#ffffff', padding: '5%' }}>
                                        <Text style={{ color: '#464646', fontSize: 18 }}>$249.00</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%',marginTop:'2%' }}>
                                    {/* <View style={{ flexDirection: 'row' }}> */}
                                    <View>
                                        <View style={{ alignSelf: "center",  }}>
                                            <Feather
                                                name="plus-circle"
                                                style={{ color: '#5B57BA', fontSize: 35 }}
                                            />
                                        </View>
                                        <View style={{ alignSelf: "center", marginTop: '3%' }}>
                                            <Text style={{ color: '#5B57BA' }}>Top Up</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={{ alignSelf: "center", marginTop: '2%' }}>
                                            <Feather
                                                name="corner-up-right"
                                                style={{ color: '#5B57BA', fontSize: 35, }}
                                            />
                                        </View>
                                        <View style={{ alignSelf: "center", marginTop: '3%' }}>
                                            <Text style={{ color: '#5B57BA' }}>Transfer</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Card>
                    </View>
                    <View style={{ flex: 1, }}>
                        <View style={{ marginTop: '5%', marginLeft: '8%' }}>
                            <Text>Latest Transaction</Text>
                        </View>
                        <View style={styles.flatList}>
                            <FlatList
                                data={ldata}
                                renderItem={(item) => this.renderMessage(item)}
                                keyExtractor={(id) => id.toString()}
                            />
                        </View>
                    </View>
                </ScrollView>

                {/* <FlatList
                        data={ldata}
                        renderItem={(item) => this.renderMessage(item)}
                        keyExtractor={(id) => id.toString()}
                    /> */}
            </SafeAreaView>
        )
    }

}