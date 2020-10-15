import React from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, FlatList } from 'react-native';
import { Title, Card } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './IndboxStyles';

const ldata = [{ id: 1, image: require('../../Images/Chat/user.png'), name: 'Ashok', message: 'Hi', dt: '12/20' },
{ id: 2, image: require('../../Images/Chat/user1.png'), name: 'Sandip', message: 'Hello', dt: 'Toady' },
{ id: 3, image: require('../../Images/Chat/user2.png'), name: 'Sumit', message: 'How are you', dt: 'Today' },
{ id: 4, image: require('../../Images/Chat/user3.png'), name: 'Niral', message: 'Busy', dt: 'Today' },
{ id: 5, image: require('../../Images/Chat/user4.png'), name: 'Yash', message: 'Mark', dt: 'Today' },
{ id: 6, image: require('../../Images/Chat/user2.png'), name: 'Kumar', message: ':)', dt: 'Today' }]

export default class Indboxpage extends React.Component {

    initialState = {
        delVisible: true
    }

    constructor(props) {
        super(props);
        this.state = {
            ...this.initialState
        }
    }

    renderMessage(item) {
        console.log(item.item.id)
        return (
            <View style={{ flex: 1, backgroundColor: '#fafafa', borderRadius: 30, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, width: '100%' }}>
                <View style={{ margin: '5%' }} />
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ width: '20%', }}>
                        <Image source={item.item.image}
                            style={{
                                width: 50,
                                height: 50,
                                alignSelf: 'center',

                            }} />
                    </View>
                    <View style={{ marginLeft: '4%', width: '60%' }}>
                        <View style={{ marginTop: '2%' }}>
                            <Text style={{ fontFamily: 'Manrope-ExtraLight_Regular', fontSize: 16 }}>{item.item.name}</Text>
                        </View>
                        <View style={{ marginTop: '3%' }}>
                            <Text style={{ fontFamily: 'Manrope-ExtraLight_Regular', fontSize: 14 }}>{item.item.message}</Text>
                        </View>
                    </View>
                    <View style={{ width: '20%', alignSelf: 'center' }}>
                        <Text>{item.item.dt}</Text>
                    </View>

                </View>
                <View style={{ width: '80%', alignSelf: 'center', borderWidth: 1, marginTop: '5%', borderColor: '#00000014' }} />
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#5B57BA' }}>
                <StatusBar backgroundColor="#5B57BA" />
                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <View>
                            <Title style={styles.title}>Inbox</Title>
                        </View>

                    </View>
                    <View>
                        <MaterialCommunityIcons
                            name="dots-vertical"
                            style={{ fontSize: 22, color: '#ffffff' }}
                        />
                    </View>
                </View>

                <View style={{ flex: 1, backgroundColor: '#fafafa', borderRadius: 30, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, width: '100%' }}>
                    <View style={{ margin: '5%' }}>
                        <Text style={{ fontFamily: 'Manrope-ExtraLight_Bold', fontSize: 14 }}>Your Chat</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: '10%', width: '100%' }}>
                        <View style={{ width: '20%', }}>
                            <Image source={require('../../Images/Chat/user.png')}
                                style={{
                                    width: 50,
                                    height: 50,
                                    alignSelf: 'center',

                                }} />
                        </View>
                        <View style={{ marginLeft: '4%', width: '60%' }}>
                            <View style={{ marginTop: '2%' }}>
                                <Text style={{ fontFamily: 'Manrope-ExtraLight_Regular', fontSize: 16 }}>Mark Duei</Text>
                            </View>
                            <View style={{ marginTop: '3%' }}>
                                <Text style={{ fontFamily: 'Manrope-ExtraLight_Regular', fontSize: 14 }}>Your package will arrive soon…</Text>
                            </View>
                        </View>
                        {this.state.delVisible == false ?
                            <View style={{ width: '20%', alignSelf: 'center' }}>
                                <Text>Today</Text>
                            </View>
                            :
                            <View style={{ width: '10%', alignSelf: 'center', }}>
                                <View style={{ width: '80%', backgroundColor: '#393690', padding: '5%' }}>
                                    <MaterialCommunityIcons
                                        name="delete-outline"
                                        style={{ fontSize: 22, color: '#ffffff' }}
                                    />
                                </View>
                            </View>
                        }
                          <View style={{ width: '80%', alignSelf: 'center', borderWidth: 1, marginTop: '5%', borderColor: '#00000014' }} />
                   
                </View>
                <FlatList
                        data={ldata}
                        renderItem={(item) => this.renderMessage(item)}
                        keyExtractor={(id) => id.toString()}
                    />


                </View>
            </SafeAreaView>
        )
    }
}