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
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { Header } from 'react-native-elements';
import { langSearchPPPC } from '../../assets/languages/langSearchPPPC';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import PPPCSectionHeader from '../../components/commonComponent/PPPCHeaderSection/PPPCSectionHeader';

const { width: WIDTH } = Dimensions.get('window');



export default class AddProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null,
            selectedIndex: 0,
            firstname: '',
            lastname: '',
            enable: false,
            initialArr: [
                {
                    id: 1,
                    title: `${langSearchPPPC.th.RequiredInformation}`,
                    firstname: `${langSearchPPPC.th.username}`,
                    enable: false
                },
                {
                    id: 2,
                    title: `${langSearchPPPC.th.RequiredInformation}`,
                    firstname: `${langSearchPPPC.th.lastname}`,
                    enable: false
                }

            ]
        }

    }

    backButton() {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile') }}>
                <Image source={images.arrow} style={{ height: 15, width: 25 }} />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ backgroundColor: '#F9F8F8', flex: 1 }}>
                <Header
                    barStyle="light-content"
                    leftComponent={this.backButton()}
                    centerComponent={{ text: 'เพิ่มลูกค้าบุคคล', style: { color: 'black' } }}
                    containerStyle={{
                        backgroundColor: 'white',
                        justifyContent: 'space-around',
                    }}
                />
                <View style={{ backgroundColor: '#F9F8F8', width: '100%', height: '18%' }}>
                    <Image source={images.photo} style={styles.avatar} />
                </View>

                <SegmentedControlTab
                    values={[langSearchPPPC.th.Required, langSearchPPPC.th.Additional]}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={index => this.setState({ selectedIndex: index })}
                    borderRadius={0}
                    tabsContainerStyle={{ height: 50, borderRadius: 10 }}
                    tabStyle={{ backgroundColor: '#F2F2F2', borderWidth: 0, borderColor: 'transparent' }}
                    activeTabStyle={{ backgroundColor: 'white', borderBottomWidth: 2, borderColor: 'red' }}
                    tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
                    activeTabTextStyle={{ color: 'black' }}
                />
                {this.state.selectedIndex == '0' ?
                    <View>
                        {
                            this.state.initialArr.map((prop, key) => {
                                return (
                                    <View>
                                        <PPPCSectionHeader
                                            key={key}
                                            style={styles.SECTION_HEADER}
                                            name={prop.title}
                                            firstname={prop.firstname}
                                            required
                                            //status= {this.state.enable == true ? { height = {height: hp('40%')}} : null}
                                            onPress={() => this.setState({ enable: !prop.enable })} 
                                            
                                        />

                                        {this.state.enable == true ?
                                            <View />
                                            :
                                            <View style={{ height: '15%' }} />
                                        }
                                    </View>

                                );
                            })
                        }
                        {/* 
                       <PPPCSectionHeader
                            name={`${langSearchPPPC.th.RequiredInformation}`}
                            required
                            testID={'tab'}
                        /> */}

                    </View>
                    :
                    <PPPCSectionHeader name={`${langSearchPPPC.th.SC}`} />
                }
            </View>
        )
    }
}