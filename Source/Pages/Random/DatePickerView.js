import React from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';
import { Title, Card } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { DatePicker } from 'native-base';
import styles from './DateStyles';


export default class DatePickerView extends React.Component {

    initialState = {
        delVisible: true,
        chosenDate:''
    }

    constructor(props) {
        super(props);
        this.state = {
            ...this.initialState
        }
    }

    setDate(newDate) {
        console.log(newDate)
        this.setState({ chosenDate: newDate });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <StatusBar backgroundColor="#5B57BA" />
                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <TouchableOpacity style={{ width: '20%', alignSelf: 'center' }} onPress={() => navigation.goBack()}>
                            <Icons name="arrow-back" color="#5b57ba" size={24} />
                        </TouchableOpacity>
                        <View style={{ width: '50%', marginLeft: '20%' }}>
                            <Title style={styles.title}>Select Date</Title>
                        </View>
                        <View>
                            <Entypo
                                name="map"
                                style={{ fontSize: 22, color: '#000000', width: '100%' }}
                            />
                        </View>
                    </View>
                    </View>
                    <View style={{ flexDirection: 'row', width:'90%',alignSelf:"center"}}>
                        <View style={{alignSelf:"center"}}>
                        <Feather name="clock" style={{ alignSelf: "center", fontSize: 20, color: '#5B57BA' ,color:"#5b57ba"}} />
                        </View>

                        <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date()}
                            maximumDate={new Date(2050, 12, 31)}
                            locale={"en"}
                            formatChosenDate={date => { return moment(date).format('MM/DD/YYYY'); }}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Mon, Sep 7th 2020"
                            textStyle={{ color: "#000000" }}
                            placeHolderTextStyle={{ color: "#000000" }}
                            onDateChange={this.setDate}
                            disabled={false}
                        />

                    </View>
                    <View style={{ alignSelf: 'flex-end', justifyContent: 'flex-end', marginTop: '80%' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("CreatetLogin")}
                        style={styles.button}>
                        <View
                            style={styles.buttonTouch}>
                            <View style={styles.buttonView}>
                                <Text style={styles.buttonText}>Confirm</Text>
                            </View>
                        </View>
                    </TouchableOpacity> 
                    </View>

            </SafeAreaView>
        )
    }
}