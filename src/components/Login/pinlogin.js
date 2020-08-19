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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { CheckBox } from 'react-native-elements';
import styles from './index.js';
import bgisuzu from '../../assets/image/Isuzu.png';

import Home from '../Home/home';

const { width: WIDTH, height } = Dimensions.get('window')

export default class PinLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinenable: false
        }
    }

    handleOnPress (){
        this.setState({ pinenable: !this.state.pinenable });
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={[styles.sectionPin, { marginTop: WIDTH - 300 }]}>
                <Text style={styles.headerPin}> ยืนยันรหัสพิน </Text>

                <TouchableOpacity style={[styles.btnLogin, { marginTop: WIDTH - WIDTH / 2 }]}>
                    <Text style={[styles.title, { marginTop: 1, justifyContent: 'center' }]} onPress={() => this.handleOnPress()}>กลับไปหน้าเข้าสู่ระบบเข้าสู่ระบบ</Text>
                </TouchableOpacity>
            </View>
        )
    }
}