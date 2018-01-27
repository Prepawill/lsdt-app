import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import style from './style';
import { Font } from 'expo';


export default class ModalGoal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objectif: { objectif: 'REMERCIER 3 CHOSES QUI SE SONT PRODUITES HIER', succes: "Selon les dernières études américaines en psychologie, La gratitude participerait activement à la bonne santé émotionnelle. Elle renforce les liens sociaux, affaiblit les émotions négatives et procure un sentiment de bien-être. Une bonne santé émotionnelle permet d'atteindre vos objectifs plus rapidement." },
            isFontLoaded: false
        };
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
        const isVisible = this.props.isVisible;
        const onDisapearCallBack = this.props.onDisapearCallBack;

        return (
            <Modal
                isVisible={isVisible}>
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
                                onPress={() => onDisapearCallBack()} />
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        );
    }
}
