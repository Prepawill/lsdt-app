import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import style from './style';
import { Button } from "react-native-elements";
import Home from '../home/index';
import Booking from '../booking';
import Profil from '../profil';
import Modal from 'react-native-modal';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Font } from 'expo';

const Tabs = TabNavigator({
    Home: {
        screen: Home
    },
    Booking: {
        screen: Booking
    },
    Profil: {
        screen: Profil
    }
}, {
        // swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            inactiveTintColor: "#111111",
            activeTintColor: "#ffffff",
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: "#111111",
                borderTopWidth: 1,
                borderColor: '#111111',
            }
        }
    });

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loginConfirm: this.props.loginConfirm, isModalVisibleError: false, isFontLoaded: false, email: '', password: '' };
    }


    handleChangeEmail = (text) => { this.setState({ email: text }) }

    handleChangePassword = (text) => (this.setState({ password: text }))

    handleSubmit = (event) => {
        var appObj = this;

        fetch(serverPath + '/login?email=' + this.state.email + '&password=' + this.state.password, {
            method: 'get'
        }).then(function (response) {
            return response.json();
        }).then(function (objUser) {

            if (objUser.isLog == true) {
                var myComponent = this;
                fetch(serverPath + '/rdv?prenom=' + objUser.prenom + "&nom=" + objUser.nom, {
                    method: 'get'
                }).then(function (response) {
                    return response.json();
                }).then(function (objRdv) {
                    appObj.setState({ loginConfirm: true, rdvList: objRdv });
                    appObj.props.onIncreaseSubmit(objUser, objRdv);
                });

            } else {
                if (objUser.error == 'invalide') {
                    appObj.setState({ isModalVisibleError: true })
                } else {
                    if (objUser.error == 'vide') {
                        appObj.setState({ isModalVisibleError: true })
                    }
                }
            }
        });
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    _showModalError = () => this.setState({ isModalVisibleError: true })

    _hideModalError = () => this.setState({ isModalVisibleError: false })

    componentDidMount() {
        Font.loadAsync({
            'Gotham': require('./fonts/GothamBookRegular.ttf'),
        }).then(() => {
            this.setState({
                isFontLoaded: true
            });
        })
    };

    render() {
        const { isFontLoaded } = this.state;
        const redirection = '';
        if (this.state.loginConfirm == true) {
            return <Tabs />;
        }
        return (
            <KeyboardAvoidingView behavior="padding" style={style.container}>
                <View style={style.logoContainer} >
                    <Image style={style.image} source={require('./image/Logolsdt.png')} />
                    <Text style={[style.textImage, isFontLoaded && { fontFamily: 'Gotham' }]}>LA SALLE DU TEMPS</Text>
                </View>
                <View style={style.formContainer}>
                    <View style={style.formFooter}>
                        <TextInput
                            onChangeText={this.handleChangeEmail}
                            placeholder="Email"
                            placeholderTextColor="#afafaf"
                            style={style.input}
                        />
                        <TextInput
                            onChangeText={this.handleChangePassword}
                            placeholder="Password"
                            placeholderTextColor="#afafaf"
                            secureTextEntry
                            style={style.input}
                        />
                        <TouchableOpacity
                            style={style.buttonContainer}
                            onPress={this.handleSubmit}
                        >
                            <Text style={style.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <Modal isVisible={this.state.isModalVisibleError}>
                        <View style={style.modal}>
                            <View>
                                <Text style={style.titleModal}>Mot de passe ou Email incorrect</Text>
                                <Text style={style.textModal}>Le mot de passe ou email que vous avez indiqué est incorrect. Veuillez réessayer</Text>
                            </View>
                            <View style={style.button}>
                                <Button
                                    buttonStyle={{ backgroundColor: "#4c994a", borderRadius: 12 }}
                                    title="OK"
                                    textStyle={{ color: "#ffffff" }}
                                    fontWeight="bold"
                                    onPress={this._hideModalError}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>
            </KeyboardAvoidingView>
        );
    }
}



export default Login;




