import React from 'react';
import { View, SafeAreaView, StatusBar, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import { Title } from 'react-native-paper'
import Icons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './ChatStyles';
export default class Chat extends React.Component {

    initialState = {

    }

    constructor(props) {
        super(props);
        this.state = {
            ...this.initialState
        }
    }
    componentDidMount() {
        console.log(this.props.name)
    }

    render() {
        const {navigation } =this.props;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#00000014' }}>
                <StatusBar backgroundColor="#5B57BA" />
                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icons name="arrow-back" color="#5b57ba" size={24} />
                        </TouchableOpacity>
                        <Title style={styles.title}>Walt</Title>
                    </View>
                </View>
                <View style={{ flex: 1, margin: '5%' }}>
                    <View style={{ alignSelf: 'flex-start', flexDirection: 'row', width: '80%', }}>
                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginRight: '3%' }}>
                            <Image
                                source={require('../../Images/Chat/user4.png')}
                              style= {{ width: 50,
                                height: 50,
                                alignSelf: 'center',}}
                            />
                        </View>
                        <View style={{ alignSelf: 'center', width: '100%', flexDirection: 'row', backgroundColor: '#ffffff', padding: '5%', justifyContent: 'space-between', borderRadius: 10 }}>
                            <View style={{ width: '80%' }}>
                                <Text>Hello I’ll pickup your package at 11.00 AM</Text>
                            </View>
                            <View style={{ width: '30%', alignContent: 'flex-end' }}>
                                <Text>12:05</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'flex-end', flexDirection: 'row', width: '80%', marginTop: '10%', marginRight: '15%' }}>
                        <View style={{ alignSelf: 'center', width: '100%', flexDirection: 'row', backgroundColor: '#5B57BA', padding: '5%', justifyContent: 'space-between', borderRadius: 10 }}>
                            <View style={{ width: '70%', marginLeft: '3%' }}>
                                <Text style={{ color: '#ffffff' }}>Oke. i waiting for you</Text>
                            </View>
                            <View style={{ width: '30%', alignContent: 'flex-end' }}>
                                <Text style={{ color: '#ffffff' }}>12.05</Text>
                            </View>
                        </View>
                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginLeft: '3%' }}>
                            <Image
                                source={require('../../Images/Chat/user3.png')}
                                style= {{ width: 50,
                                    height: 50,
                                    alignSelf: 'center',}}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ alignSelf: 'flex-end', width: '100%', backgroundColor: '#ffffff', flexDirection: 'row' }}>
                    <View style={{ width: '85%',marginLeft:'3%' }}>
                        <TextInput
                            placeholder="Placeholder"
                        />
                    </View>
                    <View style={{ width: '15%', alignSelf: 'center' }}>
                        <AntDesign name="rightcircle" style={{ color: '#5B57BA', fontSize:30 }} />
                        {/* <View style={{ backgroundColor: '#5B57BA', borderRadius: 30, height: 25, width: 25 }} /> */}
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
