import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export default function Registrasionscreen({ route, navigation }) {
    const { username } = route.params;
    return (
        <View style={{ backgroundColor: '#c73715', marginTop: 25 }}>
            <View style={{ flexDirection: 'row', padding: 10 }} >
                <View>
                    <Text style={{ color: 'white', fontSize: 18 }}>Phone Number</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>

            </View>
        </View>

    );
}