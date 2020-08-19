import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')

export default StyleSheet.create({
    // height: Platform.OS === 'ios' ? 200 : 100,
    background: {
        flex: 1,
        width: 10,
        height: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        ...Platform.select({
          ios: {
            backgroundColor: 'white'
          },
          android: {
            backgroundColor: 'green'
          },
          default: {
            // other platforms, web for example
            backgroundColor: 'blue'
          }
        }),
        alignItems: 'center'
    },
      loginbox: {
        shadowColor: 'grey',
        paddingTop: 40,
        paddingBottom: 40,
        ...Platform.select({
            ios: {
                marginTop: WIDTH - WIDTH/2
            },
            android: {
                marginTop: WIDTH - 120
            }
        })
    },
    pic: {
        height: 30,
        width: WIDTH/2,
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        // backgroundColor: '#c5c9cc79',
        width: WIDTH - 100,
        paddingVertical: 15,
        paddingHorizontal: 10,
        // borderRadius: 15,
        marginHorizontal: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    input: {
        borderRadius: 15,
        fontSize: 13,
        paddingLeft: 15,
        color: 'black',
    },
    btnLogin: {
        width: WIDTH - 100,
        height: 45,
        borderRadius: 5,
        paddingLeft: 15,
        backgroundColor: '#FD0401',
        marginTop: 35,
        justifyContent: 'center',
        marginHorizontal: 25,
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
    },

})