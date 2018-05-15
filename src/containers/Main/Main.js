import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux/Aux';
import Member from '../../components/Member/Member';

class Main extends Component {

  state = {
    members: null,
    error: null
  }

  componentDidMount() {
    console.log(this.props);
    axios.get('http://uinames.com/api/?ext&amount=25')
    .then(response => {
      console.log('response: ', response.data);
      this.setState({members: response.data});
    })
    .catch(error => {
      // console.log('error: ', error);
      this.setState({error: true});
    });
  }
  render() {
    let member = null;
    if(this.state.members) {
      member = (
        <Aux>
          <Member members={this.state.members} />
        </Aux>
      );
    }
    return (
      <Aux>
        {member}
      </Aux>      
    );
  }
}

export default Main