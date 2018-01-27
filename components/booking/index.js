import React from 'react';
import { StyleSheet, Text, View, Image, Picker, Item, TouchableOpacity } from 'react-native';
import style from './style';
import Sitting from './sitting/index';
import Confirm from './confirm/index';
import { StackNavigator } from 'react-navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button } from "react-native-elements";
import Modal from 'react-native-modal';
import moment from 'moment';
import 'moment/locale/fr';
import { connect } from 'react-redux'


const timetable = {
    "X-Body1": {
        lundi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        mardi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        mercredi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        jeudi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        vendredi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        samedi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30"],
        dimanche: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30"]
    },
    "X-Body2": {
        lundi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        mardi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        mercredi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        jeudi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        vendredi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        samedi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30"],
        dimanche: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30"]
    },
    "Skill-Run": {
        lundi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        mardi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        mercredi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        jeudi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        vendredi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        samedi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30"],
        dimanche: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30"]
    },
    "Skill-Row": {
        lundi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        mardi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        mercredi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        jeudi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        vendredi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        samedi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30"],
        dimanche: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30"]
    },
    "Climb": {
        lundi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        mardi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        mercredi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        jeudi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        vendredi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"],
        samedi: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30"],
        dimanche: ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30"]
    },
}


class Booking extends React.Component {
    static navigationOptions = {
        title: "Booking",
        header: null,
        tabBarIcon: () => {
            return <Image source={require('../icons/reserve2.png')} style={{ width: 25, height: 25 }} />

        }
    }
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        moment.locale('fr');
        dataTime = ["9H00", "9H30", "10H00", "10H30", "11H00", "11H30", "12H00", "12H30", "13H00", "13H30", "16H00", "16H30", "17H00", "17H30", "18H00", "18H30", "19H00", "19H30", "20H00", "20H30"];
        dataActivity = ["X-Body1", "X-Body2", "Skill-Run", "Skill-Row", "Climb"];
        this.state = { isDateTimePickerVisible: false, selectedActivity: "X-Body1", date: moment().format() };
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this.setState({
            date: moment(date).format()
        });
        this._hideDateTimePicker();
    };





    _showModalActivity = () => this.setState({ isModalVisibleActivity: true })

    _hideModalActivity = () => this.setState({ isModalVisibleActivity: false })

    renderItemActivity() {
        itemsActivity = [];
        for (let item of dataActivity) {
            itemsActivity.push(<Picker.Item key={item} label={item} value={item} />)
        }
        return itemsActivity;
    }

    arr_diff = (a1, a2) => {

        var a = [], diff = [];

        for (var i = 0; i < a1.length; i++) {
            a[a1[i]] = true;
        }

        for (var i = 0; i < a2.length; i++) {
            if (a[a2[i]]) {
                delete a[a2[i]];
            } else {
                a[a2[i]] = true;
            }
        }

        for (var k in a) {
            diff.push(k);
        }

        return diff;
    }

    handleSubmit = (event) => {
        const self = this;
        //changement de date//
        const newDate = moment(self.state.date).format('dddd Do MMMM YYYY');
        fetch(serverPath + '/timetable?date=' + newDate + '&activite=' + this.state.selectedActivity, {
            method: 'get'
        }).then(function (response) {
            return response.json();
        }).then(function (timetableUnavaible) {
            var newTimetable = timetable[self.state.selectedActivity][moment(newDate, 'dddd', 'fr').format('dddd')];
            var hours = [];
            timetableUnavaible.map(function (obj) {
                hours.push(obj.heure);
            });
            var dataTime = self.arr_diff(hours, newTimetable);
            self.props.handleSubmitRedux(
                self.state.date,
                dataTime,
                self.state.selectedActivity)
        });
        this.props.navigation.navigate('Sitting')
    }


    render() {
        return (
            <Image source={require('./image/image5.jpg')} style={style.image}>
                <View style={style.container}>
                    <View style={style.viewText}>
                        <Text style={style.text}>A QUAND NOTRE PROCHAIN</Text>
                        <Text style={style.text}> ENTRAINEMENT ?</Text>
                    </View>
                    <View>
                        <TouchableOpacity >
                            <Button
                                small
                                underlayColor="#4c994a"
                                buttonStyle={{ backgroundColor: "rgba(30, 30, 30, 0.6)", borderWidth: 1.5, borderColor: "#ffffff", borderRadius: 12 }}
                                title={moment(this.state.date).format('dddd Do MMMM YYYY')}
                                fontWeight="bold"
                                onPress={this._showDateTimePicker}
                            />
                        </TouchableOpacity>
                    </View>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />
                    <View>
                        <Button
                            small
                            underlayColor="#4c994a"
                            buttonStyle={{ backgroundColor: "rgba(30, 30, 30, 0.6)", borderWidth: 1.5, borderColor: "#ffffff", borderRadius: 12 }}
                            title={this.state.selectedActivity}
                            fontWeight="bold"
                            onPress={this._showModalActivity}
                        />
                    </View>
                    <Modal isVisible={this.state.isModalVisibleActivity}>
                        <View style={style.modal}>
                            <Text style={style.textModal}>CHOISIS TON ACTIVITE</Text>
                            <Picker selectedValue={this.state.selectedActivity} onValueChange={(value) => this.setState({ selectedActivity: value })}>
                                {this.renderItemActivity()}
                            </Picker>
                            <View style={style.button}>
                                <Button
                                    buttonStyle={{ backgroundColor: "#4c994a", borderRadius: 12 }}
                                    title="CONFIRMER"
                                    fontWeight="bold"
                                    onPress={this._hideModalActivity}
                                />
                            </View>
                        </View>
                    </Modal>
                    <View>
                        <Button
                            small
                            buttonStyle={{ backgroundColor: "#4c994a", borderRadius: 12 }}
                            title="CONTINUER"
                            fontWeight="bold"
                            style={{
                                shadowColor: "#111111",
                                shadowOpacity: 0.5,
                                shadowOffset: { height: 10 },
                            }}
                            onPress={this.handleSubmit}
                        />
                    </View>
                </View>
            </Image>
        );
    }
}

const navigationOptions = {
    headerStyle: {
        backgroundColor: "#f2f2f2"
    },
}


function mapDispatchToProps(dispatch) {
    return {

        handleSubmitRedux: function (date, time, activity) {
            dispatch({ type: 'Booking', date, time, activity })
        }
    }
}

const BookingRedux = connect(
    null,
    mapDispatchToProps
)(Booking);


export default StackNavigator({
    Booking: {
        screen: BookingRedux,
        navigationOptions
    },
    Sitting: {
        screen: Sitting
    },
    Confirm: {
        screen: Confirm
    }
})
