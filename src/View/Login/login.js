import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Alert,
    Platform,
    AsyncStorage
} from 'react-native';

import { images } from '../../assets/images.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';
import styles from './index.js';
import PinLogin from './pinlogin';



//const { width: WIDTH, height } = Dimensions.get('window')

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            enable: false,
            checked: this.props.checked,
            pinenable: this.props.pinenable,
            status : 'SM'
        }
    }

    handleOnPress() {this.setState({ checked: !this.state.checked })}

    checkAuth = async () => {
        if (this.state.username == 'Sm01' && this.state.password == '123456'){
            await AsyncStorage.setItem('Status', `${this.state.status}`);
            this.props.navigation.navigate('Home', { status: this.state.status })
        } else {
            this.setState({ enable: !this.state.enable })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.enable == true ?
                    <View style={styles.backButton}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <Image source={images.arrow} style={{height: 15, width: 25}} />
                        </TouchableOpacity>
                    </View>
                    : false}

                <View style={[styles.loginbox]}>
                    <Image source={images.isuzu} style={styles.image} />
                </View>

                {this.state.enable == false ?
                    <View>
                        <View style={[styles.section, { marginTop: 20 }]}>
                            <TextInput
                                placeholder="ชื่อผู้ใช้งาน"
                                style={styles.input}
                                onChangeText={(username) => this.setState({ username })}
                                value={this.state.username}
                                testID= "username"
                            />
                           
                        </View>
                        <View style={[styles.section, { marginTop: 20 }]}>
                            <TextInput
                                placeholder="รหัสผ่าน"
                                style={[styles.input,{left:10}]}
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password}
                                secureTextEntry
                                testID= "password"
                            />
                        </View>
                        <View style={[styles.checkbox]}>
                            <CheckBox
                                title="จดจำฉันไว้ในระบบ"
                                checked={this.state.checked}
                                onPress={this.handleOnPress}
                                containerStyle={{
                                    width: 200,
                                    backgroundColor: 'rgba(0,0,0,0)',
                                    borderColor: 'rgba(0,0,0,0)'
                                }}
                            />
                        </View>


                        <TouchableOpacity style={[styles.btnLogin, { marginTop: 20 }]} testID="Login">
                            <Text style={[styles.title, { marginTop: 1, justifyContent: 'center' }]} onPress={() => this.checkAuth()} >เข้าสู่ระบบ</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <PinLogin navigation={this.props.navigation}/>
                }

            </View>
        )
    }
}