import React from 'react';
import style from './style';
import Modal from 'react-native-modal';
import moment from 'moment';
import 'moment/locale/fr';
import Confirm from '../confirm/index';
import Booking from '../index';
import { StackNavigator } from 'react-navigation';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button, ListItem, List, Badge, Icon } from 'react-native-elements';
import { Font } from 'expo';
import { connect } from 'react-redux';

const sitting = [{}];

class Sitting extends React.Component {
    static navigationOptions = {
        headerTintColor: "#4c994a",
        header: null,
        tabBarIcon: () => {
            return <Image source={require('../image/reserve2.png')} style={{ width: 25, height: 26 }} />

        }
    }
    constructor(props) {
        super(props);
        this.state = { sitting, isFontLoaded: false, currentHour: [] }
    }

    addDay = (event) => {
        const date = moment(this.props.sittingDate).add(1, 'days').format('dddd Do MMMM YYYY');
    }

    subtractDay = (event) => {
        const date = moment(this.props.sittingDate).subtract(1, 'days').format('dddd Do MMMM YYYY');
    }

    navigateConfirm = hour => {
        console.log("hour", hour);
        this.props.navigateConfirmRedux(
            moment(this.props.sittingDate).format('dddd Do MMMM YYYY'),
            hour,
            this.props.sittingActivity)
        this.props.navigation.navigate('Confirm')
    }

    render() {
        const { goBack } = this.props.navigation;
        navigateConfirm = this.navigateConfirm
        return (
            <Image source={require('../image/image5.jpg')} style={style.container}>
                <View style={style.header}>
                    <TouchableOpacity
                        style={style.backBooking}
                        onPress={() => goBack()}>
                        <Image source={require('../image/left-arrow.png')} style={{ width: 25, height: 25 }} />
                        <Text style={style.TextBackBooking}>Retour</Text>
                    </TouchableOpacity>
                    <View style={style.viewText}>
                        <Button
                            small
                            buttonStyle={{ flex: 1, backgroundColor: "rgba(30, 30, 30, 0.6)", borderWidth: 1, borderColor: "#ffffff", borderRadius: 12 }}
                            fontWeight="bold"
                            icon={{ name: 'arrow-back', size: 20 }}
                            style={{
                                shadowColor: "#111111",
                                shadowOpacity: 0.5,
                                shadowOffset: { height: 10 },
                            }}
                            onPress={this.subtractDay}
                        />
                        <Text style={style.text}>{moment(this.props.sittingDate).format('dddd Do MMMM YYYY')} </Text>
                        <Button
                            small
                            buttonStyle={{ flex: 1, backgroundColor: "rgba(30, 30, 30, 0.6)", borderWidth: 1.5, borderColor: "#ffffff", borderRadius: 12 }}
                            fontWeight="bold"
                            iconRight={{ name: 'arrow-forward', size: 20 }}
                            style={{
                                shadowColor: "#111111",
                                shadowOpacity: 0.5,
                                shadowOffset: { height: 10 }
                            }}
                            onPress={this.addDay}
                        />
                    </View>
                </View>
                <ScrollView>
                    <List containerStyle={style.list}>
                        {this.props.sittingTime.map((hour, i) => (
                            <ListItem
                                key={i}
                                title={hour}
                                titleStyle={{ color: "#ffffff" }}
                                subtitle={this.props.sittingActivity}
                                badge={{
                                    element: <Badge value="reserver" containerStyle={{ backgroundColor: "#4c994a", marginTop: 9 }} />
                                }}
                                onPress={() => navigateConfirm(hour)}
                            />))}
                    </List>
                </ScrollView>
            </Image>
        );
    }
}

const navigationOptions = {
    headerStyle: {
        backgroundColor: "#f2f2f2"
    },
}


function mapStateToProps(state) {
    return { sittingDate: state.date, sittingTime: state.time, sittingActivity: state.activity, prenom: state.prenom, nom: state.nom, rdvList: state.rdvList }
}

function mapDispatchToProps(dispatch) {
    return {
        navigateConfirmRedux: function (sittingDate, hour, sittingActivity) {
            dispatch({ type: 'Sitting', sittingDate, hour, sittingActivity })
        }
    }
}

const SittingRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sitting);

export default SittingRedux;
