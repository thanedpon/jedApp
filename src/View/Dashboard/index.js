import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
    btnLogin: {
        width: WIDTH - 100,
        height: 45,
        borderRadius: 5,
        paddingLeft: 15,
        backgroundColor: '#FD0401',
        // marginTop: WIDTH /2,
        justifyContent: 'center',
        marginHorizontal: WIDTH / 2,
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
})