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
    // console.log(this.props);
    axios.get('http://uinames.com/api/?ext&amount=25')
    .then(response => {
      const updatedPosts = response.data.map(post => {
        let typeDays = new Date(post.birthday.mdy).getDay();
        return {
          name: post.name,
          images: post.photo,
          typeDay: typeDays,
          birthday: post.birthday.mdy        
        }
      });
      this.setState({members: updatedPosts});
    })
    .catch(error => {
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

export default Main;