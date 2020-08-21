import { StyleSheet, Dimensions, Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { colors } from '../../../assets/styles/colors';
const { width: WIDTH } = Dimensions.get('window')

export default StyleSheet.create({
    CONTAINER: {
        flex: 1,
        width: wp('100%')
    },
    TouchableClose: {
        width: wp('100%'),
        height: hp('5%'),
        backgroundColor: colors.white249
    },
    TouchableOpen: {
        width: wp('100%'),
        height: hp('35%'),
        backgroundColor: colors.white249,
    },
    SECTION_CONTENT: {
        alignItems: 'center',
        backgroundColor: 'gray',
        flex: 1, 
        flexDirection: 'row',
    },
    SECTION_IMAGE: {
        width: wp('6.5%'), 
        height: hp('3%'), 
        marginRight: 5, 
        top: '0%', 
        left: 10
    },
    SECTION_IMAGE_OPEN: {
        width: wp('6.5%'), 
        height: hp('3%'), 
        marginRight: 5, 
        top: '-32%', 
        left: 10
    },
    SECTION_TEXT: {
        top: '0%',
        left: 15
    },
    TEXT: {
        color: colors.backgroundf9
    },
    ICON: {
        left: WIDTH / 2 + 60
    },
    SECTION_TEXTINPUT: {
        fontSize: 13,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: wp('90%'),
        height: '15%',
        top: '-2%'
    },
    SECTION_NAME: {
        fontSize: 13,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: wp('40%'),
        height: '15%',
        top: '-2%'
    },
    BOX_BETWEEN : {
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        width: wp('40%'),
        height: '25%',
        top: '-4%'
    },
    SPACE_INPUT: {
        top: '5%',
        right: '132%',
        width: '20%',
        flexDirection: 'row'
    }


})