import React from 'react';
import Wrappingcomponent from './wrappedcomponent'

function LikeImage(props) {
  // console.log(props)
//Using HOC
  return (
    <div>
      <button onClick={props.WhenClicked}>Like Image {props.count}</button>
    </div>
  )
}
let Wrappingcall1=Wrappingcomponent(LikeImage)
export default Wrappingcall1