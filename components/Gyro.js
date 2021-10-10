import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';

const Gyro = (props) => {


    const [subscription, setSubscription] = useState(null);
    const updateInterval = 100;

    const _setInterval = () => {
        Gyroscope.setUpdateInterval(updateInterval);
    };

    const _subscribe = () => {
        setSubscription(
            Gyroscope.addListener(gyroscopeData => {
                props.setGyro(gyroscopeData);
            })
        );
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        _subscribe();
        _setInterval();
        return () => _unsubscribe();
    }, []);

    return(
        <View>
        </View>
    );
}

export default Gyro;