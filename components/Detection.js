
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const Detection = (props) => {
    const { gyro, accel, setMotion } = props;

    const _detectMotion = () => {
        //Available data
        // gyro.x, gyro.y, gyro.z; accel.x, accel.y, accel.z

        //Write detection logic

        //Set the current motion
        // Sitting, Falling, Walking
        // setMotion("Sitting")
    }

    return(
        <View>
        </View>
    );
}

export default Detection;