import React from 'react'

import './MemberControl.css';
// import MemberData from '../MemberData/MemberData';

let dataDays = {

}

const memberControl = (props) =>  {
  // console.log('props: ', props.groups);
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
 
  // const groupOuput = props.members.map(gr => {
  //   console.log('gr: ', gr);
  //   return <p key={gr.group}>{gr.dataDays.map(dd => {
  //     console.log('dd: ', dd.name);
  //     <p>{dd.name}</p>
  //   })}</p>
  // })

  console.log('props: ', props);
   return (
    <div className="Day" id={props.type}>
      {table}

      {/* {props.label}
      {props.members} */}
      {/* <MemberData members={props.members} id={props.type} /> */}
      {/* <div className="member">
        <img src="" alt="" />
        <div>name</div>
      </div> */}
    </div>
  );
}

export default memberControl;