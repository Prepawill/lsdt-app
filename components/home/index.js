import React from 'react';
import Modal from 'react-native-modal';
import style from './style';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { Font } from 'expo';

class Home extends React.Component {
    static navigationOptions = {
        title: "Home",
        header: null,
        tabBarIcon: () => {
            return <Image source={require('../icons/home2.png')} style={{ width: 25, height: 27 }} />

        }
    }

    constructor(props) {
        super(props);
        this.state = { 
            isFontLoaded: false,
            objectif: { objectif: 'REMERCIER 3 CHOSES QUI SE SONT PRODUITES HIER', succes: "Selon les dernières études américaines en psychologie, La gratitude participerait activement à la bonne santé émotionnelle. Elle renforce les liens sociaux, affaiblit les émotions négatives et procure un sentiment de bien-être. Une bonne santé émotionnelle permet d'atteindre vos objectifs plus rapidement." },
        }
    }

    _showModalObectif = () => this.setState({ isModalVisibleObjectif: true })

    _hideModalObjectif = () => this.setState({ isModalVisibleObjectif: false })

    componentDidMount() {
        Font.loadAsync({
            'Anton': require('./assets/fonts/Anton-Regular.ttf'),
            'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
        }).then(() => {
            this.setState({
                isFontLoaded: true
            });
        })
    };

    render() {
        const { isFontLoaded } = this.state;
        return (
            <Image source={require('./image/image5.jpg')} style={style.container}>
                <View style={style.viewGlobal}>
                    <View style={style.textContainer}>
                        <Text style={style.text}>DECOUVRE TON</Text>
                        <Text style={style.text}>OBJECTIF</Text>
                        <Text style={style.text}>DU JOUR</Text>
                    </View>
                    <View style={style.button}>
                        <Button
                            small
                            buttonStyle={{ backgroundColor: "#4c994a", borderRadius: 16 }}
                            title='OBJECTIF DU JOUR'
                            fontWeight="bold"
                            textStyle={{
                                fontSize: 18
                            }}
                            style={{
                                shadowColor: "#111111",
                                shadowOpacity: 0.5,
                                shadowOffset: { height: 10 },
                            }}
                            onPress={this._showModalObectif} />
                    </View>
                </View>
                <Modal isVisible={this.state.isModalVisibleObjectif}>
                <View style={style.modal}>
                    <ScrollView>
                        <View>
                            <Text style={style.objectif}>{this.state.objectif.objectif}</Text>
                        </View>
                        <View>
                            <Text style={[style.succes, isFontLoaded && { fontFamily: 'Poppins' }]}>{this.state.objectif.succes}</Text>
                        </View>
                        <View>
                            <Button
                                small
                                buttonStyle={{ backgroundColor: "#4c994a", borderRadius: 12 }}
                                title='OK'
                                onPress={this._hideModalObjectif} />
                        </View>
                    </ScrollView>
                </View>
            </Modal>
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

const HomeRedux = connect(
    mapStateToProps,
    null
)(Home);


export default StackNavigator({
    Home: {
        screen: HomeRedux,
        navigationOptions
    },
})