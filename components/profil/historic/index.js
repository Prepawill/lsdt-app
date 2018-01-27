import React from 'react';
import style from './style';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { List, ListItem, Badge, Button } from 'react-native-elements';
import { connect } from 'react-redux';

const rdvHistoric = [
    {
        _id: 0,
        activite: "X-Body1",
        date: "Lundi 18 Janvier 2018",
        heure: "9H00"
    }, {
        _id: 1,
        activite: "X-Body2",
        date: "Mardi 09 decembre 2017",
        heure: "9H00"
    }, {
        _id: 2,
        activite: "X-Body1",
        date: "Mercredi 27 octobre 2017",
        heure: "9H00"
    }, {
        _id: 3,
        activite: "Climb",
        date: "Jeudi 18 septembre 2017",
        heure: "9H00"
    }, {
        _id: 4,
        activite: "Skill-Run",
        date: "Vendredi 18 aout 2017",
        heure: "9H00"
    },
    {
        _id: 5,
        activite: "Skill-Run",
        date: "Vendredi 18 aout 2017",
        heure: "9H00"
    },
]

class Historic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <List containerStyle={style.list}>
                        {rdvHistoric.map((rdv) => (
                            <ListItem
                                key={rdv._id}
                                badge={{
                                    element: <Badge value={rdv.activite} containerStyle={{ backgroundColor: 'rgba(67, 133, 66, 0.4)',borderWidth: 1.5, borderColor: "#ffffff", marginTop: 9, marginRight: 10 }} />
                                }}
                                title={rdv.date}
                                titleStyle={{ color: "#ffffff" }}
                                subtitle={rdv.heure}
                                subtitleStyle={{ color: "#ffffff" }}
                                rightIcon={{ name: 'done' }}
                            />))}
                    </List>
                    <List containerStyle={style.listMissing}>
                        <ListItem
                            badge={{
                                element: <Badge value={"X-Body1"} containerStyle={{ backgroundColor: 'rgba(206, 0, 41, 0.4)',borderWidth: 1.5, borderColor: "#ffffff", marginTop: 9, marginRight: 10 }} />
                            }}
                            title="Mardi 09 Juin 2017"
                            titleStyle={{ color: "#ffffff" }}
                            subtitle={"10H00"}
                            subtitleStyle={{ color: "#ffffff" }}
                            rightIcon={{ name: 'clear' }}
                        />
                    </List>
                </ScrollView>
            </View>
        );
    }
}


export default Historic