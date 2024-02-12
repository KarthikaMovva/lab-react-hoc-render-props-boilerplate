function Likeimage1(props) {
    // console.log(props)
  //Using render props
    return (
      <div>
        <button onClick={props.WhenClicked}>Like Image {props.count}</button>
      </div>
    )
  }
  export default Likeimage1;