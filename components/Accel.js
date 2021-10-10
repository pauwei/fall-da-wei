import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const Accel = (props) => {
    const [subscription, setSubscription] = useState(null);
    const updateInterval = 100;

    const _setInterval = () => {
        Accelerometer.setUpdateInterval(updateInterval);
    };

    const _subscribe = () => {
        setSubscription(
            Accelerometer.addListener(accelerometerData => {
                props.setAccel(accelerometerData);
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
        <View></View>
    );
}

export default Accel;