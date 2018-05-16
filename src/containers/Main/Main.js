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
      // console.log('response: ', response.data);
      // for(let mbKey in response.data) {
      //   let typeDays = new Date(response.data[mbKey].birthday.mdy).getDay();
      //   console.log('typeDays: ', typeDays);
        

      // }
      const updatedPosts = response.data.map(post => {
        // console.log(post);
        let typeDays = new Date(post.birthday.mdy).getDay();
        // console.log('typeDays: ', typeDays);
        return {
          name: post.name,
          images: post.photo,
          typeDay: typeDays,
          birthday: post.birthday.mdy        
        }
      });
      // console.log("updatedPosts : ", updatedPosts.birthday.typeDay);
      this.setState({members: updatedPosts});
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