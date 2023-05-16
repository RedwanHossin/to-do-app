import { useState } from "react"


export default function Home() {
  const [counter, setCounter] = useState(1)
  const clickHandler = () => setCounter(counter + 1)
  const resetHandler = () => setCounter(1)

  return (
    <div className="h-screen flex justify-center items-center flex-col" >

      <div className="bg-slate-300 py-10 flex justify-center items-center flex-col w-full mb-5" onClick={clickHandler} >
        <h1 className="text-6xl font-medium mb-3">
          {counter}
        </h1>



      </div>
      <button onClick={resetHandler} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Reset</button>
    </div>

  )
}
