import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './LoginOtpStyles'
import Icons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather'
import { Title } from 'react-native-paper'

export default class CreateAccount extends React.Component {

    initalstate = {
      name:''
    }
    constructor(props) {
        super(props);
        this.state = {
            ...this.initalstate
        }
    }


    render() {
        const { navigation } = this.props
        const { seconds } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.titleView}>
                        <View style={styles.rowObject}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icons name="arrow-back" color="#5b57ba" size={24} />
                            </TouchableOpacity>
                            <Title style={styles.title}>Create Account</Title>
                        </View>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text style={styles.CreatecodeText}>Enter your Name</Text>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text style={styles.CreateSubcodeText}>we believe that a connected world is a better world, and that belief guides.</Text>
                    </View>
                    <View style={styles.headerTitle}>
                    <Text style={styles.CreateSubcodeText}>Full Name</Text>
                    </View>
                    
                    <View style={styles.CreateinputRoot}>
                        <View style={styles.CreateinputContainer}>
                            <TextInput
                                value={this.state.name}
                                onChangeText={(text) => this.setState({name:text})}
                                style={styles.CreateotpInput}
                            /> 
                             <Feather
                                        name="check"
                                        style={{ alignSelf: 'center', fontSize: 25,color:"#5B57BA",marginRight:'2%' }}
                                    />
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Homepage")}
                        // onPress={()=>navigation.navigate("RecipientForm")}
                        style={styles.button}>
                        <View
                            style={styles.buttonTouch}>
                            <View style={styles.buttonView}>
                                <Text style={styles.buttonText}>Next</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}