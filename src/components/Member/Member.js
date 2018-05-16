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

  console.log('members members : ',props.members);
  const group_to_values = props.members.reduce(function (obj, item) {
    // console.log('obj: ', obj);
    // console.log('item: ', item.typeDay);
    // console.log("obj :" ,obj[item.typeDay]);
    obj[item.typeDay] = obj[item.typeDay] || [];
    obj[item.typeDay].push({
      name: item.name,
      images: item.images
    });
    return obj;
  }, {});

  // console.log(group_to_values);

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

  // const compareKeys = groups.key === 
  // console.log('compareKeys: ', compareKeys);



  // const groupOuput = props.members.map(gr => {
  //   console.log('gr: ', gr);
  //   return <p key={gr.group}>{gr.dataDays.map(dd => {
  //     console.log('dd: ', dd.name);
  //     <p>{dd.name}</p>
  //   })}</p>
  // })

  // const compareKeys = (a, b) => {

  // }

  // const ingredients = {};
  // let price = 0;
  // for(let param of query.entries()) {
  //   if(param[0] === 'price') {
  //     price = param[1];
  //   } else {
  //     //['salad', '1']
  //     ingredients[param[0]] = +param[1];
  //   }
  // }

  // compareKeys()
  // render() {
    // console.log(this.state.dataDays.sun);
    return (
      <Aux>
        <div className="Week">
          {/* {groups.map(ctrl => (

            <MemberControl 
              key={ctrl.group} 
              type={ctrl.group} 
              members={groups.dataDays}
            />
          ))} */}
          {compareKeys}
        </div>
      </Aux>
    )
  // };

}

export default member;