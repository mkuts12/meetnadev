import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import volunteers from '../data/volunteers.json';
import meetings from '../data/meetings.json';
import MeetingModal from './meetingModalPatient.js';

class App extends Component {
  constructor(props) {
   super(props);
   this.renderMeeting = this.renderMeeting.bind(this);
  }
  renderMeeting({key,index,isScrolling,isVisible,style}){
    return <Meeting id={key} style={style} index={index} meeting={meetings.meetings[index]} volunteer={volunteers.volunteers[index]}/>;
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MeetingModal meeting={meetings.meetings[0]} volunteers={volunteers.volunteers} volunteer={volunteers.volunteers[0]}/>
      </div>
    );
  }
}

export default App;
