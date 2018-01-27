import React from 'react';
import ModalGoal from './modal';
import { StyleSheet, Text, View, Image } from 'react-native';
import style from './style';
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
        this.state = { isModalGoalVisible: false, isFontLoaded: false }
    }

    toggleModalGoalVisibility = () => {
        this.setState({ isModalGoalVisible: !this.state.isModalGoalVisible });
    }

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
                            onPress={this.toggleModalGoalVisibility} />
                    </View>
                </View>
                <ModalGoal
                    isVisible={this.state.isModalGoalVisible}
                    onDisapearCallBack={this.toggleModalGoalVisibility} />
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