const Welcome = (props) => {
    return (
      <>
        <h2>hello, {props.name}</h2>
  
        <button
        onClick={props.handleClick}
        >
          {props.name} btn
        </button>
      </>
    )
  }

export default Welcome