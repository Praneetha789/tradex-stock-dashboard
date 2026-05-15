import {
  FaHome,
  FaWallet,
  FaStar,
  FaHistory,
  FaExchangeAlt,
  FaCalculator
} from "react-icons/fa"

import {
  Link,
  useNavigate
} from "react-router-dom"

import {
  signOut
} from "firebase/auth"

import { auth } from "../firebase"

function Sidebar() {

  const navigate = useNavigate()

  async function handleLogout() {

    try {

      await signOut(auth)

      navigate("/")

    }

    catch (error) {

      alert(error.message)

    }

  }

  return (

    <div className="w-64 min-h-screen bg-zinc-900 text-white p-5 flex flex-col justify-between">

      <div>

        <h1 className="text-3xl font-bold text-green-400 mb-10">
          TradeX
        </h1>

        <div className="flex flex-col gap-6">

          <Link
            to="/dashboard"
            className="flex items-center gap-3 hover:text-green-400 transition"
          >
            <FaHome />
            Dashboard
          </Link>

          <Link
            to="/portfolio"
            className="flex items-center gap-3 hover:text-green-400 transition"
          >
            <FaWallet />
            Portfolio
          </Link>

          <Link
            to="/watchlist"
            className="flex items-center gap-3 hover:text-green-400 transition"
          >
            <FaStar />
            Watchlist
          </Link>

          <Link
            to="/transactions"
            className="flex items-center gap-3 hover:text-green-400 transition"
          >
            <FaHistory />
            Transactions
          </Link>

          <Link
            to="/converter"
            className="flex items-center gap-3 hover:text-green-400 transition"
          >
            <FaExchangeAlt />
            Converter
          </Link>

          <Link
            to="/simulator"
            className="flex items-center gap-3 hover:text-green-400 transition"
          >
            <FaCalculator />
            Simulator
          </Link>

        </div>

      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 py-3 rounded-xl font-bold hover:bg-red-600 transition"
      >
        Logout
      </button>

    </div>

  )

}

export default Sidebar