import React from 'react'

import './MemberControl.css';

const memberControl = (props) => (
  <div className="Day" id={props.type}>{props.label}</div>
);

export default memberControl;