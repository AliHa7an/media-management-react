import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Management from "./mediaManagement";
function App() {
  return (
    <>
      <Header />
      <div className="media-management">
        <div className="container">
          <Management />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
