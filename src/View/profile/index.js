import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')


export default StyleSheet.create({
    btnLogin: {
        width: WIDTH - 50,
        height: 45,
        borderRadius: 5,
        paddingLeft: 15,
        backgroundColor: '#FD0401',
        marginLeft: '42%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        alignSelf: 'center',
        color: "black",
        ...Platform.select({
            ios: {
                fontSize: 19,
                left: WIDTH - WIDTH,
                top: -WIDTH / 20
            },
            android: {
                fontSize: 19,
                left: WIDTH - 360,
                top: -WIDTH / 7
            }
        })
    },
    titleButton: {
        color: 'white',
        fontWeight: 'bold',
    },
    searchBox: {
        paddingLeft: 10,
        width: WIDTH,
        height: 40,
        backgroundColor: 'white',
        marginTop: '-40%'
    },
    /********** SegmentControlTab **************/
    tabContainer: {
        backgroundColor: 'transparent',
        width: '80%',
        flexDirection: 'row',
        marginTop: '25%',
        marginLeft: '10%',
    },
    tabStyle: {
        top: '-75%',
        backgroundColor: 'white',
        borderColor: '#F9F8F8',
        paddingVertical: 5
    },
    tabText: {
        color: 'gray'
    },
    activeTab: {
        backgroundColor: 'red'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    titletext: {
        fontSize: 20,
    },
    avatar: {
        //borderRadius: 20,
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: '5%',
        width: '28%'
    },
    SECTION_HEADER: {
        marginTop: 10,
        shadowColor: 'rgba(227, 229, 231, 0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 0,
        shadowOpacity: 1,
        elevation: 2,
        paddingHorizontal: 15,
    }
})