import React from 'react';
import style from './style';
import Modal from 'react-native-modal';
import RdvList from './rdvList/index';
import Historic from './historic/index';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { List, ListItem, Badge, Button } from 'react-native-elements';
import { connect } from 'react-redux';

const Tab = TabNavigator({
    'RENDEZ-VOUS': {
        screen: RdvList
    },
    'HISTORIQUE': {
        screen: Historic
    }
}, {
        swipeEnabled: true,
        tabBarPosition: "top",
        tabBarOptions: {
            inactiveTintColor: "rgba(60, 60, 60, 1)",
            activeTintColor: "#ffffff",
            tabStyle: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
            },
            labelStyle: {
                fontSize: 16,
                fontWeight: 'bold'
            },
            style: {
                height: 13,
                backgroundColor: "rgba(20, 20, 20, 1)"
            }
        }
    });


class Profil extends React.Component {
    static navigationOptions = {
        title: "Profil",
        header: null,
        tabBarIcon: () => {
            return <Image source={require('../icons/user2.png')} style={{ width: 25, height: 25 }} />

        }
    }

    constructor(props) {
        super(props);
        this.state = { isModalVisible: false, currentRdv: [] }
    }

    _showModalProfil = rdv => {
        this.setState({
            isModalVisible: true,
            currentRdv: rdv
        })
    }

    _deleteCurrentRdv = () => {
        const index = lodash.findIndex(this.props.rdvList, { _id: this.state.currentRdv._id });
        const rdvList = this.props.rdvList;
        rdvList.splice(index, 1);
        fetch(serverPath + '/deleteRdv?id=' + this.state.currentRdv._id, {
            method: 'get'
        }).then(function (response) {
            return response.json();
        }).then(function (obj) {

        });
        this.setState({ rdvList: rdvList, currentRdv: {} })
        this._hideModal();
    }

    _hideModal = () => this.setState({ isModalVisible: false })

    render() {
        _showModalProfil = this._showModalProfil
        return (
            <Image source={require('./image/image6.jpg')} style={style.container}>
                <View style={style.header}>
                    <View style={style.profilPickWrap}>
                        <Image source={require('./image/vegeta.jpg')} style={style.profilPick} />
                    </View>
                    <Text style={style.name}>{this.props.prenom.toUpperCase()}</Text>
                </View>
                <Tab style={style.list} />
                {/* <ScrollView>
                    <List containerStyle={style.list}>
                        {this.props.rdvList.map((rdv) => (
                            <ListItem
                                key={rdv._id}
                                badge={{
                                    element: <Badge value={rdv.activite} containerStyle={{ backgroundColor: "#4c994a", marginTop: 9, marginRight: 10 }} />
                                }}
                                title={rdv.date}
                                titleStyle={{ color: "#ffffff" }}
                                subtitle={rdv.heure}
                                rightIcon={{ name: 'delete' }}
                                onPressRightIcon={() => _showModalProfil(rdv)}
                            />))}
                    </List>
                </ScrollView>
                <Modal
                    isVisible={this.state.isModalVisible} >
                    <View style={style.modal}>
                        <Button
                            small
                            buttonStyle={{ backgroundColor: "#c40000", borderRadius: 12 }}
                            title='SUPPRIMER'
                            fontWeight="bold"
                            onPress={this._deleteCurrentRdv} />
                        <Button
                            small
                            buttonStyle={{ backgroundColor: 'rgba(52, 52, 52, 0)', borderRadius: 12, borderWidth: 3, borderColor: "#ffffff", marginBottom: 20 }}
                            title='RETOUR'
                            textStyle={{ color: "#ffffff" }}
                            fontWeight="bold"
                            onPress={this._hideModal} />
                    </View>
                </Modal> */}
            </Image>
        );
    }
}

const navigationOptions = {
    headerStyle: {
        backgroundColor: "#f2f2f2"
    }
}

function mapStateToProps(state) {
    return { nom: state.nom, prenom: state.prenom, rdvList: state.rdvList }
}

const ProfilRedux = connect(
    mapStateToProps,
    null
)(Profil);

export default StackNavigator({
    Profil: {
        screen: ProfilRedux,
        navigationOptions
    }
})