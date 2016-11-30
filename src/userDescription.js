import React, { Component } from 'react';
import UserAvatar from 'react-user-avatar';
import './userDescription.css'

class UserDescription extends Component {
//   getDistanceFromUser() {
//         navigator.geolocation.getCurrentPosition(
//             function(position) {
//                 let latLngA = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
//                 let latLngB = new google.maps.LatLng(40.778721618334295, -73.96648406982422);
//                 var distance = google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB);
//                 alert(distance);//In metres
//             },
//             function() {
//                 alert("geolocation not supported!!");
//             }
//     );
//   }
  render() {
    return (
        <div style={{display:"inline-flex",flexDirection:"row-reverse",alignItems:"center"}}>
            <UserAvatar size="150" name={this.props.user.name}  src={this.props.user.image} colors={['#ccc', '#fafafa', '#ccaabb']}/>
            <div>
                <h1 className="info" style={{paddingRight: "10px"}}>{this.props.user.name}</h1>
                <p className="info" style={{paddingRight: "10px"}}>{this.props.user.location.city}, {this.props.user.location.street} {this.props.user.location.street_number} דירה {this.props.user.location.appartment} </p>
            </div>
        </div>
    );
  }
}

export default UserDescription;
