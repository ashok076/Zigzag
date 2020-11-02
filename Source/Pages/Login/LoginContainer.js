
import React from 'react'
import {Image ,View,Text ,StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper'
import styles from './Loginstyles'

const swiper = [{ id: 1, iamge: require('../../Images/Login/Swiper.png') },
{ id: 2, iamge: require('../../Images/Login/Swiper1.png') },
{ id: 3, iamge: require('../../Images/Login/Swiper2.png') }]

const RenderSwiper = () =>{
    return(
        <View
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop:'10%'
        }}>
        {/* <FlatList
            data={swiper}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(id) => id.toString()}
            renderItem={() => this.imageRender()}
        /> */}
        <Swiper
            style={styles.wrapper}
            height={240}
            onMomentumScrollEnd={(e, state, context) =>
                console.log('index:', state.index)
            }
            dot={
                <View
                    style={{
                        backgroundColor: 'rgba(0,0,0,.2)',
                        width: 5,
                        height: 5,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3,
                    }}
                />
            }
            activeDot={
                <View
                    style={{
                        backgroundColor: '#5B57BA',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3
                    }}
                />
            }
            paginationStyle={{
                bottom: -55,
                left: null,
                right: '50%',

            }}
            loop
        >
            <View
                style={styles.slide}

            >
                <Image
                    resizeMode="stretch"
                    style={styles.image}
                    source={require('../../Images/Login/Swiper.png')}
                />
              
            </View>
            <View
                style={styles.slide}
            >
                <Image
                    resizeMode="stretch"
                    style={styles.image}
                    source={require('../../Images/Login/Swiper1.png')}
                />
            </View>
            <View
                style={styles.slide}
                title={
                    // <View style={{width:'100%',alignSelf:'center',}}>
                    <Text>Bring Worlds Toghtger</Text>
                // </View> 
                  }
            >
                <Image
                    resizeMode="stretch"
                    style={styles.image}
                    source={require('../../Images/Login/Swiper2.png')}
                />
            </View>


        </Swiper>

        <View style={{width:'90%',alignSelf:'center'}}>
            <Text>We believe that a connected world is a better world, and that belief guides everything we do.</Text>
        </View>
    </View>

    )
}

export default RenderSwiper ;