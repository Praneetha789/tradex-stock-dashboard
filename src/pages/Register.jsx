import { useState } from "react"

import {
  createUserWithEmailAndPassword
} from "firebase/auth"

import { auth } from "../firebase"

import { useNavigate, Link } from "react-router-dom"

function Register() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  async function handleRegister() {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      navigate("/login")

    }

    catch (error) {

      alert(error.message)

    }

  }

  return (

    <div className="min-h-screen bg-black flex items-center justify-center p-4">

      <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-8">
          Register
        </h1>

        <div className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter Email"
            className="bg-black p-3 rounded-xl outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="bg-black p-3 rounded-xl outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="bg-green-500 py-3 rounded-xl font-bold hover:bg-green-600"
            onClick={handleRegister}
          >
            Create Account
          </button>

          <p className="text-center text-gray-400">

            Already have an account?

            <Link
              to="/login"
              className="text-green-400 ml-2"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>

  )

}

export default Register