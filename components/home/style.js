import { StyleSheet } from 'react-native';
// import { Constants } from 'expo';

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        // marginTop:Constants.statusBarHeight
    },
    textContainer: {
        marginTop: 100
    },
    button: {
        marginBottom: 50
    },
    viewGlobal: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.6)'
    },
    text: {
        textAlign: "center",
        backgroundColor: "transparent",
        fontSize: 40,
        color: '#ffffff'
    },
});

export default style;