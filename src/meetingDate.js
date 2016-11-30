import React, { Component } from 'react';
import moment from 'moment';
import './meetingDate.css';

class MeetingDate extends Component {
  render() {
    moment.locale('he');
    let date = moment(this.props.meeting.date,"DD\\MM\\YY");
    let style = {display:"inline-flex",flexDirection:"row-reverse",alignItems:"center"};
    if(this.props.style) {
      Object.assign(style,this.props.style);
    }
    return (
      <div className="meetingDate" style={style}>
        <h3 className="padding">{date.format('D')}\{date.format('M')}\{date.format('Y')}</h3>
        <h3 className="padding">{date.format('dddd')}</h3>
        <h3 className="padding">{this.props.meeting.startTime} - {this.props.meeting.endTime}</h3>
      </div>
    );
  }
}

export default MeetingDate;
