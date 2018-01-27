import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import style from './style'


const Loading = () => (
    <View style={{ flex: 1, backgroundColor: "#111111", justifyContent: "center", alignItems: "center" }}>
        <Image
            source={require('./image/Logolsdt.png')}
            style={{
                width: 60,
                height: 85
            }} />
    </View>
);


export default Loading;
