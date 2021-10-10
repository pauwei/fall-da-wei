import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Gyro from './components/Gyro';
import Accel from './components/Accel';
import Detection from './components/Detection';
//amazing poopy pants


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

  const [gyroBuffer, setGyroBuffer] = useState([{x: 0, y: 0, z: 0}]);
  const [accelBuffer, setAccelBuffer] = useState([{x: 0, y: 0, z: 0}]);
  const [motion, setMotion] = useState("Stable");

  //const [timer, setTimer] = useState(null);
  const [seconds, setSeconds] = useState(300);

  const _setStable = () => {
    setMotion("Stable");
    setSeconds(300);
  }

  const _tick = () => {
    setSeconds(seconds - 1);
  }

  useEffect(() => {
    const bufferLength = 30;  //3 seconds

    let gyroArray = [...gyroBuffer];
    if (gyroBuffer.length >= bufferLength) {
      gyroArray.splice(0, 1); //Delete first element
    }
    gyroArray.push(gyro);
    setGyroBuffer(gyroArray);

    let accelArray = [...accelBuffer];
    if (accelBuffer.length >= bufferLength) {
      accelArray.splice(0, 1); //Delete first element
    }
    accelArray.push(accel);
    setAccelBuffer(accelArray);


    if (motion == "Falling") {
      setSeconds(seconds - 1);
    }

    //console.log(seconds);

    if (seconds <= 0 && motion == "Falling") {
      alert("Contacting Emergency Contact . . . \nStarting Audio Recording . . .");
      setMotion("Recording");
      setSeconds(300);
    }

  }, [gyro, accel]);


  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <Gyro gyro={gyro} setGyro={setGyro}/>  
        <Text style={styles.titleText}>Gyro</Text>
        <Text style={styles.text}>
          x: {round(gyro.x)} y: {round(gyro.y)} z: {round(gyro.z)}
        </Text>
      </View>

      <View style={styles.container}>
        <Accel accel={accel} setAccel={setAccel}/>
        <Text style={styles.titleText}>Acceleration</Text>
        <Text style={styles.text}>
          x: {round(accel.x)} y: {round(accel.y)} z: {round(accel.z)}
        </Text>

      </View>

      <View style={styles.container}>
        <Detection gyroBuffer={gyroBuffer} accelBuffer={accelBuffer} setMotion={setMotion}/>
        <Text style={styles.titleText}>Status: {motion}</Text>

      </View>
      <View style={styles.buttonContainer}>
        {motion == "Falling" && <Text justifyContent = 'center' style={styles.counterText} >{seconds / 10}</Text>}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={_setStable} style={styles.roundButton}>
          <Text style = {styles.buttonText} >I'm Okay</Text>
        </TouchableOpacity>
      </View>
    
    <View>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    </View>

    </View>

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
  titleText: {
      fontSize: 25,
      fontWeight: 'bold',
      justifyContent: 'center',
      textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    //fontFamily: 'Arial',
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c8bf5',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  counterText: {
      fontSize: 40,
      fontWeight: 'bold',
  },

  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  roundButton: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#4c8bf5',
  },
});


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