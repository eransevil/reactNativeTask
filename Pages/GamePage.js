
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View, Button, TouchableOpacity, Platform
} from 'react-native';
import ColorCard from '../components/ColorCard';

import Sound from 'react-native-sound'

import { timeout } from '../utils/utils';


const GamePage = ({ navigation }) => {

  const [music, setMusic] = useState(false)

  const initPlay = {
    isDisplay: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: []
  }

  const colorsList = ['green', 'red', 'yellow', 'blue']

  const [isOn, setIsOn] = useState(null)
  const [play, setPlay] = useState(initPlay)
  const [flashColor, setFlashColor] = useState('')

  useEffect(() => {
    if (isOn) {
      setPlay({ ...initPlay, isDisplay: true })
    } else {
      setPlay(initPlay)
    }
  }, [isOn])

  useEffect(() => {
    if (isOn && play.isDisplay) {
      let newColor = colorsList[Math.floor(Math.random() * 4)]
      const copyColors = [...play.colors]
      copyColors.push(newColor)
      setPlay({ ...play, colors: copyColors })
    }
  }, [isOn, play.isDisplay])


  useEffect(() => {
    if (isOn && play.isDisplay && play.colors.length) {
      displayColor()
    }
  }, [isOn, play.isDisplay, play.colors.length])

  const initMusic = async () => {
    let summer = new Sound('summer.mp3', Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log('err`', err);
        return
      }
      summer.play((success) => {
        console.log('end', success);
      })
    })
    setMusic(summer)
  }




  const startGame = () => {
    initMusic()
    setIsOn(true)
  }




  const displayColor = async () => {
    await timeout(700)
    for (let i = 0; i < play.colors.length; i++) {
      setFlashColor(play.colors[i])
      music.play()
      await timeout(700)
      music.stop()
      setFlashColor('')
      await timeout(200)
      if (i === play.colors.length - 1) {
        const copyColors = [...play.colors,]
        setPlay({
          ...play,
          isDisplay: false,
          userPlay: true,
          userColors: copyColors.reverse()
        })
      }
    }
  }

  const handleClick = async (color) => {
    if (!play.isDisplay && play.userPlay) {
      music.play()
      const copyUserColors = [...play.userColors]
      const lastColor = copyUserColors.pop()
      setFlashColor(color)

      if (color === lastColor) {
        if (copyUserColors.length) setPlay({ ...play, userColors: copyUserColors })
        else {
          await timeout(700)
          setPlay({ ...play, isDisplay: true, userPlay: false, score: play.colors.length, userColors: [] })
        }
      } else {
        await timeout(700)
        setPlay({ ...initPlay, score: play.colors.length })
      }
      await timeout(400)
      music.stop()
      setFlashColor('')
    }
  }

  const closeHandle = () => {
    setIsOn(false)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.cardWrapper}>
        {colorsList && colorsList.map((color, idx) => <ColorCard key={idx} color={color} handleClick={handleClick} flash={flashColor === color}></ColorCard>)}
      </View>
      <View style={styles.startButton}>
        {!isOn && !play.score && <TouchableOpacity style={styles.startBtnContainer} onPress={startGame}><Text style={styles.btn}>Start</Text></TouchableOpacity>}
        {isOn && (play.isDisplay || play.userPlay) && <View style={styles.scoreContainer}><Text style={styles.btn}>{play.score}</Text></View>}
        {(isOn && !play.isDisplay && !play.userPlay && play.score) ? <View style={styles.loss}>
          <Text style={styles.btn}>Game Over</Text>
          <Text style={styles.btn}>Final Score: {play.score}</Text>
          <TouchableOpacity style={styles.startBtnContainer} onPress={closeHandle}><Text style={styles.btn}>Close</Text>
          </TouchableOpacity></View> : null}
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  screen: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  gameContainer: {
    borderRadius: 50
  },
  cardWrapper: {
    flexDirection: 'row',
    width: 400,
    flexWrap: 'wrap',

  },
  startButton: {
    height: 100,
    position: 'absolute',
  },
  startBtnContainer: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'black',
  },
  btn: {
    color: 'white',
    fontSize: 20
  },
  scoreContainer: {
    height: 100,
    width: 100,
    backgroundColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

export default GamePage;
