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
    CheckBox,
    Alert,
    Platform
} from 'react-native';


import styles from './index.js';
import bgisuzu from '../../assets/image/Isuzu.png';


const { width: WIDTH } = Dimensions.get('window')

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            checked: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.loginbox]}>
                    <Image source={bgisuzu} style={styles.pic} />
                </View>



                <TouchableOpacity style={[styles.btnLogin, { marginTop: 40 }]}>
                            <Text style={[styles.title, { marginTop: 1, justifyContent: 'center' }]} >เข้าสู่ระบบ</Text>
                </TouchableOpacity>

            </View>
        )
    }
}