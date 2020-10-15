import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image ,TouchableOpacity} from 'react-native';
import { Title } from 'react-native-paper'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './AccountSettingStyles'


export default class AccountSetting extends React.Component {

    initialState = {

    }
    constructor(props) {
        super(props);
        this.state = {
            ...this.initialState
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#5B57BA' }}>
                <StatusBar backgroundColor="#5B57BA" />
                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <View style={styles.titleHeader}>
                            <Title style={styles.title}>Account</Title>
                        </View>

                    </View>
                    <View style={styles.Logout}>
                        <Text style={styles.Righttitle}>logout</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={{ alignSelf: 'center', marginTop: '5%', margin: '5%' }}>
                        <Image
                            source={require('../../Images/Account/Profile.png')}
                        />
                        <TouchableOpacity>
                            <Text style={{ color: '#5B57BA' }}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignSelf: 'center', }}>
                        <Text style={{ color: '#5B57BA', fontSize: 18, fontFamily: 'Manrope-ExtraLight_Bold' }}>Kitani Sarasvati</Text>
                    </View>

                    <View style={{ width: '100%',marginTop:'5%' }}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '90%', alignSelf: 'center',  }}>
                            <TouchableOpacity style={{ width: '50%', alignSelf: 'center',borderWidth:1 , borderColor:'#E3E3E3' }}>
                                <View style={{ alignSelf: 'center',margin:'20%', }}>
                                  <SimpleLineIcons 
                                  name="settings"
                                  style={{fontSize:55,color:'#5B57BA'}}
                                  />
                                </View>
                                <View style={{ alignSelf: 'center', }}>
                                    <Text>Acoount Settings</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '50%', alignSelf: 'center' ,borderWidth:1, borderColor:'#E3E3E3' }}>
                                <View style={{ alignSelf: 'center' ,padding:'20%',}}>
                                    <Feather
                                        name="lock"
                                        style={{fontSize:55,color:'#5B57BA'}}
                                    />
                                </View>
                                <View style={{ alignSelf: 'center' }}>
                                    <Text>Security</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '90%', alignSelf: 'center',  }}>
                            <View style={{ width: '50%', alignSelf: 'center',borderWidth:1 , borderColor:'#E3E3E3' }}>
                                <View style={{ alignSelf: 'center' ,margin:'20%'}}>
                                <SimpleLineIcons 
                                  name="location-pin"
                                  style={{fontSize:55,color:'#5B57BA'}}
                                  />
                                </View>
                                <View style={{ alignSelf: 'center' }}>
                                    <Text>My Address</Text>
                                </View>
                            </View>
                            <View style={{ width: '50%', alignSelf: 'center',borderWidth:1 , borderColor:'#E3E3E3' }}>
                                <View style={{ alignSelf: 'center' ,margin:'20%'}}>
                                <Feather
                                        name="headphones"
                                        style={{fontSize:55,color:'#5B57BA'}}
                                    />
                                </View>
                                <View style={{ alignSelf: 'center' }}>
                                    <Text>Help & FAQ</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>


        )
    }
}