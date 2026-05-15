import { useState } from "react"

function Simulator() {

  const [investment, setInvestment] = useState("")
  const [growth, setGrowth] = useState("")
  const [futureValue, setFutureValue] = useState(0)

  function calculateGrowth() {

    const invest = Number(investment)
    const growthRate = Number(growth)

    const result =
      invest * Math.pow(1 + growthRate / 100, 1)

    setFutureValue(result.toFixed(2))

  }

  return (

    <div>

      <h1 className="text-4xl font-bold mb-8">
        Investment Simulator
      </h1>

      <div className="bg-zinc-900 p-6 rounded-2xl w-fit">

        <div className="flex flex-wrap gap-4">

          <input
            type="number"
            placeholder="Investment Amount"
            className="bg-black p-3 rounded-xl outline-none"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
          />

          <input
            type="number"
            placeholder="Growth %"
            className="bg-black p-3 rounded-xl outline-none"
            value={growth}
            onChange={(e) => setGrowth(e.target.value)}
          />

          <button
            className="bg-purple-500 px-5 rounded-xl font-bold"
            onClick={calculateGrowth}
          >
            Calculate
          </button>

        </div>

        <p className="mt-6 text-3xl text-green-400 font-bold">
          ₹ {futureValue}
        </p>

      </div>

    </div>

  )

}

export default Simulator