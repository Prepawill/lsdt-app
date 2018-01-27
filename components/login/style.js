import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: "center"
    },
    text: {
        color: "#ffffff",
        fontSize: 30,
        opacity: 0.9
    },
    image: {
        width: 66,
        height: 90,
        marginBottom: 16
    },
    textImage: {
        fontSize: 24,
        color: "#ffffff",
        letterSpacing: 2
    },
    formFooter: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: "#ffffff",
        opacity: 0.9,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: "#4c994a",
        paddingVertical: 15,
        borderWidth: 1,
        borderRadius: 9
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "bold",
    },
    modal: {
        flex: 0.2,
        justifyContent: 'space-around',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#111111',

    },
    titleModal: {
        color: "#111111",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    },
    textModal: {
        color: "#111111",
        fontSize: 13,
        textAlign: "center"
    }
});

export default style;