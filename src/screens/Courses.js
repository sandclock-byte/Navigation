import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Courses(props) {
    const {navigation} = props;
    return (
        <View>
            <Text>Estamos en COURSES</Text>
            <Button title="About" onPress={()=>navigation.navigate('about')}/>
        </View>
    )
}