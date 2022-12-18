import "@fontsource/cormorant-garamond"
import "@fontsource/cormorant-garamond/700.css"
import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <div className="body-background">
    </div>
    <Navbar />
    <div className="page-title-blur pad-large col heavy-weight font-size-h1 flex">
        <div>
          Marry
        </div>
        <div>
          Weddin'
        </div>
    </div>
    </>
  );
}

export default App;
