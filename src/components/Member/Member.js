import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import './Member.css';
import MemberControl from './MemberControl/MemberControl';

const controls = [
  { label: 'SUN', type: '0'},
  { label: 'MON', type: '1'},
  { label: 'TUE', type: '2'},
  { label: 'WED', type: '3'},
  { label: 'THU', type: '4'},
  { label: 'FRI', type: '5'},
  { label: 'SAT', type: '6'}
];

const  member = (props) => {

  // console.log('members members : ',props.members);
  const group_to_values = props.members.reduce(function (obj, item) {
    obj[item.typeDay] = obj[item.typeDay] || [];
    obj[item.typeDay].push({
      name: item.name,
      images: item.images
    });
    return obj;
  }, {});


  const groups = Object.keys(group_to_values).map(function (key) {
    // console.log('groups in :' ,group_to_values[key]);
    return {group: key, dataDays:  group_to_values[key]};
  });

  const compareKeys = groups.map(key => {
    // console.log('key: ', key.dataDays);
    return             <MemberControl 
                      key={key.group} 
                      type={key.group} 
                      members={key.dataDays}
                    />;
  })

    return (
      <Aux>
        <div className="Week">
          {compareKeys}
        </div>
      </Aux>
    )

}

export default member;