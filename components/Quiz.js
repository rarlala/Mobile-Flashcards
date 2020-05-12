import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

class DeskList extends Component {
  // 처음 기본값 quest_num: 1, 정답 여부: 0
  state = {
    quest_num: 1,
    pass: 0,
    viewState: 'q',
  };

  viewStateChange = () => {
    this.state.viewState === 'q'
      ? this.setState(() => ({
          viewState: 'a',
        }))
      : this.setState(() => ({
          viewState: 'q',
        }));
  };

  clickIncorrect = () => {
    let current_quest = this.state.quest_num;
    this.setState(() => ({
      quest_num: current_quest + 1,
    }));
  };

  clickCorrect = () => {
    let current_quest = this.state.quest_num;
    let current_pass = this.state.pass;
    this.setState(() => ({
      pass: current_pass + 1,
      quest_num: current_quest + 1,
    }));
  };

  clickRestart = () => {
    this.setState(() => ({
      quest_num: 1,
      pass: 0,
      viewState: 'q',
    }));
  };

  render() {
    const { questions } = this.props.route.params;
    const quest_total_num = Object.keys(questions).length;

    const { quest_num, pass, viewState } = this.state;

    console.log(quest_num, '/', quest_total_num);
    if (quest_total_num < quest_num) {
      return (
        <View style={styles.container}>
          <View style={styles.resultBox}>
            <Text style={styles.score}>Your Score</Text>
            <Text style={styles.result}>
              {Math.floor((Number(pass) / Number(quest_total_num)) * 100)}%
            </Text>
          </View>
          <TouchableHighlight
            style={[styles.button, styles.restart]}
            onPress={this.clickRestart}
          >
            <Text style={{ color: 'white' }}>RESTART QUIZ</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.back]}
            onPress={() => this.props.navigation.navigate('Desks')}
          >
            <Text style={{ color: 'white' }}>BACK TO DECK</Text>
          </TouchableHighlight>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.number}>
            {quest_num} / {quest_total_num}
          </Text>
          <View style={styles.container}>
            {/* viewState 따라 값 바꿔 보여주기 */}
            <Text style={styles.title}>
              {viewState === 'q'
                ? questions[Number(quest_num) - 1].question
                : questions[Number(quest_num) - 1].answer}
            </Text>

            <TouchableOpacity onPress={this.viewStateChange}>
              <Text style={styles.option}>
                {viewState === 'q' ? 'View Answer' : 'View Question'}
              </Text>
            </TouchableOpacity>

            {/* 버튼을 클릭하면 정답 여부 별도 기록 및 quest_num 1 증가되도록 함수 처리 */}
            <TouchableHighlight
              style={[styles.button, styles.correct]}
              onPress={this.clickCorrect}
            >
              <Text style={{ color: 'white' }}>Correct</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button, styles.incorrect]}
              onPress={this.clickIncorrect}
            >
              <Text style={{ color: 'white' }}>Incorrect</Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    }
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
    marginLeft: 20,
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
  score: {
    fontSize: 20,
  },
  result: {
    fontSize: 50,
    color: 'green',
    fontWeight: 'bold',
  },
  resultBox: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 50,
    borderRadius: 10,
    marginBottom: 30,
  },
  restart: {
    backgroundColor: 'black',
  },
  back: {
    backgroundColor: 'gray',
  },
});

function mapStateToProps(desks) {
  return desks;
}

const mapDispatchToProps = (dispatch) => ({
  createCard: (title, card) => dispatch(handleAddCard(title, card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeskList);
