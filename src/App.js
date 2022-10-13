import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginFacebook from "./pages/LoginFacebook/LoginFacebook";
import LoginWithFacebook from "./pages/LoginWithFacebook/LoginWithFacebook";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path={"/"} element={<LoginFacebook />} />
          <Route path={"/with"} element={<LoginWithFacebook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
