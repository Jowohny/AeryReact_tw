import Navbar from "./navbar/navbar";
import Info from "./Info/info";

function App() {

  return (
    <div className="h-screen bg-gradient-to-b from-aery-purple to-white min-h-full overflow-y-auto smooth-scroll">
      <Navbar />
      <Info />
    </div>
  )
}

export default App
