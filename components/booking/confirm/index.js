import React from 'react';
import style from './style';
import Booking from '../index';
import Modal from 'react-native-modal';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button, ListItem, List, Badge, Icon } from 'react-native-elements';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Font } from 'expo';


class Confirm extends React.Component {
    static navigationOptions = {
        headerTintColor: "#4c994a",
        header: null,
        tabBarIcon: () => {
            return <Image source={require('../image/reserve2.png')} style={{ width: 25, height: 26 }} />

        }
    }
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        Font.loadAsync({
            'Anton': require('./fonts/Anton-Regular.ttf'),
            'Poppins': require('./fonts/Poppins-Regular.ttf'),
        }).then(() => {
            this.setState({
                isFontLoaded: true
            });
        })
    };


    handleSubmit = () => {
        var self = this;
        if (self.props.rdvList.length <= 4) {
            fetch(serverPath + '/saveRdv?date=' + this.props.confirmDate + '&heure=' + this.props.confirmHour + '&activite=' + this.props.confirmActivity + '&prenom=' + this.props.prenom + "&nom=" + this.props.nom + "&telephone=" + this.props.telephone, {
                method: 'get'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                self.props.onSubmit(data);

            });
            this.setState({ isModalVisibleConfirm: true })
        } else {
            this.setState({ isModalVisibleNotConfirm: true })
        }
    }

    _hideModalConfirm = () => {
        this.setState({ isModalVisibleConfirm: false })
        setTimeout(() => {
            this.props.navigation.goBack(null);
            this.props.navigation.goBack(null);
        }, 10);
    };

    _hideModalNotConfirm = () => {
        this.setState({ isModalVisibleConfirm: false })
        setTimeout(() => {
            this.props.navigation.goBack(null);
            this.props.navigation.goBack(null);
        }, 10);
    };


    render() {
        const { goBack } = this.props.navigation;
        const { isFontLoaded } = this.state;
        return (
            <Image source={require('../image/image5.jpg')} style={style.image}>
                <View style={style.header}>
                    <TouchableOpacity
                        style={style.backBooking}
                        onPress={() => goBack()}>
                        <Image source={require('../image/left-arrow.png')} style={{ width: 25, height: 25 }} />
                        <Text style={style.TextBackBooking}>Retour</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.container}>
                    <View style={style.viewText}>
                        <Text style={style.text}>SOUHAITES-TU </Text>
                        <Text style={style.text}>PRENDRE </Text>
                        <Text style={style.text}>RENDEZ-VOUS </Text>
                        <Text style={style.text}> LE: </Text>
                        <Text style={[style.value, isFontLoaded && { fontFamily: 'Anton' }]}>{this.props.confirmDate}</Text>
                        <Text style={[style.value, isFontLoaded && { fontFamily: 'Anton' }]}> à {this.props.confirmHour}</Text>
                        <Text style={[style.value, isFontLoaded && { fontFamily: 'Anton' }]}>pour {this.props.confirmActivity}</Text>
                    </View>
                    <View>
                        <Button
                            small
                            buttonStyle={{ backgroundColor: "#4c994a", borderRadius: 16 }}
                            title='RESERVER'
                            fontWeight="bold"
                            textStyle={{
                                fontSize: 18
                            }}
                            style={{
                                shadowColor: "#111111",
                                shadowOpacity: 0.5,
                                shadowOffset: { height: 10 },
                            }}
                            onPress={this.handleSubmit}
                        />
                    </View>
                    <Modal isVisible={this.state.isModalVisibleConfirm}>
                        <View style={style.modal}>
                            <View>
                                <Text style={style.valueModal}>FELICITATION !</Text>
                            </View>
                            <View>
                                <Text style={[style.textModal, isFontLoaded && { fontFamily: 'Poppins' }]}>Ton rendez-vous à bien</Text>
                                <Text style={[style.textModal, isFontLoaded && { fontFamily: 'Poppins' }]}>été enregistré.</Text>
                                <Text style={[style.textModal, isFontLoaded && { fontFamily: 'Poppins' }]}>Tu peux consulter tout</Text>
                                <Text style={[style.textModal, isFontLoaded && { fontFamily: 'Poppins' }]}>tes rendez-vous dans</Text>
                                <Text style={[style.textModal, isFontLoaded && { fontFamily: 'Poppins' }]}>ton profil </Text>
                            </View>
                            <View>
                                <Button
                                    small
                                    buttonStyle={{ backgroundColor: "#4c994a", borderRadius: 12 }}
                                    title='OK'
                                    fontWeight="bold"
                                    onPress={this._hideModalConfirm}
                                />
                            </View>
                        </View>
                    </Modal>
                    <Modal isVisible={this.state.isModalVisibleNotConfirm}>
                        <View style={style.modal}>
                            <View>
                                <Text style={style.valueModal}>ATTENTION !</Text>
                            </View>
                            <View>
                                <Text style={[style.textModal, isFontLoaded && { fontFamily: 'Poppins' }]}>Tu ne peux reserver</Text>
                                <Text style={[style.textModal, isFontLoaded && { fontFamily: 'Poppins' }]}>que 5 rendez-vous </Text>
                                <Text style={[style.textModal, isFontLoaded && { fontFamily: 'Poppins' }]}>maximum à la fois</Text>
                            </View>
                            <View>
                                <Button
                                    small
                                    buttonStyle={{ backgroundColor: "#c40000", borderRadius: 12 }}
                                    title='RETOUR'
                                    fontWeight="bold"
                                    onPress={this._hideModalNotConfirm}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>
            </Image >
        );
    }
}

const navigationOptions = {
    headerStyle: {
        backgroundColor: "#f2f2f2"
    },
}


function mapStateToProps(state) {
    return { confirmDate: state.sittingDate, confirmHour: state.hour, confirmActivity: state.sittingActivity, rdvList: state.rdvList, prenom: state.prenom, nom: state.nom }
}

function mapDispatchToProps(dispatch) {
    return {

        onSubmit: function (rdv) {
            dispatch({ type: 'addRdv', rdv })
        }
    }
}

const ConfirmRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Confirm);

export default ConfirmRedux;