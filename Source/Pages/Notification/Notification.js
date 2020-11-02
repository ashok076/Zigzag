import React from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Card, Title } from 'react-native-paper'

import styles from './NotificationStyles'

const ldata = [{ id: 1, image: require('../../Images/Chat/Group.png'), name: 'Promos September', message: 'Give us your feedback while using boxi', dt: '2d' },
{ id: 2, image: require('../../Images/Chat/Bag.png'), name: 'Promos September', message: 'Enjoy boxi with special promos', dt: '3w' },
{ id: 3, image: require('../../Images/Chat/Group.png'), name: 'Package Arrived at checkpoint 1', message: 'You can track your order on Activity', dt: '1w' },
{ id: 4, image: require('../../Images/Chat/Group.png'), name: 'A package is on the way to you', message: '', dt: '2w' },
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
                <Card style={styles.flatList}>
                    <View style={styles.rootInner}>
                        <View style={{ width: '20%', }}>
                            <Image source={item.item.image}
                                style={styles.image} />
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
                            <Text style={{alignSelf:'center',color:'#00000059'}}>{item.item.dt}</Text>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }

    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView>
                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => navigation.goBack()}>
                            <Icons name="arrow-back" color="#5b57ba" size={24} />
                        </TouchableOpacity>
                        <Title style={styles.title}>Notification</Title>
                    </View>
                </View>
                <FlatList
                        data={ldata}
                        renderItem={(item) => this.renderMessage(item)}
                        keyExtractor={(id) => id.toString()}
                    />
            </SafeAreaView>
        )
    }

}