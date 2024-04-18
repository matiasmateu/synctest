import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { View, Text } from 'react-native';
import { fetchUsers } from '../api/fetchUsers'

const HomeScreen = () => {
    const query = useQuery({ queryKey: ['users'], queryFn: fetchUsers })
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen;