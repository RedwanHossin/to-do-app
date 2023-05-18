import { useState } from "react"
const Counter = () => {

  const [counter, setCounter] = useState(1);

  const clickHandler = () => setCounter(counter + 1);
  const resetHandler = () => setCounter(1);

  return (
    <div className=" flex justify-center items-center flex-col border border-stroke rounded-lg bg-secondary overflow-hidden relative">
      <div
        className=" py-10 flex justify-center items-center flex-col w-full mb-5 h-full"
        onClick={clickHandler}
      >
        <h1 className="text-6xl font-medium mb-3 text-white">{counter}</h1>
      </div>
      <button
        onClick={resetHandler}
        type="button"
        className="  absolute top-1/2 left-1/2 translate-y-full -translate-x-1/2 ptext-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
      >
        Reset
      </button>
    </div>
  );
};

export default Counter