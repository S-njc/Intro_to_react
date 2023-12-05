
import React, { useState, useEffect } from 'react'

const Cleanup = () => {
  const [count, setCount] = useState(0);

  // equivalent to componentDidMount and componentDidUpdate
  useEffect(() => {
    // setup will run after mounting or updating
    console.log("I fire when something important happens")

    // const timer = setInterval(() => {
    //   // console.log("I do stuff every 3 seconds")
    //   console.log("🏓", timer)
    //   setCount(p => p + 1)
    // }, 3000)


    // equivalent to componentWillUnMount
    return () => {
      // cleanup code to run before unmounting or updating
      clearInterval(timer)
      console.log("And now I get cleaned up\n\n")
    }

    // }, []) // will only run once
  }, [count]) // will re-run if count changes


  return (
    <div>
      {/* <p>You clicked {count} {count === 1 ? "time" : "times"}</p> */}
      <p>Count {count}</p>
      <button onClick={() => setCount(p => p + 1)}>Click me</button>
    </div>
  );
}

export default Cleanup