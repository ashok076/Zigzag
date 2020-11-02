import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity ,Image } from 'react-native'
import { Title, } from 'react-native-paper'
import Icons from 'react-native-vector-icons/MaterialIcons';

import styles from './PromoDetailsStyles';

export default class PromoDetails extends React.Component {

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
                            <Icons name="arrow-back" color="#5b57ba" size={24} />
                        </TouchableOpacity>
                        <Title style={styles.title}>Promo Detail</Title>
                    </View>
                </View>
                <ScrollView styles={{ flex:1 }}>
                    <View style={{ alignSelf: 'center', marginTop: '3%',width:'94%',margin:'2%' }}>
                        <Image
                            source={require('../../Images/Login/Swiper1.png')}
                          xs
                        />
                    </View>
                    <View style={{ marginTop: '5%', marginLeft: '5%' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Manrope-ExtraLight_Bold' }}>Use boxi, more happy</Text>
                    </View>
                    <View style={{ margin: '5%', marginLeft: '5%' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Manrope-ExtraLight_Regular', }}>Perhaps it’s safe to say that most people want to be happy. They want to enjoy being here in this big, crazy, confusing world. But too many people struggle with being truly happy. They can’t seem to find happiness in life. To them, it is something that doesn’t just come naturally. Fortunately, there are plenty of strategies people can use to create happiness, or at least strive for it. It really depends on one’s desire always to feel joy, to feel gratitude even when it is difficult to find, to have the right people by the side, and an exciting job – or at least a hobby – that they feel good about doing, that somehow brings meaning, direction, and purpose into their lives.</Text>
                       
                    </View>
                    <View style={{ alignSelf: 'flex-end', justifyContent: 'flex-end',}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Homepage")}
                            style={styles.button}>
                            <View
                                style={styles.buttonTouch}>
                                <View style={styles.buttonView}>
                                    <Text style={styles.buttonText}>Use Promo</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

}