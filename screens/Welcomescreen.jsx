import React from 'react';
import {
    View,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';

export default function WelcomeScreen({ props, navigation }) {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#f2f1ec'
        }}>
            <View style={{ flex: 1, justifyContent: 'center', marginTop: '-15%', }}>
                <Text style={{ color: '#9f9e99', fontSize: 25, textAlign: 'center', }}>Swipe <Text style={{ color: '#d94332', }}>right</Text> to like and <Text style={{ color: '#4a4947' }}>left</Text> to pass</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/image/logo.png')}

                />
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                flex: 1,
            }}>

                <TouchableOpacity
                    style={{
                        elevation: 8,
                        backgroundColor: "#d34531",
                        borderRadius: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 12,
                        marginBottom: '10%',
                        width: '80%',
                        height: '20%',
                    }}
                    onPress={() => navigation.navigate("Registrasion", { username: "Alvin" })}
                >
                    <Text style={{
                        color: '#fff7fd',
                        fontSize: 16,
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}>Continue with phone number</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
