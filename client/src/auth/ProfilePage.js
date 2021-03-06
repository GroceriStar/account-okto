import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';

class ProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    };

    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  async getCurrentUser() {
    this.props.auth.getUser()
      .then(user => this.setState({ user }));
  }

  compontDidMount(){
    this.getCurrentUser();
  }

  render() {
    if( !this.state.user ){
      return null;
    }

    return (
      <section className="user-profile">
        <h1>User Profile</h1>
        <div>
          <label>Name: </label>
          <span>{this.state.user.name}</span>
        </div>
      </section>
    )
  };

}


export default withAuth( ProfilePage )
