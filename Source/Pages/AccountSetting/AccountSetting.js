import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './AccountSettingStyles'
import { ScrollView } from 'react-native-gesture-handler';


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
            <SafeAreaView style={styles.containerView}>
                <StatusBar backgroundColor="#5B57BA" />
                <View style={styles.titleView}>
                    <View style={styles.rowObject}>
                        <View style={styles.titleHeader}>
                            <Title style={styles.title}>Account</Title>
                        </View>
                    </View>
                   
                </View>
                <View style={styles.Logout}>
                        <Text style={styles.Righttitle}>Logout</Text>
                    </View>
                <ScrollView style={styles.scrollView}>
                <View style={styles.body}>
                    <View style={styles.bodyInnerView}>
                        <Image
                            source={require('../../Images/Account/Profile.png')}
                        />
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate("EditProfile")}>
                            <Text style={styles.titleName}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyInnerViewDetail}>
                        <View>
                            <Text style={styles.profileName}>Kitani Sarasvati</Text>
                        </View>
                        <View style={styles.flagView}>
                            <Image
                                source={require('../../Images/Account/Account/flag.png')}
                            />
                            <Image
                                source={require('../../Images/Account/Account/flag.png')}
                            />
                            <Image
                                source={require('../../Images/Account/Account/flag.png')}
                            />
                            <Image
                                source={require('../../Images/Account/Account/flag.png')}
                            />
                            <Image
                                source={require('../../Images/Account/Account/flag1.png')}
                            />
                        </View>
                    </View>

                    <View style={styles.settingView}>
                        <View style={styles.firstBlock}>
                            <TouchableOpacity onPress ={()=>this.props.navigation.navigate("Setting")} style={styles.settingRot}>
                                <View style={styles.IconStyles}>
                                    <SimpleLineIcons
                                        name="settings"
                                        style={styles.Icon}
                                    />
                                </View>
                                <View style={styles.TextViewDetails}>
                                    <Text style={styles.textViewStyles}>Account Settings</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.settingRot}>
                                <View style={styles.IconStyles}>
                                    <Feather
                                        name="lock"
                                        style={styles.Icon}
                                    />
                                </View>
                                <View style={styles.TextViewDetails}>
                                    <Text style={styles.textViewStyles}>Security</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.firstBlock}>
                            <TouchableOpacity style={styles.settingRot}>
                                <View style={styles.IconStyles}>
                                    <SimpleLineIcons
                                        name="location-pin"
                                        style={styles.Icon}
                                    />
                                </View>
                                <View style={styles.TextViewDetails}>
                                    <Text style={styles.textViewStyles}>My Address</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.settingRot} onPress={()=>this.props.navigation.navigate("FAQ")}>
                                <View style={styles.IconStyles}>
                                    <Feather
                                        name="headphones"
                                        style={styles.Icon}
                                    />
                                </View>
                                <View style={styles.TextViewDetails}>
                                    <Text style={styles.textViewStyles}>Help & FAQ</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottomView}>
                            <View style={styles.bottomInnerView}>
                                <View style={styles.IconStyles}>
                                    <Text style={styles.setPackageView}>16</Text>
                                </View>
                                <View style={styles.TextViewDetails}>
                                    <Text style={styles.textViewStylesBotom}>Send Package</Text>
                                </View>
                            </View>
                            <View style={styles.bottomInnerView}>
                                <View style={styles.IconStyles}>
                                    <Text style={styles.setPackageView}>5</Text>
                                </View>
                                <View style={styles.TextViewDetails}>
                                    <Text style={styles.textViewStylesBotom}>Receive Package</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>


        )
    }
}