import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Navbar from './components/Navbar';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {

  const [loaded, setLoaded] = useState(false)
  const [choice, setChoice] = useState(NaN);
  const [won, setWon] = useState(false)
  const [rounds, setRounds] = useState(0)

  if(!loaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setLoaded(true)}/>
  }

  const getChoice = num => {
    setChoice(num)
  }
  const checkIfWon = result => {
    setRounds(result)
    setWon(true)
  }

  const resetGame = () => {
    setChoice(NaN)
    setWon(false)
    setRounds(0)
  }

  let content = <StartScreen setNumber={getChoice}/>
  if(!isNaN(choice)){
    content = <GameScreen choice={choice} numberOfRounds={checkIfWon}/>
  }
  if(won){
    content = <EndScreen rounds={rounds} resetGame={resetGame} number={choice}/>
  }
  return (
    <View style={styles.screen}>
      <Navbar/>
        <ScrollView>
          {content}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
