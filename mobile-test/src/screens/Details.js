import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native'

const DetailsScreen = () => {
    const route = useRoute();
    const { user } = route.params;
    const { name, interest} = user
    return (
        <View>
            <Text>User Name: {name}</Text>
            <Text>Interests:</Text>
            {
                interest.map((interest) => <Text>{interest}</Text>)
            }
        </View>
    )
}

export default DetailsScreen;