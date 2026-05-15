import {
  Bell,
  Search,
  TrendingUp,
  TrendingDown
} from "lucide-react"

import { useState } from "react"

function Dashboard() {

  const [stock, setStock] = useState("AAPL")

  const [input, setInput] = useState("AAPL")

  const logos = {
    AAPL: "https://logo.clearbit.com/apple.com",
    TSLA: "https://logo.clearbit.com/tesla.com",
    NVDA: "https://logo.clearbit.com/nvidia.com",
    MSFT: "https://logo.clearbit.com/microsoft.com",
    META: "https://logo.clearbit.com/meta.com",
    AMZN: "https://logo.clearbit.com/amazon.com",
    NFLX: "https://logo.clearbit.com/netflix.com",
    GOOGL: "https://logo.clearbit.com/google.com"
  }

  function handleSearch() {

    if (input.trim() !== "") {

      setStock(input.toUpperCase())

    }

  }

  return (

    <div className="min-h-screen bg-black text-white p-4 md:p-8">

      {/* Top Navbar */}

      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">

        <div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Welcome back to TradeX
          </p>

        </div>

        <div className="flex items-center gap-4 flex-wrap">

          {/* Search */}

          <div className="flex items-center bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">

            <input
              type="text"
              placeholder="Search Stock"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent px-4 py-3 outline-none text-white"
            />

            <button
              onClick={handleSearch}
              className="bg-green-500 px-4 py-3 hover:bg-green-600 transition"
            >
              <Search size={20} />
            </button>

          </div>

          {/* Notification */}

          <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800">
            <Bell size={20} />
          </div>

          {/* Avatar */}

          <div className="w-12 h-12 rounded-full bg-green-500"></div>

        </div>

      </div>

      {/* Main Layout */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left Section */}

        <div className="xl:col-span-2 space-y-6">

          {/* Trading Card */}

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 shadow-lg">

            {/* Header */}

            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">

              <div className="flex items-center gap-4">

                <img
                  src={
                    logos[stock] ||
                    "https://cdn-icons-png.flaticon.com/512/5968/5968260.png"
                  }
                  alt="logo"
                  className="w-14 h-14 rounded-full bg-white p-2 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://cdn-icons-png.flaticon.com/512/5968/5968260.png"
                  }}
                />

                <div>

                  <h2 className="text-3xl font-bold">
                    {stock}
                  </h2>

                  <p className="text-green-400 mt-1">
                    Live Market Chart
                  </p>

                </div>

              </div>

              <div>

                <h1 className="text-4xl font-bold">
                  $186.57
                </h1>

              </div>

            </div>

            {/* Chart */}

            <div className="rounded-2xl overflow-hidden border border-zinc-800">

              <iframe
                title="tradingview-widget"
                className="w-full h-[500px]"
                src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_widget&symbol=NASDAQ:${stock}&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=1f2937&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&hideideas=1`}
              />

            </div>

            {/* Buttons */}

            <div className="flex gap-4 mt-6">

              <button className="flex-1 bg-green-500 hover:bg-green-600 transition py-4 rounded-2xl text-xl font-bold">

                Buy

              </button>

              <button className="flex-1 bg-red-500 hover:bg-red-600 transition py-4 rounded-2xl text-xl font-bold">

                Sell

              </button>

            </div>

          </div>

          {/* Activity Feed */}

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">

            <h2 className="text-2xl font-bold mb-6">
              Activity Feed
            </h2>

            <div className="space-y-4">

              <div className="bg-black p-4 rounded-2xl flex items-center justify-between">

                <div>

                  <p className="font-bold">
                    Bought 10 shares of AAPL
                  </p>

                  <p className="text-gray-400 text-sm">
                    2 minutes ago
                  </p>

                </div>

                <TrendingUp className="text-green-400" />

              </div>

              <div className="bg-black p-4 rounded-2xl flex items-center justify-between">

                <div>

                  <p className="font-bold">
                    Sold 5 shares of TSLA
                  </p>

                  <p className="text-gray-400 text-sm">
                    10 minutes ago
                  </p>

                </div>

                <TrendingDown className="text-red-400" />

              </div>

            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="space-y-6">

          {/* Portfolio */}

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-2xl font-bold">
                My Portfolio
              </h2>

              <p className="text-green-400 font-bold">
                +3.27%
              </p>

            </div>

            <div className="bg-black rounded-2xl p-6">

              <h1 className="text-4xl font-bold">
                $12,456.89
              </h1>

              <p className="text-gray-400 mt-2">
                Total Balance
              </p>

            </div>

            <div className="space-y-4 mt-6">

              <div className="flex items-center justify-between">

                <p>TSLA</p>

                <p className="text-green-400">
                  +11.2%
                </p>

              </div>

              <div className="flex items-center justify-between">

                <p>AAPL</p>

                <p className="text-red-400">
                  -0.4%
                </p>

              </div>

              <div className="flex items-center justify-between">

                <p>NVDA</p>

                <p className="text-green-400">
                  +8.7%
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Dashboard