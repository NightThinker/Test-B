import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux/Aux';
import Member from '../../components/Member/Member';
import Spinner from '../../components/UI/Spinner/Spinner';

class Main extends Component {

  state = {
    members: null,
    loading: false,
    error: false
  }

  componentDidMount() {
    console.log(this.props);
    axios.get('http://uinames.com/api/?ext&amount=25')
    .then(response => {
      // console.log('response: ', response.data);
      this.setState({members: response.data});
      // this.setState({error: false});
    })
    .catch(error => {
      // console.log('error: ', error);
      this.setState({error: true});
    });
  }
  render() {
    let member = this.state.error ? <p>Member can't be loaded</p> : <Spinner />;
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