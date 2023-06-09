
// import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import Sidebar from "./components/sidebar/Sidebar";
// import Roadmap from "./pages/roadmap/Roadmap"
import Home from "./pages/home/Home"
import { BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    // <>
    // <Navbar />
    // <Footer />
    // </>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Header />
      {/* <Sidebar /> */}
      {/* <Roadmap /> */}
      <Home />
      <Footer />
    </BrowserRouter>
    
  )
}

export default App;
