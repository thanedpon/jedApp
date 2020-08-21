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
import Menu from '../../components/menu/menu';
import { Header } from 'react-native-elements';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import {langSearchPPPC} from '../../assets/languages/langSearchPPPC';

const { width: WIDTH } = Dimensions.get('window');
let dataPersonal;
let dataPostpect;




export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null,
            selectedIndex: 0,
            DATA: [
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    firstname: 'สมชาย',
                    surname: 'ทองดี',
                    nationalId: 'PP20853',
                    contact: '099888767',
                    status: 'PS'
                },
                {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    firstname: 'สมหญิง',
                    surname: 'ทองดี',
                    nationalId: 'PP20854',
                    contact: '099888007',
                    status: 'PS'
                },
                {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    firstname: 'สมพงษ์',
                    surname: 'ทองดี',
                    nationalId: 'PP20855',
                    contact: '099888700',
                    status: 'PP'
                },
                {
                    id: '58694a0f-3da1-471f-bd96-145571e29d76',
                    firstname: 'สม',
                    surname: 'ทองดี',
                    nationalId: 'PP20855',
                    contact: '099888700',
                    status: 'PC'
                },
            ],
        }
    }


    componentDidMount = async () => {
        await AsyncStorage.getItem('Status').then((status) => this.setState({ status: `${status}` }))
        this.checkdata();   
    }



    checkdata() {
        dataPersonal =  this.state.DATA.filter(function(item) {
            return item.status == 'PP' || item.status == 'PC';
        });
        dataPostpect = this.state.DATA.filter(function(item){
            return item.status == 'PS'
        });
    }

    backButton() {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home', { status: this.state.status }) }} testID="backToProfile">
                <Image source={images.arrow} style={{ height: 15, width: 25 }} />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    barStyle="light-content"
                    leftComponent={this.backButton()}
                    centerComponent={{ text: langSearchPPPC.th.Search , style: { color: 'black' } }}
                    containerStyle={{
                        backgroundColor: 'white',
                        justifyContent: 'space-around',
                        height: '15%'
                    }}
                    testID={'header'}
                />

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        style={styles.searchBox}
                        placeholder="ค้นหา"
                        testID="search"
                    />
                </View>
                <SegmentedControlTab 
                    tabsContainerStyle={styles.tabContainer}
                    tabStyle={styles.tabStyle}
                    tabTextStyle={styles.tabText}
                    activeTabStyle={styles.activeTab}
                    values={['ทั้งหมด', 'บุคคล', 'มุ่งหวัง']}
                    allowFontScaling={false}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={index => this.setState({ selectedIndex: index })}
                    accessibilityLabels="Tap me!"
                    
                    
                />
                <View style={{ flex: 3, marginTop: '-58%' }}>
                    <FlatList
                        data={this.state.selectedIndex == '1' ? dataPersonal : this.state.selectedIndex == '2' ? dataPostpect : this.state.DATA}
                        keyExtractor={(item) =>item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.item}>
                                    <TouchableOpacity>
                                        <Text style={styles.titletext}>{`${item.firstname} ${item.surname}`}</Text>
                                        <Text style={{ fontSize: 13 }}>{`หมายเลขบุคคล/บริษัท ${item.nationalId}`}</Text>
                                        <Text style={{ fontSize: 13 }}>{`ติดต่อ ${item.contact} `}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }} />
                </View>
                <Menu />
                <TouchableOpacity style={[styles.btnLogin, { left: '-35%', top: '-5%' }]} onPress={() => { this.props.navigation.navigate('AddProfile') }} testID="addPP">
                    <Text style={[styles.titleButton, { alignItems: 'center', justifyContent: 'center' }]} accessibilityLabel="textpp" >เพิ่ม PP ใหม่</Text>
                </TouchableOpacity>

            </View>
        )
    }
}