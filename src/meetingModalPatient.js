import React, { Component } from 'react';
import MeetingDate from './meetingDate.js';
import UserItem from './userItem.js';
// import './List.css';

class meetingModal extends Component {
  constructor(props) {
   super(props);
  }
  render() {
    let user = this.props.volunteers.filter((volunteer)=>this.props.volunteer === volunteer)[0];

    return (
      <div style={{display:"inline-flex",flexDirection:"column",alignItems:"center"}}>
        <MeetingDate meeting={this.props.meeting}/>
        <UserItem user={user} imageSize="48"/>
        <div style={{display:"inline-flex",flexDirection:"row-reverse",alignItems:"center"}}>
          <a style={{background:"green",padding:"20px",margin:"20px",width:"50px",height:"30px"}}>אישור</a>
          <a style={{background:"red",padding:"20px",margin:"20px",width:"50px",height:"30px"}}>בטל פגישה</a>
        </div>
      </div>
    );
  }
}

export default meetingModal;
