import Sidebar from "../components/Sidebar"

function MainLayout({ children }) {

  return (

    <div className="flex bg-black text-white min-h-screen">

      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 p-4 md:p-8">
        {children}
      </div>

    </div>

  )

}

export default MainLayout