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
    Platform
} from 'react-native';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { CheckBox } from 'react-native-elements';
import styles from './index.js';
import bgisuzu from '../../assets/image/Isuzu.png';
import PinLogin from './pinlogin';

const { width: WIDTH, height } = Dimensions.get('window')

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            enable: false,
            checked: this.props.checked,
            pinenable: this.props.pinenable
        }
    }

    handleOnPress = () => this.setState({ checked: !this.state.checked })

    render() {
        return (
            <View style={styles.container}>
                { this.state.enable == true ?
                <View style={styles.backButton}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}>
                        <FontAwesome name="arrow-left" color="red" size={20}  />
                    </TouchableOpacity>
                </View>
                : false}

                <View style={[styles.loginbox]}>
                    <Image source={bgisuzu} style={styles.image} />
                </View>
                
                {this.state.enable == false ?
                    <View>
                        <View style={[styles.section, { marginTop: 20 }]}>
                            <TextInput
                                placeholder="ชื่อผู้ใช้งาน"
                                style={styles.textInput}
                                onChangeText={(username) => this.setState({ username })}
                                value={this.state.username}
                            />
                            <Text>{this.state.pinenable}</Text>
                        </View>
                        <View style={[styles.section, { marginTop: 20 }]}>
                            <TextInput
                                placeholder="รหัสผ่าน"
                                style={styles.textInput}
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password}
                                secureTextEntry
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


                        <TouchableOpacity style={[styles.btnLogin, { marginTop: 20 }]}>
                            <Text style={[styles.title, { marginTop: 1, justifyContent: 'center' }]} onPress={() => this.setState({ enable: !this.state.enable })} >เข้าสู่ระบบ</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <PinLogin navigation={this.props.navigation} />
                }

            </View>
        )
    }
}