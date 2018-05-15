import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import './Member.css';
import MemberControl from './MemberControl/MemberControl';

const controls = [
  { label: 'SUN', type: 'sun'},
  { label: 'MON', type: 'mon'},
  { label: 'TUE', type: 'tue'},
  { label: 'WED', type: 'wed'},
  { label: 'THU', type: 'thu'},
  { label: 'FRI', type: 'fri'},
  { label: 'SAT', type: 'sat'}
];

const member = (props) =>  {
  console.log(props);
  

  const memberSummary = Object.keys(props.members)
    .map(igKey => {
      console.log('igKey: ', igKey);
      return (
        <div className="Day" key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.members[igKey].name}
        </div>
      );
    });
  // let dates= props.members;

  // console.log('dates: ', dates);
  return (
    <Aux>
      {controls.map(ctrl => (
        <MemberControl 
          key={ctrl.label} 
          label={ctrl.label}
          type={ctrl.type}
          members={props.members}
        />
      ))}
    </Aux>
  );
};

export default member;