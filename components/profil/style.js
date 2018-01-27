import { StyleSheet } from 'react-native';
// import { Constants } from 'expo';

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        //  marginTop:Constants.statusBarHeight
    },
    header: {
        flex: 0.6,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        padding: 20,

    },
    profilPickWrap: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: 'rgba(242, 242, 242, 0.5)',
        borderWidth: 8,
        marginTop: 60
    },
    profilPick: {
        flex: 1,
        width: null,
        borderRadius: 81,
        borderColor: "#ffffff",
        borderWidth: 1
    },
    name: {
        marginTop: 15,
        marginBottom: 30,
        fontSize: 20,
        color: "#ffffff",
        backgroundColor: "transparent"
    },
    list: {
        backgroundColor: 'rgba(52, 52, 52, 0.9)',
        marginTop: 0
    },
    modal: {
        flex: 0.2,
        justifyContent: 'space-around',
        backgroundColor: 'transparent',
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