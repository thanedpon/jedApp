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
    Platform,
    FlatList,
    Animated,
    AsyncStorage
} from 'react-native';

import { images } from '../../assets/images.js';
import styles from './index.js';
import { Header } from 'react-native-elements';
const { width: WIDTH } = Dimensions.get('window');
// import AsyncStorage from '@react-native-community/async-storage'


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null
        }
    }

    componentDidMount = async () => {
        await AsyncStorage.getItem('Status').then((status) => this.setState({ status: `${status}` }))
    }

    backButton() {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home', { status: this.state.status }) }}>
                <Image source={images.arrow} style={{ height: 15, width: 25 }} />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ backgroundColor: 'gray', flex: 1 }}>
                <Header
                    barStyle="light-content"
                    leftComponent={this.backButton()}
                    containerStyle={{
                        backgroundColor: 'white',
                        justifyContent: 'space-around',
                    }}
                />

                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                </View>

            </View>
        )
    }
}