import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './Member.css';

const member = (props) =>  {
  console.log(props);
  const memberSummary = Object.keys(props.members)
    .map(igKey => {
      console.log('igKey: ', igKey);
      return (
        <div className={classes.Day} key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.members[igKey].name}
        </div>
      );
    });
  // let dates= props.members;

  // console.log('dates: ', dates);
  return (
    <Aux>
      <div className="Week">
        {memberSummary}
      </div>
    </Aux>
  );
};

export default member;