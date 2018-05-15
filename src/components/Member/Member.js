import React from 'react';

import Aux from '../../hoc/Aux/Aux';

const member = (props) =>  {
  console.log(props);
  const memberSummary = Object.keys(props.members)
    .map(igKey => {
      console.log('igKey: ', igKey);
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.members[igKey].name}
        </li>
      );
    });
  // let dates= props.members;

  // console.log('dates: ', dates);
  return (
    <Aux>
      <ul>
        {memberSummary}
      </ul>
    </Aux>
  );
};

export default member;