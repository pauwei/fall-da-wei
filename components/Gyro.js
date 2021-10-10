import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';

const Gyro = (props) => {
    // const [data, setData] = useState({
    //     x: 0,
    //     y: 0,
    //     z: 0,
    // });

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

    //const { x, y, z } = data;
    return(
        <View>
            {/* <Text>
                x: {x} y: {y} z: {z}
            </Text> */}
        </View>
    );
}

export default Gyro;
// const [subscription, setSubscription] = useState(null);
// const [subscriptionA, setSubscriptionA] = useState(null);

// const _slow = () => {
//   Accelerometer.setUpdateInterval(1000);
// };

// const _slowA = () => {
//   Gyroscope.setUpdateInterval(1000);
// };


// const _fast = () => {
//   Accelerometer.setUpdateInterval(16);
// };

// const _fastA = () => {
//   Gyroscope.setUpdateInterval(16);
// };


// const _subscribe = () => {
//   setSubscription(
//     Accelerometer.addListener(accelerometerData => {
//       setData(accelerometerData);
//     })
//   );
// };

// const _subscribeA = () => {
//   setSubscriptionA(
//     Gyroscope.addListener(gyroscopeData => {
//       setDataA(gyroscopeData);
//     })
//   );
// };

// const _unsubscribe = () => {
//   subscription && subscription.remove();
//   setSubscription(null);
// };

// const _unsubscribeA = () => {
//   subscriptionA && subscriptionA.remove();
//   setSubscriptionA(null);
// };


// useEffect(() => {
//   _subscribe();
//   return () => _unsubscribe();
// }, []);

// useEffect(() => {
//   _subscribeA();
//   return () => _unsubscribeA();
// }, []);

// const { x, y, z } = data;
// const { xa, ya, za } = dataA;

// return (
//   <View style={styles.container}>
//     <Text style={styles.text}>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</Text>
//     <Text style={styles.text}>
//       x: {round(x)} y: {round(y)} z: {round(z)}
//     </Text>
//     <View style={styles.buttonContainer}>
//       <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
//         <Text>{subscription ? 'On' : 'Off'}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
//         <Text>Slow</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={_fast} style={styles.button}>
//         <Text>Fast</Text>
//       </TouchableOpacity>
//     </View>

//     <Text style={styles.text}>Gyroscope:</Text>
//     <Text style={styles.text}>
//       x: {round(xa)} y: {round(ya)} z: {round(za)}
//     </Text>
//     <View style={styles.buttonContainer}>
//       <TouchableOpacity onPress={subscription ? _unsubscribeA : _subscribeA} style={styles.button}>
//         <Text>{subscription ? 'On' : 'Off'}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={_slowA} style={[styles.button, styles.middleButton]}>
//         <Text>Slow</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={_fastA} style={styles.button}>
//         <Text>Fast</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// );
// }

// function round(n) {
// if (!n) {
//   return 0;
// }
// return Math.floor(n * 100) / 100;
// }

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   justifyContent: 'center',
//   paddingHorizontal: 10,
// },
// text: {
//   textAlign: 'center',
// },
// buttonContainer: {
//   flexDirection: 'row',
//   alignItems: 'stretch',
//   marginTop: 15,
// },
// button: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: '#eee',
//   padding: 10,
// },
// middleButton: {
//   borderLeftWidth: 1,
//   borderRightWidth: 1,
//   borderColor: '#ccc',
// },
// });