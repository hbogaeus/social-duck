import React, { PureComponent } from 'react';

class UserInfo extends PureComponent {
  render() {
    const { name, profileImage} = this.props;

    return (
        <div className="user-info">
          <img className="user-info-image" src={profileImage} />
          <span className="user-info-name">{name}</span>
        </div>
    )
  }
}

export default UserInfo;