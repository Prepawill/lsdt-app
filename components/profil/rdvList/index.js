import React from 'react';
import Modal from 'react-native-modal';
import style from './style';
import lodash from 'lodash';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { List, ListItem, Badge, Button } from 'react-native-elements';
import { connect } from 'react-redux';


class RdvList extends React.Component {
    static navigationOptions = {
        title: "RENDEZ-VOUS"
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
            <View>
                <List containerStyle={style.list}>
                    {this.props.rdvList.map((rdv) => (
                        <ListItem
                            key={rdv._id}
                            badge={{
                                element: <Badge value={rdv.activite} containerStyle={{ backgroundColor: 'rgba(52, 52, 52, 0.6)',borderWidth: 1.5, borderColor: "#ffffff", marginTop: 9, marginRight: 10 }} />
                            }}
                            title={rdv.date}
                            titleStyle={{ color: "#ffffff", fontWeight: 'bold' }}
                            subtitle={rdv.heure}
                            rightIcon={{ name: 'delete' }}
                            onPressRightIcon={() => _showModalProfil(rdv)}
                        />))}
                </List>
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
                </Modal>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { nom: state.nom, prenom: state.prenom, rdvList: state.rdvList }
}

const RdvListRedux = connect(
    mapStateToProps,
    null
)(RdvList);

export default RdvListRedux;