import { useState } from "react"

function Converter() {

  const [usd, setUsd] = useState("")
  const [inr, setInr] = useState(0)

  function convertCurrency() {

    const rate = 83

    const result = Number(usd) * rate

    setInr(result.toFixed(2))

  }

  return (

    <div>

      <h1 className="text-4xl font-bold mb-8">
        Currency Converter
      </h1>

      <div className="bg-zinc-900 p-6 rounded-2xl w-fit">

        <div className="flex flex-wrap gap-4">

          <input
            type="number"
            placeholder="USD"
            className="bg-black p-3 rounded-xl outline-none"
            value={usd}
            onChange={(e) => setUsd(e.target.value)}
          />

          <button
            className="bg-blue-500 px-5 rounded-xl font-bold"
            onClick={convertCurrency}
          >
            Convert
          </button>

        </div>

        <p className="mt-6 text-3xl text-green-400 font-bold">
          ₹ {inr}
        </p>

      </div>

    </div>

  )

}

export default Converter