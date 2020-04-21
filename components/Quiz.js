import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { getDesksInfo } from '../utils/helpers';

class DeskList extends Component {
  // 처음 기본값 quest_num: 1, 정답 여부: 0
  state = {
    quest_num: 1,
    pass: 0,
  };

  render() {
    const key = 'one';
    const desk = getDesksInfo(key);
    const { questions } = desk;

    const quest_total_num = Object.keys(desk['questions']).length;

    return (
      <View style={styles.container}>
        <Text style={styles.number}>
          {this.state.quest_num} / {quest_total_num}
        </Text>

        {/* for문을 통해 quest_num이 quest_total_num보다 작거나 같을때까지만 질문을 출력하고 커지면 결과창을 표시해야한다.*/}

        <View style={styles.container}>
          {/* 현재 출력되어야하는 것이 질문이면 질문과 'Answer' 표시 반대면 답과 'Question' 표시*/}
          <Text style={styles.title}>{Object.keys(questions)[0]}</Text>

          <Text style={styles.title}>{Object.values(questions)[0]}</Text>

          <Text style={styles.option}>Answer</Text>

          {/* 버튼을 클릭하면 정답 여부 별도 기록 및 quest_num 1 증가되도록 함수 처리 */}
          <TouchableHighlight style={[styles.button, styles.correct]}>
            <Text style={{ color: 'white' }}>Correct</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.button, styles.incorrect]}>
            <Text style={{ color: 'white' }}>Incorrect</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  title: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  option: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 100,
  },
  button: {
    width: 200,
    height: 60,
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  correct: {
    backgroundColor: 'green',
  },
  incorrect: {
    backgroundColor: 'red',
  },
});

export default DeskList;
