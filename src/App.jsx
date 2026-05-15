import {
  Routes,
  Route
} from "react-router-dom"

import MainLayout from "./layouts/MainLayout"

import ProtectedRoute from "./components/ProtectedRoute"

import Dashboard from "./pages/Dashboard"
import Portfolio from "./pages/Portfolio"
import Watchlist from "./pages/Watchlist"
import Transactions from "./pages/Transactions"
import Converter from "./pages/Converter"
import Simulator from "./pages/Simulator"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>

            <MainLayout>
              <Dashboard />
            </MainLayout>

          </ProtectedRoute>
        }
      />

      <Route
        path="/portfolio"
        element={
          <ProtectedRoute>

            <MainLayout>
              <Portfolio />
            </MainLayout>

          </ProtectedRoute>
        }
      />

      <Route
        path="/watchlist"
        element={
          <ProtectedRoute>

            <MainLayout>
              <Watchlist />
            </MainLayout>

          </ProtectedRoute>
        }
      />

      <Route
        path="/transactions"
        element={
          <ProtectedRoute>

            <MainLayout>
              <Transactions />
            </MainLayout>

          </ProtectedRoute>
        }
      />

      <Route
        path="/converter"
        element={
          <ProtectedRoute>

            <MainLayout>
              <Converter />
            </MainLayout>

          </ProtectedRoute>
        }
      />

      <Route
        path="/simulator"
        element={
          <ProtectedRoute>

            <MainLayout>
              <Simulator />
            </MainLayout>

          </ProtectedRoute>
        }
      />

    </Routes>

  )

}

export default App