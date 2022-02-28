import { StatusBar } from 'expo-status-bar';
import React, { UseEffect, ueseState, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from '../BoxingTimer/components/button'


export default function App() {

  const [numOfRounds, setNumOfRounds] = useState(0);
  const [roundTime, setRoundTime] = useState(0);
  const [rest, setRest] = useState(0);
  const [warmUp, setWarmUp] = useState(0);
  const [timerOn, setTimerOn] = useState(false);



  useEffect(() => {
    if (timerOn) startTimer();
    else BackgroundTimer.stopBackgroundTimer();
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    }
  }, [timerOn])




  const test = () => {
    setNumOfRounds(4)
  }
  const startTimer = () => {
    setTimerOn(true)
  }
  const stopTimer = () => {
    setTimerOn(false)
  }
  const clockify = () => {
    let mins = Math.floor((roundTime / 60) % 60);
    let seconds = Math.floor(roundTime % 60);

    let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    let displayMins = mins < 10 ? `0${mins}` : mins;

    return {
      displaySeconds,
      displayMins
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.timerWrap}>
        <Text style={styles.rounds}>Round 1 out of {numOfRounds}</Text>
        <Text style={styles.timer}>00:00</Text>
        <Text style={styles.status}>Fight</Text>
      </View>
      <View style={styles.buttonWrap}>
        {!timerOn ? <AppButton icon="play-circle" title="Start" backgroundColor="black" onPress={startTimer} borderRadius={15} fontSize={20} />
          : <AppButton icon="stop-circle" title="Stop" backgroundColor="black" onPress={stopTimer} borderRadius={15} fontSize={20} />}

        <AppButton icon="pause-circle" title="Pause" backgroundColor="black" onPress={test} borderRadius={15} fontSize={20} />
      </View>
      <View style={styles.wrap}>
        <Text>number of rounds </Text>
        <Text>Set Round Time </Text>
        <Text>Set Rest </Text>
        <Text>warmUp </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "cyan",
  },
  wrap: {
    padding: 30,
    justifyContent: "space-between",
    backgroundColor: "yellow",
  },
  timer: {
    fontSize: 80,
    marginBottom: 5,
  },
  timerWrap: {
    width: 350,
    height: 250,
    margin: 20,
    justifyContent: "space-between",
    backgroundColor: "yellow",
    alignItems: "center",
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 8,
  },
  rounds: {
    marginTop: 10,
    fontSize: 18,
  },
  buttonWrap: {
    flexDirection: "row",
    margin: 5,
  },
  status: {
    marginBottom: 20,
    fontSize: 18,
  }

});
