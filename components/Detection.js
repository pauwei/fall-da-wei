import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const Detection = (props) => {
    const { gyroBuffer, accelBuffer, setMotion } = props;

    const _detectMotion = () => {
        //Available data
        // gyro.x, gyro.y, gyro.z; accel.x, accel.y, accel.z

        let lastGyro = gyroBuffer[gyroBuffer.length - 1];
        let lastAccel = accelBuffer[accelBuffer.length - 1];


        let gyroMagnitude = Math.sqrt(Math.pow(lastGyro.x, 2) + Math.pow(lastGyro.y, 2) + Math.pow(lastGyro.z, 2));
        let accelMagnitude = Math.sqrt(Math.pow(lastAccel.x, 2) + Math.pow(lastAccel.y, 2) + Math.pow(lastAccel.z, 2));

        if (gyroMagnitude >= 18 || lastAccel.y>=2.5 && gyroMagnitude>=6) {
            setMotion("Falling");
            console.log("Detected Fall, Gyro: " + gyroMagnitude + ", y accel: " + Math.abs(lastAccel.y)+ ", z accel: " + Math.abs(lastAccel.z));
        }

        //console.log("Gyro Magnitude: " + gyroMagnitude + ", Accel Magnitude: " + accelMagnitude);


        let minGyro = Math.sqrt(Math.pow(gyroBuffer[0].x, 2) + Math.pow(gyroBuffer[0].y, 2) + Math.pow(gyroBuffer[0].z, 2));
        let maxGyro = minGyro;

        for (let i = 1; i < gyroBuffer.length; i++) {
            let gyroMag = Math.sqrt(Math.pow(gyroBuffer[i].x, 2) + Math.pow(gyroBuffer[i].y, 2) + Math.pow(gyroBuffer[i].z, 2));

            if (gyroMag < minGyro) {
                minGyro = gyroMag;
            }

            if (gyroMag > maxGyro) {
                maxGyro = gyroMag;
            }
        }
        //console.log("Min Gyro: " + minGyro + ", Max Gyro: " + maxGyro);

        let minAccel = Math.sqrt(Math.pow(accelBuffer[0].x, 2) + Math.pow(accelBuffer[0].y, 2) + Math.pow(accelBuffer[0].z, 2));
        let maxAccel = minAccel;

        for (let i = 1; i < accelBuffer.length; i++) {
            let accelMag = Math.sqrt(Math.pow(accelBuffer[i].x, 2) + Math.pow(accelBuffer[i].y, 2) + Math.pow(accelBuffer[i].z, 2));
            if (accelMag < minAccel) {
                minAccel = accelMag;
            }

            if (accelMag > maxAccel) {
                maxAccel = accelMag;
            }
        }
        //console.log("Min Accel: " + minAccel + ", Max Accel: " + minAccel);

        //Write detection logic

        //Set the current motion
        // Sitting, Falling, Walking
        // setMotion("Sitting")
    }

    useEffect(() => {
        _detectMotion();
    }), [gyroBuffer, accelBuffer];

    return(
        <View>
        </View>
    );
}

export default Detection;