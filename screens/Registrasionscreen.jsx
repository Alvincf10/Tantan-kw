import React from 'react';
import {
    View,
    Text,
    StatusBar,
    TextInput,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { SearchableDropdown } from 'react-native-searchable-dropdown';

export default function Registrasionscreen({ route, navigation }) {
    const { username } = route.params;

    const items = [
        //name key is must.It is to show the text in front
        { id: 1, name: 'angellist' },
        { id: 2, name: 'codepen' },
        { id: 3, name: 'envelope' },
    ];

    return (
        <View style={{ flex: 1, marginTop: 25 }}>
            <LinearGradient style={{ width: '100%', height: 30 }} start={[0, 1]} end={[1, 1]} colors={['rgba(197,52,21,1)', "rgba(211,102,19,1)"]}>
                <StatusBar translucent backgroundColor="transparent" />
                <Text style={{ color: 'white', marginLeft: '13%' }} >
                    Phone Number
                        </Text>
            </LinearGradient>

            <View style={{ flexDirection: 'row' }}>



                <TextInput
                    style={{ width: '65%', height: 50, marginTop: 20, marginLeft: '30%', borderBottomWidth: 1, }}
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