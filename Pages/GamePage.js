
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Modal, Pressable, TextInput
} from 'react-native';
import { useDispatch } from 'react-redux'
import Sound from 'react-native-sound'
import { saveResultToStorage } from '../store/resultAction';

//componentes 
import ColorCard from '../components/ColorCard';

//utils
import { timeout } from '../utils/utils';

const GamePage = ({ navigation }) => {
  const dispatch = useDispatch()

  const initPlay = {
    isDisplay: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: []
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [music, setMusic] = useState(false)
  const [userName, setUserName] = useState('')

  const [isOn, setIsOn] = useState(null)
  const [play, setPlay] = useState(initPlay)
  const [flashColor, setFlashColor] = useState('')
  const [userSocre, setUserScore] = useState(0)
  const colorsList = ['green', 'red', 'yellow', 'blue']

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
        return console.log('err`', err);
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
      const currColor = copyUserColors.pop()
      setFlashColor(color)
      if (color === currColor) {
        if (copyUserColors.length) setPlay({ ...play, userColors: copyUserColors })  //correct but there are still more colors to press
        else { //finish all colors 
          await timeout(700)
          setPlay({ ...play, isDisplay: true, userPlay: false, score: play.colors.length, userColors: [] })
        }
      } else { // wrong answer
        await timeout(700)
        setUserScore(play.score)
        setPlay({ ...initPlay, score: play.colors.length })
        closeHandle()
      }
      await timeout(400)
      music.stop()
      setFlashColor('')
    }
  }

  const closeHandle = async () => {
    setModalVisible(true)
    setIsOn(false)
  }

  const onChangeText = (value) => setUserName(value)

  const closeModal = async () => {
    setModalVisible(!modalVisible)
    const userInfo = { result: userSocre, name: userName }
    dispatch(saveResultToStorage(userInfo))
    setUserScore(0)
    setUserName('')
    navigation.navigate('resultPage')
  }


  return (
    <View style={styles.screen}>
      <View style={styles.cardWrapper}>
        {colorsList && colorsList.map((color, idx) => <ColorCard key={idx} color={color} handleClick={handleClick} flash={flashColor === color}></ColorCard>)}
      </View>
      <View style={styles.startButton}>
        {!isOn && !play.score && <TouchableOpacity style={styles.startBtnContainer} onPress={startGame}><Text style={styles.btn}>Start</Text></TouchableOpacity>}
        {isOn && (play.isDisplay || play.userPlay) && <View style={styles.scoreContainer}><Text style={styles.btn}>{play.score}</Text></View>}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.gameOver}>Game Over</Text>
            <Text style={styles.modalText}>Final Score: {userSocre}</Text>
            <Text style={styles.modalText}>Enter name:</Text>
            <TextInput style={styles.input}
              onChangeText={onChangeText}
              value={userName}></TextInput>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal}
            >
              <Text style={styles.saveBtn}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  gameOver: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  saveBtn: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: 'black'
  },
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black'
  }
});

export default GamePage;
