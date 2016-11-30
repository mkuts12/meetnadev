import React, { Component } from 'react';
import UserAvatar from 'react-user-avatar';
import './userItem.css';

class UserItem extends Component {
  render() {
    return (
      <div className="userItem" style={{display:"inline-flex",flexDirection:"row-reverse",alignItems:"center"}}>
        <UserAvatar size={this.props.imageSize} name={this.props.user.name}  src={this.props.user.image} colors={['#ccc', '#fafafa', '#ccaabb']}/>
        <h3 className="name" style={{paddingRight: "10px"}}>{this.props.user.name}</h3>
      </div>
    );
  }
}

export default UserItem;
