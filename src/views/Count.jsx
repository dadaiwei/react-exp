import React, { useState } from "react";

function Children() {
  console.log("children mount");
  // const { count } = props;
  const [flag, setFlag] = useState(false);
  return (
    <div>
      Children
      <div>
        flag: {flag}
        <div>
          <button onClick={() => setFlag(!flag)}>edit flag</button>
        </div>
      </div>
    </div>
  );
}

function Count() {
  console.log("mount");
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <h1>Counter</h1>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <br />
      <div>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
      <Children></Children>
    </div>
  );
}

export default Count;
