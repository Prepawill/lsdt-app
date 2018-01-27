import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     width: null,
    //     alignSelf: 'stretch',
    //     backgroundColor: 'rgba(52, 52, 52, 0.6)',
    // },
    // header: {
    //     flex: 0.1,
    //     backgroundColor: 'rgba(52, 52, 52, 0.6)',
    // },
    // backBooking: {
    //     margin: 45,
    //     flexDirection: 'row',
    //     marginLeft: 10
    // },
    // TextBackBooking: {
    //     color: "#4c994a",
    //     fontSize: 20,
    //     fontWeight: 'bold',
    //     marginLeft: 4
    // },
    // textContainer: {
    //     marginTop: 100
    // },
    // button: {
    //     marginBottom: 50
    // },
    // viewGlobal: {
    //     flex: 1,
    //     justifyContent: "space-around",
    //     alignItems: "center",
    //     backgroundColor: 'rgba(52, 52, 52, 0.6)'
    // },
    // text: {
    //     textAlign: "center",
    //     backgroundColor: "transparent",
    //     fontSize: 22,
    //     color: '#ffffff'
    // },
    // value: {
    //     textAlign: "center",
    //     backgroundColor: "transparent",
    //     fontSize: 31,
    //     color: '#ffffff',
    //     fontWeight: 'bold'
    // }
    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    header: {
        flex: 0.1,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
    },
    backBooking: {
        margin: 45,
        flexDirection: 'row',
        marginLeft: 10
    },
    TextBackBooking: {
        color: "#4c994a",
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 4
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(52, 52, 52, 0.6)',

    }, viewText: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    },
    value: {
        color: "#ffffff",
        fontSize: 36,
        fontWeight: 'bold'
    },
    text: {
        color: "#ffffff",
        fontSize: 25,
    },
    modal: {
        flex: 0.5,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(245, 245, 245,1)',
        borderRadius: 20
    },
    valueModal: {
        textAlign: "center",
        color: "#111111",
        fontSize: 38,
        fontWeight: 'bold'
    },
    textModal: {
        textAlign: "center",
        color: "#111111",
        fontSize: 21,
    },
});

export default style;