import React, { useState } from "react";

const PersonAmount = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  let deductOne = () => {
    setCount(count - 1);
  };

  return (
    <div class="flex justify-end mr-44" >
      <button onClick={deductOne} className="subtract" class="pb-8 text-xl">
        -
      </button>
      <div className="value" class="pb-8 mr-6 ml-6 text-xl">
        {count}
      </div>
      <button onClick={addOne} className="add" class="pb-8 text-xl">
        +
      </button>
    </div>
  );
};

export default PersonAmount;
