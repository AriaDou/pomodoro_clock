import React, { Component } from 'react';
import './App.css';
import Settings from './components/Settings/Settings';
import Display from './components/Display/Display';
import Panel from './components/Panel/Panel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
      isSession: true,
      initBreak: 5,
      initSession: 25,
      min: 25,
      s: 0
    };
    this.reset = this.reset.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.setInitBreak = this.setInitBreak.bind(this);
    this.setInitSession = this.setInitSession.bind(this);
    this.changeLength = this.changeLength.bind(this);
  }

  setInitBreak(event) {
    this.changeLength(!this.state.isSession, event.currentTarget.value, this.state.initBreak, 'initBreak');
  }

  setInitSession(event) {
    this.changeLength(this.state.isSession, event.currentTarget.value, this.state.initSession, 'initSession');
  }

  changeLength(shouldChangeTimer, operator, currentValue, changeKey) {
    if (!this.state.isPlay) {
      if (shouldChangeTimer) {
        if(operator === 'down' && currentValue > 1) {
          this.setState({
            [changeKey]: currentValue - 1,
            min: currentValue - 1,
            s: 0
          })
        } else if (operator === 'up' && currentValue < 60) {
          this.setState({
            [changeKey]: currentValue + 1,
            min: currentValue + 1,
            s: 0
          })
        }
      } else {
        if(operator === 'down' && currentValue > 1) {
          this.setState({
            [changeKey]: currentValue - 1
          })
        } else if (operator === 'up' && currentValue < 60) {
          this.setState({
            [changeKey]: currentValue + 1
          })
        }
      }
    }
  }

  reset(event) {
    this.setState({
      isPlay: false,
      isSession: true,
      initBreak: 5,
      initSession: 25,
      min: 25,
      s: 0
    });
    document.getElementById('beep').pause();
    document.getElementById('beep').currentTime = 0;
  }

  togglePlay(event) {
    this.setState({
      isPlay: this.state.isPlay ? false : true
    })
  }

  componentDidMount() {
    const interval = () => {
        setTimeout(interval, 1000);
        if(this.state.isPlay) {
          if (this.state.s === 0) { //s = 0
            if (this.state.min === 0) { //min = 0
              document.getElementById('beep').play();
              if (this.state.isSession) { //The Session runs out
                this.setState({
                  isSession: false,
                  min: this.state.initBreak,
                  s: 0
                });
              } else { //The Break runs out
                this.setState({
                  isSession: true,
                  min: this.state.initSession,
                  s: 0
                });
              }
            } else { //min != 0
              this.setState({
                s: 59,
                min: this.state.min - 1
              });
            }
          } else { // s != 0
            this.setState({
              s: this.state.s - 1
            });
          }
        }
    };
    setTimeout(interval, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <Settings
          initBreak={this.state.initBreak}
          initSession={this.state.initSession}
          setInitBreak={this.setInitBreak}
          setInitSession={this.setInitSession} />
        <Display
          isSession={this.state.isSession}
          min={this.state.min}
          s={this.state.s} />
        <Panel
          togglePlay={this.togglePlay}
          reset={this.reset} />
        <audio id="beep" preload="auto" src="http://goo.gl/65cBl1"></audio>
      </div>
    );
  }
}

export default App;
