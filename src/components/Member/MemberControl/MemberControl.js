import React from 'react'

import './MemberControl.css';

const memberControl = (props) =>  {
  
  let table = null;
  switch (props.type) {
    case '0':
      table =<p>SUN</p>
      break;
    case '1':
      table =<p>MON</p>
      break;
    case '2':
      table =<p>TUE</p>
      break;
    case '3':
      table =<p>WED</p>
      break;
    case '4':
      table =<p>THU</p>
      break;
    case '5':
      table =<p>FRI</p>
      break;
    case '6':
      table =<p>SAT</p>
      break;
    default:
      table =<p>default</p>
      break;
  }

  const memberData = props.members.map(mb => {
    // console.log('mb: ', mb.images);
    return <div className="member" key={mb.name}>
              <img src={mb.images} alt="images" />
              <div>{mb.name}</div>
            </div>
  });
 

   return (
    <div className="Day" id={props.type}>
      {table}
      {memberData}
    </div>
  );
}

export default memberControl;