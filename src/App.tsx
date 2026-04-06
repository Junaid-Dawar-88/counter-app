import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const increamentCounter = () => {
    setCounter(counter + 1)
  }

  const decreamentCounter = () => {
    if (counter === 0) {
      alert('Counter should be positive')
      return
    }
    setCounter(counter - 1)
  }

  const clearCounter = () => {
    if (counter === 0) {
      alert('Counter already 0')
      return
    }
    setCounter(0)
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-800">

      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10 flex flex-col items-center gap-6">

        {/* Title */}
        <h1 className="text-white text-3xl font-extrabold tracking-wide">
          Counter App
        </h1>

        {/* Description */}
        <p className="text-white/80 text-center">
          Its value will never go negative 
        </p>

        {/* Counter */}
        <div className="text-6xl font-bold text-white animate-pulse">
          {counter}
        </div>

        {/* + / – Buttons */}
        <div className="flex gap-6">
          <button
            onClick={decreamentCounter}
            className="w-16 h-16 flex items-center justify-center text-3xl font-bold rounded-full bg-white/30 hover:bg-white/50 active:scale-90 transition duration-200 shadow-lg text-white cursor-pointer"
          >
            -
          </button>

          <button
            onClick={increamentCounter}
            className="w-16 h-16 flex items-center justify-center text-3xl font-bold rounded-full bg-white/30 hover:bg-white/50 active:scale-90 transition duration-200 shadow-lg text-white cursor-pointer"
          >
            +
          </button>
        </div>

        {/* Clear Button */}
        <button 
          onClick={clearCounter}
          className="mt-4 px-6 py-2 bg-white/30 text-white font-semibold rounded-2xl hover:bg-white/50 shadow-md transition duration-200 cursor-pointer"
        >
          Clear Counter
        </button>

      </div>
    </div>
  )
}

export default App