import React from 'react'

import './MemberControl.css';
import MemberData from '../MemberData/MemberData';

let dataDays = {

}

const memberControl = (props) =>  {

  console.log('props: ', props);
   return (
    <div className="Day" id={props.type}>
      {props.label}
      <MemberData members={props.members} />
    </div>
  );
}

export default memberControl;