import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Gyro from './components/Gyro';
import Accel from './components/Accel';
import Detection from './components/Detection';


export default function App() {
  const [gyro, setGyro] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [accel, setAccel] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [motion, setMotion] = useState("Sitting");

  useEffect(() => {
    //console.log(gyro.x + ", " + accel);
  }, [gyro, accel]);


  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <Gyro gyro={gyro} setGyro={setGyro}/>  
        <Text style={styles.text}>Gyro</Text>
        <Text style={styles.text}>
          x: {round(gyro.x)} y: {round(gyro.y)} z: {round(gyro.z)}
        </Text>
      </View>

      <View style={styles.container}>
        <Accel accel={accel} setAccel={setAccel}/>
        <Text style={styles.text}>Acceleration</Text>
        <Text style={styles.text}>
          x: {round(accel.x)} y: {round(accel.y)} z: {round(accel.z)}
        </Text>

      </View>

      <View style={styles.container}>
        <Detection gyro={gyro} accel={accel} setMotion={setMotion}/>

      </View>

    </View>
    // <View style={styles.container}>
    //   <Text style={styles.text}>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</Text>
    //   <Text style={styles.text}>
    //     x: {round(x)} y: {round(y)} z: {round(z)}
    //   </Text>
    //   <View style={styles.buttonContainer}>
    //     <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
    //       <Text>{subscription ? 'On' : 'Off'}</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
    //       <Text>Slow</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={_fast} style={styles.button}>
    //       <Text>Fast</Text>
    //     </TouchableOpacity>
    //   </View>

    //   <Text style={styles.text}>Gyroscope:</Text>
    //   <Text style={styles.text}>
    //     x: {round(xa)} y: {round(ya)} z: {round(za)}
    //   </Text>
    //   <View style={styles.buttonContainer}>
    //     <TouchableOpacity onPress={subscription ? _unsubscribeA : _subscribeA} style={styles.button}>
    //       <Text>{subscription ? 'On' : 'Off'}</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={_slowA} style={[styles.button, styles.middleButton]}>
    //       <Text>Slow</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={_fastA} style={styles.button}>
    //       <Text>Fast</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100.0;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});


