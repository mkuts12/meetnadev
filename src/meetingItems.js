import React from 'react';
import MeetingDate from './meetingDate.js';

export const Meeting = (props) => <div key={props.id} style={Object.assign(props.style,{display:"flex",flexDirection:"column",alignItems:"center"})}><MeetingDate meeting={props.meeting}/><p><b className="padding">מתנדב:</b>{props.volunteer.name}</p></div>;

export const MeetingRequest = (props) => <div key={props.id} style={Object.assign(props.style,{display:"flex",flexDirection:"column",alignItems:"center"})}><MeetingDate meeting={props.meeting}/><p>מספר בקשות{props.meeting.volunteers_requests.length}</p></div>;
