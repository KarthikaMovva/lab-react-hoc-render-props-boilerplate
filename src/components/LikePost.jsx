import React from 'react';
import Wrappingcomponent from './wrappedcomponent';
//Using HOC
function LikePost(props) {

  return (
    <div>
      <button onClick={props.WhenClicked}>Like Post {props.count}</button>
    </div>
  )
}
let Wrappingcall2=Wrappingcomponent(LikePost)
export default Wrappingcall2