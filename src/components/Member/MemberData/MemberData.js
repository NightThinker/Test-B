import React from 'react';
import './MemberData.css';

const memberData = (props) => {
  console.log('props: ', props);
  const images = props.members.map(mb => {
    if(props.type === mb.birthday.typeDay)
    console.log(test);
  })
  // <div  class="member"><img src="'+x.photo+'" alt="images"><div>'+x.name+'</div></div>
  return (
    <div className="member">
      <img src="" alt="" />
      <div>name</div>
    </div>
 );
}

export default memberData;