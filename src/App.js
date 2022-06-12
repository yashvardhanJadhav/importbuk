import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar ishomepage={true}/>
      <Search />
      <Footer />
    </div>
  );
}

export default App;
