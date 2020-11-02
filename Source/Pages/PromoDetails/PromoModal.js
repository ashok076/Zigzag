import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Title, } from 'react-native-paper'
import Icons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './PromoDetailsStyles';

export default class PromoModal extends React.Component {

    initialState = {

    }

    constructor(props) {
        super(props)
        this.state = {
            ...this.initialState,
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                       
                                        <MaterialCommunityIcons
                                            name="close"
                                        />
                                    </TouchableOpacity>
                        <Title style={styles.title}>Promo Detail</Title>
                    </View>
                </View>
                <ScrollView styles={{ flex: 1 }}>
                    <View style={{ alignSelf: 'center', marginTop: '3%', width: '94%', margin: '2%' }}>
                        <Image
                           source={require('../../Images/Home/BannerDiscount.png')}
                        />
                    </View>
                    <View style={{ marginTop: '5%', justifyContent: 'space-between', flexDirection: 'row', marginLeft: '3%', marginRight: '3%' }}>
                        <View>
                            <Text style={{ fontSize: 10, }}>Available until</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 10, }}>10 October 2020</Text>
                        </View>
                    </View>
                    <View style={{ margin: '3%' }}>
                        <Text style={{ fontFamily: 'Manrope-ExtraLight_Regular', fontSize: 14 }}>Perhaps it’s safe to say that most people want to be happy. They want to enjoy being here in this big, crazy, confusing world. But too many people struggle with being truly happy. They can’t seem to find happiness in life. To them, it is something that doesn’t just come naturally. Fortunately, there are plenty of strategies people can use to create happiness, or at least strive for it.</Text>
                    </View>
                   
                </ScrollView>
                <View style={{ alignSelf: 'flex-end', justifyContent: 'flex-end', }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Homepage")}
                            style={styles.button}>
                            <View
                                style={styles.buttonTouch}>
                                <View style={styles.buttonView}>
                                    <Text style={styles.buttonText}>Claim Promo Voucher</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
            </SafeAreaView>
        )
    }

}