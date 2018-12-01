import React, { PureComponent } from 'react';

class UserInfo extends PureComponent {
  render() {
    const { name, profileImage} = this.props;

    return (
        <div className="user-info">
          <div className="user-info-image" style={{backgroundImage: `url(${profileImage}`}} />
          <span className="user-info-name">{name}</span>
        </div>
    )
  }
}

export default UserInfo;