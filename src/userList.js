import React, { Component } from 'react';
import {List} from 'react-virtualized';
import UserItem from './userItem.js';
import './userList.css';

class UserList extends Component {
  constructor(props) {
   super(props);
   this.renderUser = this.renderUser.bind(this);
  }
  renderUser({key,index,isScrolling,isVisible,style}){
    return <UserItem key={key} imageSize="48" user={this.props.users[index]}/>
  }
  render() {
    return (
      <List
        width={this.props.listWidth}
        height={this.props.listHeight}
        rowCount={this.props.users.length}
        rowHeight={this.props.userHeight}
        rowRenderer={this.renderUser}
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        className="usersList"
      />
    );
  }
}

export default UserList;
