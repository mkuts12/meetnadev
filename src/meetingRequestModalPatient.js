import React, { Component } from 'react';
import MeetingDate from './meetingDate.js';
import UserList from './userList.js';
// import './List.css';

class meetingModal extends Component {
  constructor(props) {
   super(props);
  }
  render() {
    const users = this.props.meeting.volunteers_requests.map((volunteer) => {
      let user = this.props.volunteers.filter((vol)=>vol.email === volunteer)[0];
      return user;
    });
    return (
      <div style={{display:"inline-flex",flexDirection:"column",alignItems:"center"}}>
        <MeetingDate meeting={this.props.meeting}/>
        <UserList listWidth={100} listHeight={100} userHeight={80} users={users}/>
        <div style={{display:"inline-flex",flexDirection:"row-reverse",alignItems:"center"}}>
          <a style={{background:"green",padding:"20px",margin:"20px",width:"50px",height:"30px"}}>אישור</a>
          <a style={{background:"red",padding:"20px",margin:"20px",width:"50px",height:"30px"}}>בטל פגישה</a>
        </div>
      </div>
    );
  }
}

export default meetingModal;
