import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width: WIDTH } = Dimensions.get('screen')

export default StyleSheet.create({
    // height: Platform.OS === 'ios' ? 200 : 100,
    background: {
        flex: 1,
        width: 15,
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
            backgroundColor: 'white'
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
                marginTop: WIDTH  - 250
            },
            android: {
                marginTop: WIDTH - 270
            }
        })
    },
    image: {
        alignItems: 'center',
        ...Platform.select({
            ios: {
                width: WIDTH/2,
                height: 40,
            },
            android: {
                height: 40,
                width: WIDTH - 150,
            }
        })
    },
    section: {
        flexDirection: 'row',
        //width: WIDTH - 100,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginHorizontal: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        ...Platform.select({
            ios: {
                width: WIDTH - 100,
                height: 40,
            },
            android: {
                height: 40,
                width: WIDTH - 100,
            }
        })
    },
    sectionPin: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                width: WIDTH - 100,
                height: 40,
            },
            android: {
                height: 40,
                width: WIDTH - 100,
            }
        })
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
    checkbox: {
        ...Platform.select({
            ios: {
                right: 70,
                marginTop: 20,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',

            },
            android: {
                marginTop: 20
            }
        })
    },
    headerPin: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        color: 'black',
    },
    backButton: {
        ...Platform.select({
            ios:{
                top: WIDTH - 350,
                marginRight: WIDTH - 60
            },
            android: {
                top:30,
                marginRight: WIDTH - 60
            }
        })
    }

})