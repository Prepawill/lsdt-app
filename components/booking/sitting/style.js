import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
    },
    header: {
        flex: 0.3,
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
    viewText: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    text: {
        color: "#ffffff",
        fontSize: 18,
        backgroundColor: "transparent"
    },
    list: {
        backgroundColor: 'rgba(52, 52, 52, 0.9)',
        marginTop: 0,
    },
    modal: {
        flex: 0.4,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        height: 340,
        justifyContent: "space-around"
    },
    activity: {
        margin: 10,
        fontSize: 34,
        textAlign: "center",
    },
    date: {
        margin: 20,
        fontSize: 18,
        textAlign: "center",
        justifyContent: 'center',
    }
});

export default style;