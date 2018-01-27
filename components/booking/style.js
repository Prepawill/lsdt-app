import { StyleSheet } from 'react-native';
// import { Constants } from 'expo';

const style = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(52, 52, 52, 0.6)',

    }, viewText: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    text: {
        color: "#ffffff",
        fontSize: 25,
    },
    modal: {
        flex: 0.5,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(245, 245, 245,0.9)',
        borderRadius: 20
    },
    textModal: {
        color: "#111111",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center"
    }
});

export default style;