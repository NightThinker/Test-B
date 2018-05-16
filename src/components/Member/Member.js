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

const  member = (props) => {


  const datadays = [];
  for(let mbKey in props.members) {
    // console.log('mbKey: ', mbKey);
    let typeDays = new Date(props.members[mbKey].birthday.mdy).getDay();
    datadays.push(
      {
        id: mbKey,
        name: props.members[mbKey].name,
        images: props.members[mbKey].photo,
        birthday: {
          typeDay: typeDays,
          birthday: props.members[mbKey].birthday.mdy        
        }
      }
    );
  }
  console.log(datadays);

  // render() {
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
  // };
}

export default member;