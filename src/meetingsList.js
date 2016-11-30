import React, { Component } from 'react';
import {List} from 'react-virtualized';
import MeetingDate from './meetingDate.js';
// import './List.css';

class MeetingsList extends Component {
  constructor(props) {
   super(props);
  }
  render() {
    return (
      <div style={{width:this.props.listWidth,height:this.props.listHeight}}>
        <h2 className="listTitle">{this.props.title}</h2>
        <List
          width={this.props.listWidth}
          height={this.props.listHeight}
          rowCount={this.props.meetings.length}
          rowHeight={this.props.meetingHeight}
          rowRenderer={this.props.renderMeeting}
          style={{
            display: "flex",
            flexDirection: "column"
          }}
          className="meetingsList"
        />
      </div>
    );
  }
}

export default MeetingsList;
