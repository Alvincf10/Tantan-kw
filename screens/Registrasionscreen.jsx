import React from 'react';
import {
    View,
    Text,
    StatusBar,
    TextInput,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function Registrasionscreen({ route, navigation }) {
    const { username } = route.params;

    return (
        <View style={{ flex: 1, marginTop: 25 }}>
            <LinearGradient style={{ width: '100%', height: 40 }} start={[0, 1]} end={[1, 1]} colors={['rgba(197,52,21,1)', "rgba(211,102,19,1)"]}>
                <Text style={{ fontSize: 18, color: 'white', marginLeft: '10%', margin: 5 }} >
                    Phone Number
                </Text>
                <StatusBar translucent Color="transparent" />
            </LinearGradient>

            <View style={{ flexDirection: 'row' }}>

                <TextInput
                    style={{ width: '10%', height: 50, marginTop: 20, marginLeft: '6%', borderBottomWidth: 1, }}
                    placeholder="+62"
                />

                <TextInput
                    style={{ width: '75%', height: 50, marginTop: 20, marginLeft: '10%', borderBottomWidth: 1, borderBottomColor: 'rgba(197,52,21,1)' }}
                    placeholder="Enter Your Number"
                />
            </View>


            <LinearGradient style={{ position: 'absolute', bottom: 0, width: '100%', height: 60 }} start={[0, 1]} end={[1, 1]} colors={['rgba(211, 69, 49, 1)', "rgba(211,69,49,1)"]}>
                <Text style={{ color: 'white', textAlign: 'center', justifyContent: 'center', margin: 20 }}>
                    CONTINUE
                </Text>
            </LinearGradient>
        </View >
    );
}