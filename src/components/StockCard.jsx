function StockCard({ name, price, change }) {

  const stockChange = Number(change)

  return (

    <div className="bg-zinc-900 p-6 rounded-2xl hover:scale-105 transition duration-300">

      <h2 className="text-2xl font-bold mb-2">
        {name}
      </h2>

      <p className="text-3xl text-green-400">
        ${price}
      </p>

      <p
        className={`mt-3 ${
          stockChange >= 0
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        {stockChange}%
      </p>

    </div>

  )

}

export default StockCard